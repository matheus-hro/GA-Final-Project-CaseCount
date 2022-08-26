import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import * as api from "./api/apiBarrel.mjs";
import { Modal, NavResponsive } from "./components/componentBarrel.mjs";
import { CanvasPage, HomePage, LoginPage, LogoutPage, SavedPage } from "./pages/pageBarrel.mjs";
import {addToCart, removeFromCart} from "./cart/cart.mjs"

function App() {
  const [userState, setUserState] = useState(null);
  const [cart, setCart] = useState({ lineItems: [], subtotal: 0 });
  const [availableCases, setAvailableCases] = useState([]);
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchCaseModelsFromDb();
  }, []);

  async function fetchCaseModelsFromDb() {
    const caseModels = await api.CaseModel.index();
    setAvailableCases(caseModels);
  }

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem("token");
        token = null;
      } else {
        setUserState(payload.user);
      }
    } else {
      setUserState(false);
    }
  }, [location]);

  function addToCartCb(lineItem){
    const newCart = addToCart(cart, lineItem);
    setCart(newCart);
  };

  function removeFromCartCb(lineItem){
    const newCart = removeFromCart(cart, lineItem);
    setCart(newCart);
  }

  return (
    <div className="App">
      {modalOpen && (
        <Modal
          cart={cart}
          availableCases={availableCases}
          addToCart={addToCartCb}
          checkout={()=>api.stripe.checkout(cart.lineItems)}
          removeFromCart={removeFromCartCb}
          setModalOpen={setModalOpen}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavResponsive setModalOpen={setModalOpen} user={userState} />
              <HomePage
                setModalOpen={setModalOpen}
                availableCases={availableCases}
                user={userState}
              />
            </>
          }
        />

        <Route
          path="/canvas"
          element={
            <>
              <NavResponsive setModalOpen={setModalOpen} user={userState} />
              <CanvasPage
                availableCases={availableCases}
                setAvailableCases={setAvailableCases}
                addToCart={addToCart}
                user={userState}
              />
            </>
          }
        />

        <Route
          path="/saved"
          element={
            <>
              <NavResponsive setModalOpen={setModalOpen} user={userState} />
              <SavedPage
                availableCases={availableCases}
                user={userState}
                addToCart={addToCartCb}
              />
            </>
          }
        />

        <Route path="/login" element={<LoginPage user={userState} />} />
        <Route path="/logout" element={<LogoutPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
