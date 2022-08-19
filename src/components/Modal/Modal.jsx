import React, {useState} from 'react';
import './Modal.css';

export default function Modal (props){ 
  return(
    <div className='modal-overlay'>
      <div className='modal-container'>
        <button>&times;</button>
          <div>
            <img src="" alt="" />
          </div>
            <div className='modal-body'>
              <p>iPhone Case</p>
              <p>$24</p>
            </div>
              <div className='modal-cta'>
                <button className='addToCart-btn'>Add to cart</button>
              </div>
      </div>
    </div>
  )
}
