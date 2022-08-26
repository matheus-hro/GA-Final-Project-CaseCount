import React from 'react';
import './PhonePreview.css';

export default function PhonePreview(props) {

  return (
    <article className="phone-preview">
      <div >
        <img
          src={props.caseModelImg}
          alt=""
          onLoad={() => props.setBusy(false)}
          style={{ 
            backgroundColor: props.caseColor,
            backgroundImage: `url('${props.casePattern}')`,
            backgroundRepeat: 'repeat'
          }}
        />
      </div>

    </article>
  )
}