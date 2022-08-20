import React from 'react';
import './PhonePreview.css';

export default function PhonePreview(props) {
 
  return (
    <article className="phone-preview">
      <div style={{backgroundColor: props.caseColor}}>
        <img src="/images/iphone10case1.png" alt="" />
      </div>
      
    </article>
  )
}