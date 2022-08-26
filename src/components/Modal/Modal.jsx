import React, { useState } from "react";
import "./Modal.css";
import * as Components from "../../components/componentBarrel.mjs";
import Form from "react-bootstrap/Form";

export default function Modal(props) {
  const { CanvasBtn } = Components;
  const cart = props.cart;
  const availableCases = props.availableCases;

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
              <p>
                {availableCases.find((e,i)=>{
                  return 1
                })}
              </p>
              <p>{e.color.name}</p>
              <p>{e.displayPrice}</p>
            </div>
          ))}
          
          <Form.Select id="qty-select" size="sm" aria-label="Default select example">
            <option>Quantity</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
        <div className="modal-cta">
          <CanvasBtn className="addToCart-btn" text="Add to cart" />
        </div>
      </div>
    </div>
  );
}
