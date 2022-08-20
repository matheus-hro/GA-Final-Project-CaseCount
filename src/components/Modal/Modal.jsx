import React, {useState} from 'react';
import * as Components from '../../components/componentBarrel.mjs'

export default function Modal (props){
  const {CanvasBtn} = Components;

  return(
    <div className='modal-overlay'>
      <div className='modal-container'>
        
      <div className='modal-body'>
          <button className='close-modal-btn' onClick={()=> props.setOpenModal(false)}>&times;</button>
          
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
