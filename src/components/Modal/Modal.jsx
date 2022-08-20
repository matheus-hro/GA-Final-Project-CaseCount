import React, {useState} from 'react';
import CanvasBtn from '../CanvasBtn/CanvasBtn';
import './Modal.css';

export default function Modal (props){

  return(
    <div className='modal-overlay'>
      <div className='modal-container'>
        
      <div className='modal-body'>
          <button className='close-modal-btn'>&times;</button>
          <p>iPhone Case</p>
          <p>$24</p>
          </div>
            <div className='modal-cta'>
              <CanvasBtn className='addToCart-btn' text='Add to cart'/>
            </div>
      </div>
    </div>
  )
}