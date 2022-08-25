import React, {useState} from 'react';
import './Picker.css';

import * as Components from '../componentBarrel.mjs';
const CanvasBtn = Components.CanvasBtn;

export default function Picker(props) {
  
  const colors = props.colors;
  const caseColor = props.caseColor
  const availablePatterns = props.availablePatterns
  return (
    <article className='pickers-panel'>
       <h4 className='picker-title'>Colors</h4>
    <div className='picker-container'>
       {colors.map((e,i) => (
        <div key={i} className='picker-card'>
          <div 
             className="box"
             style={{backgroundColor: e.hex,
               boxShadow: caseColor.hex === e.hex ? "0 0 5px 000" : ""
              }}
             
             onClick={() => props.setCaseColor(e)}>
            
          </div>
        </div>
       ))}
    </div>
    <h4 className='picker-title'>Patterns</h4>
    <div className='picker-container'>
       {availablePatterns.map((e,i) => (
        <div key={i} className='picker-card'>
          <div 
             className="box"
             style={{backgroundImage: `url(${e})`
              //  boxShadow: casePattern === pattern ? "0 0 5px 000" : ""
              }}
             
             onClick={() => props.setCasePattern(e)}>
            
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

