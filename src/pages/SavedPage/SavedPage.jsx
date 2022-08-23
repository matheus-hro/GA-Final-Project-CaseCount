import React, {useState} from 'react';
import './SavedPage.css';
import { useEffect } from 'react';
import * as api from '../../api/apiBarrel.mjs';
import * as Components from '../../components/componentBarrel.mjs';
import phoneImg from './testPhone.png';



export default function SavedPage (props) {
  const {NavResponsive, Modal, CanvasBtn } = Components;
  const image = phoneImg;
  // temporary array to map through:
  const [modalOpen, setModalOpen] = useState(false);
  const [savedDesigns, setSavedDesigns] = useState([]);

  async function fetchSavedDesignsFromDb(){
    const userDesigns = await api.UserDesign.index();
    setSavedDesigns(userDesigns);
  }

  useEffect(()=>{
    fetchSavedDesignsFromDb();   
  },[])
  

  return (
    <div>
      <NavResponsive user={props.user}/>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      <section className='wrap main'>
        <h2>Saved</h2>
        <p>My saved items</p>
        <article className='saved-main'>
        {savedDesigns.map((e,i) => (
          <div key={i} className= "savedPhone-container">
            <div className= "savedPhone-img">
              <img src={image} style={{backgroundColor:e.color.hex}} alt="" />
            </div>
            <h4>{e.caseModel.phoneModel}</h4>
            <h4>{e.caseModel.basePrice}</h4>
            <CanvasBtn handleClick={setModalOpen} className='addToCart-btn' text='Add to cart' />
          </div>
        ))}
        </article>
       
      </section>
    </div>
  )
}