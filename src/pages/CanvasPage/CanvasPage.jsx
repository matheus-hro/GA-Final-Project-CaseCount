import React from 'react';
import './CanvasPage.css';
import Navbar from "../../components/Navbar/Navbar";
import Picker from '../../components/Picker/Picker';
import PhonePreview from '../../components/PhonePreview/PhonePreview';
import PhoneDropDown from '../../components/PhoneDropDown/PhoneDropDown';
import AddToCartBtn from '../../components/AddToCartBtn/AddToCartBtn';
import SaveBtn from '../../components/SaveBtn/SaveBtn';
import { useEffect } from 'react';
import { useState } from 'react';


export default function CanvasPage (props) {
  const [availableColors, setAvailableColors] = useState([]);
  
    useEffect(async ()=>{
      try{
        const fetchResponse = await fetch('api/colors', {
          method: 'GET',
          headers:{'Content-Type':'application/json'},
          referrerPolicy:'origin'
        });
        if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request');
        const colors = await fetchResponse.json();
        console.log(colors)
        setAvailableColors(JSON.parse(colors));
      }catch(err){
        console.log("Caught error when fetching colors: ", err);
      }
      
    },[])
  
    return(
      <div>
        <Navbar />
        <div className=' wrap canvas-main'>
          <Picker />
          <PhonePreview />
          <div>
            <PhoneDropDown />
            <div className='add-save-btns'>
                <AddToCartBtn />
                <SaveBtn />
            </div>
          </div>
         
      
        </div> 
      </div>
      
    )
}