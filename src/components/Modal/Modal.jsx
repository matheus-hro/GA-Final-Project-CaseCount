import React, {useState} from 'react';
import './Modal.css';

export default function Modal (props){
  const setOpenModal = props.setModalOpen;

  return(
    <div className='modal-overlay'>
      <div className='modal-container'>
        
      <div className='modal-body'>
          <button className='close-modal-btn' onClick={()=> props.setOpenModal(false)}>&times;</button>
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
