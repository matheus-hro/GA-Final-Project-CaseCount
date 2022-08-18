import React, {useState} from 'react';
import './Picker.css';

export default function Picker(props) {
  
  const colors = props.colors;
  return (
    <article className='pickers-panel'>
       <h4 className='picker-title'>Colors</h4>
    <div className='picker-container'>
       {colors.map((color,index) => (
        <div key={index} className='picker-card'>
          <div 
             className="box"
             style={{backgroundColor: color.hex,
              }}
             
             onClick={() => props.setCanvasColor(color.hex)}>
            
          </div>
        </div>
       ))}
    </div>
    <div className='picker-btns'>
      <button className='randomize-btn'>randomize</button>
      <button className='reset-btn'>reset</button>
    </div>
    

    </article>
   
  )
}

