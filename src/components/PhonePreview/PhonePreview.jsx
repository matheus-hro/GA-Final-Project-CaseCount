import React from 'react';
import './PhonePreview.css';
import AddToCartBtn from '../../components/AddToCartBtn/AddToCartBtn';
import SaveBtn from '../../components/SaveBtn/SaveBtn';
export default function PhonePreview() {

  return (
    <article className="phone-preview">
      <div>
        <img src="/images/case.png" alt="" />
      </div>
      <div className='add-save-btns'>
             <AddToCartBtn />
             <SaveBtn />
          </div>
    </article>
  )
}