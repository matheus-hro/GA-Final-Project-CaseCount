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
          {!cart.lineItems.length ? "Your cart is empty!" : 
            (cart.lineItems.map((e,i)=>(
              <div key={i}>
                <p>{e.liname}</p>
                <p>Color: {e.color.name}</p>
                {e.patternName ?  <p>Pattern: {e.patternName} </p> : null}
                <p>Quantity:{e.quantity}</p>
                <p>${(e.displayPrice * e.quantity).toFixed(2)}</p>
                <CanvasBtn text="-" handleClick={()=>props.removeFromCart(i)}/>
                <CanvasBtn text="+" handleClick={()=>props.addToCart(e)}/>
              </div>
            )))
          }
          <p>Total:${cart.subtotal}</p>
        </div>
        <div className="modal-cta">
        </div>
      </div>
    </div>
  );
}
