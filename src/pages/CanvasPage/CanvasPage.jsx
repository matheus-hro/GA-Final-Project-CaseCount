
import React, {useState} from 'react';

import './CanvasPage.css';
import Navbar from "../../components/Navbar/Navbar";
import Picker from '../../components/Picker/Picker';
import PhonePreview from '../../components/PhonePreview/PhonePreview';
import PhoneDropDown from '../../components/PhoneDropDown/PhoneDropDown';
import AddToCartBtn from '../../components/AddToCartBtn/AddToCartBtn';
import SaveBtn from '../../components/SaveBtn/SaveBtn';
import { useEffect } from 'react';


export default function CanvasPage (props) {
  const [availableColors, setAvailableColors] = useState([]);
  const [canvasColor, setCanvasColor] = useState("white");

  async function fetchColors(){
    try{
      const fetchResponse = await fetch('api/colors', {
        method: 'GET',
        headers:{'Content-Type':'application/json'},
        referrerPolicy:'origin'
      });
      if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request');
      const colors = await fetchResponse.json();
      setAvailableColors(colors);
      console.log(availableColors)
    }catch(err){
      console.log("Caught error when fetching colors: ", err);
    }
  }
  
  useEffect(()=>{
    fetchColors();   
  },[])
  
    return(
      <div>
        <Navbar />
        <div className=' wrap canvas-main'>
          <Picker colors={availableColors} setCanvasColor={setCanvasColor} />
          <div className='canvas-middle-container'>
            <PhonePreview caseColor={canvasColor}/>
            <div className='add-save-btns'>
              <AddToCartBtn />
              <SaveBtn />
            </div>
          </div>
          <div>
            <PhoneDropDown />
            
          </div>
        </div> 
      </div>

    )
}