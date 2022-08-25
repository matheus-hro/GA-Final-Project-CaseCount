import React, { useState } from "react";
import "./Modal.css";
import * as Components from "../../components/componentBarrel.mjs";
import Form from "react-bootstrap/Form";
import iPhone from "./iPhone.png";

export default function Modal(props) {
  const { CanvasBtn } = Components;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-body">
          <button
            className="close-modal-btn"
            onClick={() => props.setOpenModal(false)}
          >
            &times;
          </button>
          <div>
            <img src={iPhone} alt="" />
          </div>
          <p>iPhone Case $24</p>
          
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
