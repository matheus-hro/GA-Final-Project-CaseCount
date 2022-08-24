import React from 'react';
import './PhonePreview.css';

export default function PhonePreview(props) {
 
  return (
    <article className="phone-preview">
      <div>
        <img style={{backgroundColor: props.caseColor, backgroundImage: props.casePattern, backgroundRepeat:'repeat'}} src="/images/iphone10case1.png" alt="" />
      </div>
      
    </article>
  )
}