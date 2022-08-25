import './App.css';
import React, {useState, useEffect} from 'react'
import {Route, Routes, Navigate, useLocation} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import LogoutPage from './pages/LogoutPage/LogoutPage.jsx';
import CanvasPage from './pages/CanvasPage/CanvasPage';
import SavedPage from './pages/SavedPage/SavedPage';
import {loadStripe} from '@stripe/stripe-js'
import * as api from './api/apiBarrel.mjs';
import * as Components from './components/componentBarrel.mjs';



function App() {
  const [userState, setUserState] = useState(null)
  const [cart, setCart] = useState([])
  //lineItem schema = {productId, price, quantity, color, pattern(optional)}
  const [availableCases, setAvailableCases] = useState([]);
  //caseObj = {productId, name, phoneManufacturer, phoneMode, type, displayPrice, imgUrl, price}
  const location = useLocation()

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
      setUserState(null)
    }
  }, [location]);

  async function checkout(){
    try{
      const stripe = await loadStripe('pk_test_51LZHdxDmNZgLC2UAJNMlxqj13FmaIAQ7z1BgFGUbK3lLvJWucHmzJpHhfYoVKgHf6tdki5c2YX4z1GZ5rRiUDlmr00kHu59c0G');
      let checkoutResponse = await fetch("stripe/checkout", {
        method: "POST",
        referrerPolicy: "origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cart)
      });
      
      const session = await checkoutResponse.json();
      return stripe.redirectToCheckout({sessionId:session.id});    
    }catch(err){
      console.log("error caught in checkout function: ", err);
    }
  }

  function isItemInCart(e){
    if(e.productId===this.productId && e.price===this.price && e.color===this.color && e.pattern===this.pattern){
      return true;
    }return false;
  }
  function addToCart(lineItem){
    const itemInCart = cart.findIndex(isItemInCart,lineItem)
    if(itemInCart===-1){
      lineItem = {...lineItem, quantity:1}
      setCart([...cart,lineItem]);
    }else{
      let newCart = structuredClone(cart);
      newCart[itemInCart].quantity++;
      setCart(newCart);
    }
  }

  useEffect(() => {
    fetchCaseModelsFromDb();
  }, [])
  
  return (
    <div className="App">
      <Routes >
      <Route path='/' element={<HomePage user={userState}/>}/>
      <Route path='/login'  element={<LoginPage user={userState}/>}/>
      <Route path="/logout" element={<LogoutPage/>}/>
      <Route path='/canvas' element={<CanvasPage availableCases={availableCases} setAvailableCases={setAvailableCases} addToCart={addToCart} user={userState}/>}/>
      <Route path='/saved' element={<SavedPage availableCases={availableCases} user={userState} addToCart={addToCart}   />}/>
      <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
      
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}

export default App;
