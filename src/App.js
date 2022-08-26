import './App.css';
import React, {useState, useEffect} from 'react'
import {Route, Routes, Navigate, useLocation, useRouteMatch} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import LogoutPage from './pages/LogoutPage/LogoutPage.jsx';
import CanvasPage from './pages/CanvasPage/CanvasPage';
import SavedPage from './pages/SavedPage/SavedPage';
import {loadStripe} from '@stripe/stripe-js'
import * as api from './api/apiBarrel.mjs';
import * as Components from './components/componentBarrel.mjs';


function App() {
  const { Modal } = Components;
  const [userState, setUserState] = useState(null)
  const [cart, setCart] = useState({lineItems:[], subtotal:0})
  //lineItem schema  -> {productId, price, quantity, color{name, hex}, displayPrice, patternName(optional)}
  const [availableCases, setAvailableCases] = useState([]);
  //caseObj schema for app -> {productId, name, displayPrice, imgUrl, price}
  const location = useLocation()
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchCaseModelsFromDb();
  }, [])

  async function fetchCaseModelsFromDb() {
    const caseModels = await api.CaseModel.index();
    setAvailableCases(caseModels);
  }
  
  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      if (payload.exp < Date.now() / 1000) {  
        localStorage.removeItem('token');
        token = null;
      } else { 
        setUserState(payload.user)
      }
    }else{
      setUserState(false)
    }
  }, [location]);

  async function checkout(){
    try{
      const stripe = await loadStripe('pk_test_51LZHdxDmNZgLC2UAJNMlxqj13FmaIAQ7z1BgFGUbK3lLvJWucHmzJpHhfYoVKgHf6tdki5c2YX4z1GZ5rRiUDlmr00kHu59c0G');
      let checkoutResponse = await fetch("stripe/checkout", {
        method: "POST",
        referrerPolicy: "origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cart.lineItems)
      });
      
      const session = await checkoutResponse.json();
      return stripe.redirectToCheckout({sessionId:session.id});    
    }catch(err){
      console.log("error caught in checkout function: ", err);
    }
  }

  function addToCart(lineItem){
    function isItemInCart(e){
      if(
        e.productId===this.productId &&
        e.color._id===this.color._id &&
        e.patternName===this.patternName
      ){
        return true;
      }return false;
    }
    let {lineItems, subtotal} = {...cart};
    const itemIndex = cart.lineItems.findIndex(isItemInCart,lineItem)
    if(itemIndex===-1){
      lineItem = {...lineItem, quantity:1}
      lineItems.push(lineItem);
      subtotal +=lineItem.displayPrice;

    }else{    
      lineItems[itemIndex].quantity++;
      subtotal += lineItem.displayPrice;

    }
    setCart({lineItems:lineItems, subtotal: (Math.round((subtotal+Number.EPSILON)*100)/100) });
  }

  function removeFromCart(itemIndex){
    let {lineItems, subtotal} = {...cart};
    if(lineItems[itemIndex].quantity<=1){
      subtotal-=lineItems[itemIndex].displayPrice;
      lineItems.splice(itemIndex, 1);
    }else{
      subtotal-=lineItems[itemIndex].displayPrice;
      lineItems[itemIndex].quantity--;
    }
    setCart({lineItems:lineItems, subtotal:(Math.round((subtotal+Number.EPSILON)*100)/100) });
  }
  
  return (
    <div className="App">
       {modalOpen && <Modal cart={cart} availableCases={availableCases} addToCart={addToCart} removeFromCart={removeFromCart} setModalOpen={setModalOpen} />}
      <Routes >
      <Route path='/'  element={<HomePage setModalOpen={setModalOpen} availableCases={availableCases} user={userState}/>}/>
      <Route path='/login'  element={<LoginPage user={userState}/>}/>
      <Route path="/logout" element={<LogoutPage/>}/>
      <Route path='/canvas'  element={<CanvasPage setModalOpen={setModalOpen} availableCases={availableCases} setAvailableCases={setAvailableCases} addToCart={addToCart} user={userState}/>}/>
      <Route path='/saved'  element={<SavedPage setModalOpen={setModalOpen} availableCases={availableCases} user={userState} addToCart={addToCart}   />}/>
      <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
      
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}

export default App;
