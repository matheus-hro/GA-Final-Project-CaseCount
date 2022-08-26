import React, { useState } from 'react';
import './SavedPage.css';
import { useEffect, useRef } from 'react';
import * as api from '../../api/apiBarrel.mjs';
import  { CanvasBtn } from '../../components/componentBarrel.mjs';
import availablePatterns from '../../svgs/patterns.js'

export default function SavedPage(props) {
  const [savedDesigns, setSavedDesigns] = useState([]);
  const availableCases = props.availableCases;
  const user = props.user;
  let imgRef = useRef([])

  useEffect(() => {
      fetchSavedDesignsFromDb();
  }, [user, availableCases])

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

  useEffect(()=>{
    imgRef.current = imgRef.current.slice(0, savedDesigns.length);
    console.log(imgRef)
  },[savedDesigns])

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
        <h2 className="saved-title">Saved designs</h2>
        {!user ? <p>Log in to see your case designs!</p> :
        !savedDesigns.length ? <p>You haven't saved any designs yet!</p> :
        (<article className='saved-main'>
          {savedDesigns.map((e, i) => (
            <div key={i} className="savedPhone-container">
              <div className="savedPhone-img">
                <img 
                  alt=""
                  ref={el => imgRef.current[i] = el} 
                  src={e.imgUrl} 
                  style={{
                    backgroundColor: e.color.hex,
                    backgroundImage: `url(${availablePatterns.get(e.patternName)})`,
                    backgroundRepeat: 'repeat'
                  }}
                />
              </div>
              <p className="product-title">{e.name}</p>
              <h4 className="product-price">${e.displayPrice}</h4>
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