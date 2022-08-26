import React, { useState } from "react";
import "./Modal.css";
import * as Components from "../../components/componentBarrel.mjs";

export default function Modal(props) {
  const { CanvasBtn } = Components;
  const cart = props.cart;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-body">
          <button
            className="close-modal-btn"
            onClick={() => props.setModalOpen(false)}
          >
            &times;
          </button>
          {cart.lineItems.map((e,i)=>(
            <div key={i}>
              <h5>{e.name}</h5>
              <p>Color: {e.color.name}</p>
              {e.patternName ?  <p>Pattern: {e.patternName} </p> : null}
              <div className="quantity-container">
                <CanvasBtn className="quantity-btn" text="-" handleClick={()=>props.removeFromCart(i)}/>
                <p>Quantity:{e.quantity}</p>
                <CanvasBtn className="quantity-btn" text="+" handleClick={()=>props.addToCart(e)}/>
              </div>
              
              <h6 className="total-price">Total: {e.displayPrice * e.quantity}</h6>
              
              
            </div>
          ))}
        <CanvasBtn className="addToCart-btn" text="Checkout" handleClick={props.checkout}/>
        <p>Total:${cart.subtotal}</p>
        </div>
        <div className="modal-cta">
        </div>
      </div>
    </div>
  );
}
