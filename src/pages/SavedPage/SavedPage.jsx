import React, { useState } from 'react';
import './SavedPage.css';
import { useEffect } from 'react';
import * as api from '../../api/apiBarrel.mjs';
import  { CanvasBtn } from '../../components/componentBarrel.mjs';
import availablePatterns from '../../svgs/patterns.js'

export default function SavedPage(props) {
  const [savedDesigns, setSavedDesigns] = useState([]);
  const availableCases = props.availableCases;
  const user = props.user;

  async function fetchSavedDesignsFromDb() {
    let userDesigns = await api.UserDesign.index();
    userDesigns = userDesigns.map((e, i) => {
      const caseModel = availableCases.find(f => e.productId === f.productId)
      if (caseModel === undefined) { return undefined }
      return {
        ...e, 
        name: caseModel.name,
        price: caseModel.price,
        displayPrice: caseModel.displayPrice,
        imgUrl: caseModel.imgUrl
      };
    })
    userDesigns = userDesigns.filter(e => e !== undefined)
    setSavedDesigns(userDesigns);
  }

  useEffect(() => {
      fetchSavedDesignsFromDb();
  }, [user, availableCases])

  async function deleteDesign(id){
    const successful = await api.UserDesign.destroy(id);
    if (!successful){
      alert("Sorry, try again.")
    }
    fetchSavedDesignsFromDb()
  }
  
  return (
    <div>
      <section className='wrap main'>
        <h2>Saved designs</h2>
        {!user ? <p>Log in to see your case designs!</p> :
        !savedDesigns.length ? <p>You haven't saved any designs yet!</p> :
        (<article className='saved-main'>
          {savedDesigns.map((e, i) => (
            <div key={i} className="savedPhone-container">
              <div className="savedPhone-img">
                <img src={e.imgUrl} style={{
                  backgroundColor: e.color.hex,
                  backgroundImage: `url(${availablePatterns.get(e.patternName)})`,
                  backgroundRepeat: 'repeat'}} alt="" />
              </div>
              <h4>{e.name}</h4>
              <h4>${e.displayPrice}</h4>
              <CanvasBtn className='addToCart-btn' text='Add to cart' 
                handleClick={() => props.addToCart(e)} 
              />
              <br/>
              <CanvasBtn className='addToCart-btn' text='Delete' 
                handleClick={()=>deleteDesign(e._id)} 
              />
            </div>
          ))}
        </article>)
        }
        
        

      </section>
    </div>
  )
}