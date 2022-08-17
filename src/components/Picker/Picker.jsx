import React, {useState} from 'react';
import './Picker.css';

export default function Picker() {

  const colors = ["#B81731", "#FF632C", "#FFCC33", "#009956", "#2A3778", "#007995", "#EAD1CB", "#B9A8CA"]
  const [background, setBackground] = useState("");
  return (
    <article className='pickers-panel'>
       <h4 className='picker-title'>Colors</h4>
    <div className='picker-container'>
       {colors.map((color,index) => (
        <div key={index} className='picker-card'>
          <div 
             className="box"
             style={{
              background:color,
              border: color === background ? "2px solid #000" : ""
             }}
             onClick={() => setBackground(color)}>

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

