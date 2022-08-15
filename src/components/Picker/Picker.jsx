import React, {useState, useEffect} from 'react';
import './Picker.css';

export default function Picker() {

  const colors = ["#B81731", "#FF632C", "#FFCC33", "#009956", "#2A3778", "#007995", "#EAD1CB", "#B9A8CA"]

  return (
    <article className='pickers-panel'>
       <h4>Colors</h4>
    <div className='picker-container'>
       {colors.map((color,index) => (
        <div key={index} className='picker-card'>
          <div 
             className="box"
             style={{
              background:color,
             }}>

          </div>
        </div>
       ))}
    </div>
    <button className='randomize-btn'>randomize</button>
    <button className='reset-btn'>reset</button>

    </article>
   
  )
}

