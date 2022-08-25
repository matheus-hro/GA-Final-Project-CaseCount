import React from 'react';
import './PhonePreview.css';

export default function PhonePreview(props) {
 
  return (
    <article className="phone-preview">
      <div>
        <img style={{backgroundColor: props.caseColor, backgroundImage: `url('${props.casePattern}')`, backgroundRepeat:'repeat'}} src={props.caseModelImg} alt="" />
      </div>
      
    </article>
  )
}