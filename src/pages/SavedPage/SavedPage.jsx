import React, {useState} from 'react';
import './SavedPage.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import * as api from '../../api/apiBarrel.mjs';
import * as Components from '../../components/componentBarrel.mjs';
import phoneImg from './testPhone.png';



export default function SavedPage (props) {
  const {Navbar, Modal, CanvasBtn } = Components;

  // temporary array to map through:
  const phones = [
    {phoneName: 'iPhone', price: '$24', image:phoneImg},
    {phoneName: 'iPhone', price: '$24', image:phoneImg},
    {phoneName: 'iPhone', price: '$24', image:phoneImg},
    {phoneName: 'iPhone', price: '$24', image:phoneImg},
    {phoneName: 'iPhone', price: '$24', image:phoneImg},
    {phoneName: 'iPhone', price: '$24', image:phoneImg},
  ];
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Navbar user={props.user}/>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      <section className='wrap main'>
        <h2>Saved</h2>
        <p>My saved items</p>
        <article className='saved-main'>
        {phones.map((phone,index) => (
          <div key={index} className= "savedPhone-container">
            <div className= "savedPhone-img">
              <img src={phone.image} alt="" />
            </div>
            <h4>{phone.phoneName}</h4>
            <h4>{phone.price}</h4>
            <CanvasBtn handleClick={setModalOpen} className='addToCart-btn' text='Add to cart' />
          </div>
        ))}
        </article>
       
      </section>
    </div>
  )
}