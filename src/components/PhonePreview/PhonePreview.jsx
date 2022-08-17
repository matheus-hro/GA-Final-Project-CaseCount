import React from 'react';
import './PhonePreview.css';

export default function PhonePreview(props) {
 
  return (
    <article className="phone-preview">
      <div style={{backgroundColor: props.caseColor}}>
        <img src="/images/case.png" alt="" />
      </div>
      
    </article>
  )
}