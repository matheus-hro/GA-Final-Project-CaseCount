import React, {useState} from 'react';
import './Picker.css';

import * as Components from '../componentBarrel.mjs';
const CanvasBtn = Components.CanvasBtn;

export default function Picker(props) {
  
  const colors = props.colors;
  const selectedColor = props.selectedColor
  
  return (
    <article className='pickers-panel'>
       <h4 className='picker-title'>Colors</h4>
    <div className='picker-container'>
       {colors.map((color,index) => (
        <div key={index} className='picker-card'>
          <div 
             className="box"
             style={{backgroundColor: color.hex,
               boxShadow: selectedColor.hex === color.hex ? "0 0 5px 000" : ""
              }}
             
             onClick={() => props.setCaseColor(color)}>
            
          </div>
        </div>
       ))}
    </div>
    <div className='picker-btns'>
      <CanvasBtn className='randomize-btn' text='randomize'/>
      <CanvasBtn className='reset-btn' text='reset'/>
    </div>
    </article>
   
  )
}

