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
          {cart.map((e,i)=>(
            <div key={i}>
              <h5>{e.name}</h5>
              <p>Color: {e.color.name}</p>
              {e.patternName ?  <p>Pattern: {e.patternName} </p> : null}
              <div className="quantity-container">
                <CanvasBtn className="quantity-btn" text="-"/>
                <p>Quantity:{e.quantity}</p>
                <CanvasBtn className="quantity-btn" text="+"/>
              </div>
              
              <h6 className="total-price">Total: {e.displayPrice * e.quantity}</h6>
              <CanvasBtn className="addToCart-btn" text="Checkout"/>
              
            </div>
          ))}
        </div>
        <div className="modal-cta">
        </div>
      </div>
    </div>
  );
}
