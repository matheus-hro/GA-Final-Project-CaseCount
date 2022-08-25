import React, { useState } from 'react';
import './SavedPage.css';
import { useEffect } from 'react';
import * as api from '../../api/apiBarrel.mjs';
import * as Components from '../../components/componentBarrel.mjs';
import phoneImg from './testPhone.png';



export default function SavedPage(props) {
  const { NavResponsive, Modal, CanvasBtn } = Components;
  const [savedDesigns, setSavedDesigns] = useState([]);
  const image = phoneImg;
  const availableCases = props.availableCases;
  // temporary array to map through:
  const [modalOpen, setModalOpen] = useState(false);

  async function fetchSavedDesignsFromDb() {
    let userDesigns = await api.UserDesign.index();
    console.log("userDesigns from db: ", userDesigns)
    console.log("available cases: ", availableCases)
    userDesigns = userDesigns.map((e, i) => {
      const caseModel = availableCases.find(f => e.productId === f.productId)
      if (caseModel === undefined) { return undefined }
      return {...e, name:caseModel.name, price:caseModel.price, displayPrice:caseModel.displayPrice, imgUrl:caseModel.imgUrl};
    })
    userDesigns = userDesigns.filter(e => e !== undefined)
    console.log(userDesigns)
    setSavedDesigns(userDesigns);
  }

  useEffect(() => {
    fetchSavedDesignsFromDb();
  }, [availableCases])


  return (
    <div>
      <NavResponsive user={props.user} />
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      <section className='wrap main'>
        <h2>Saved</h2>
        <p>My saved items</p>
        <article className='saved-main'>
          {savedDesigns.map((e, i) => (
            <div key={i} className="savedPhone-container">
              <div className="savedPhone-img">
                <img src={e.imgUrl} style={{ backgroundColor: e.color.hex }} alt="" />
              </div>
              <h4>{e.name}</h4>
              <h4>{e.displayPrice}</h4>
              <CanvasBtn handleClick={()=>props.addToCart({productId:e.productId,price:e.price,color:e.color,pattern:e.pattern })} className='addToCart-btn' text='Add to cart' />
            </div>
          ))}
        </article>

      </section>
    </div>
  )
}