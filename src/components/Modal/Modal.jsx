import React, { useState } from "react";
import "./Modal.css";
import * as Components from "../../components/componentBarrel.mjs";
import Form from "react-bootstrap/Form";

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
          {!cart.length ? "Your cart is empty!" : 
            (cart.map((e,i)=>(
              <div key={i}>
                <p>{e.name}</p>
                <p>Color: {e.color.name}</p>
                {e.patternName ?  <p>Pattern: {e.patternName} </p> : null}
                <p>Quantity:{e.quantity}</p>
                <p>Total: ${(e.displayPrice * e.quantity).toFixed(2)}</p>
                <CanvasBtn text="-" handleClick={()=>props.removeFromCart(i)}/>
                <CanvasBtn text="+" handleClick={()=>props.addToCart(e)}/>
              </div>
            )))
          }
        </div>
        <div className="modal-cta">
        </div>
      </div>
    </div>
  );
}
