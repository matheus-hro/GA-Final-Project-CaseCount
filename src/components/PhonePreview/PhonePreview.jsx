import React from 'react';
import './PhonePreview.css';
import { useState, useRef } from 'react';

export default function PhonePreview(props) {
  const [isBusy, setBusy] = useState(true);

 
  return (
    <article className="phone-preview">
      <div >
        <img onLoad={()=>props.setBusy(false)} style={{backgroundColor:props.caseColor, backgroundImage: `url('${props.casePattern}')`, backgroundRepeat:'repeat'}} src={props.caseModelImg} alt="" />
      </div>
      
    </article>
  )
}