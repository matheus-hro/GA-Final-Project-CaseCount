
import React, {useState} from 'react';

import './CanvasPage.css';
import Navbar from "../../components/Navbar/Navbar";
import Picker from '../../components/Picker/Picker';
import PhonePreview from '../../components/PhonePreview/PhonePreview';
import PhoneDropDown from '../../components/PhoneDropDown/PhoneDropDown';
import AddToCartBtn from '../../components/AddToCartBtn/AddToCartBtn';
import SaveBtn from '../../components/SaveBtn/SaveBtn';


export default function CanvasPage() {
  const [canvasColor, setCanvasColor] = useState("white")
  const availableColors = [{name:"1", hex:"#FCDEBE"}, {name:"2", hex:"#D4D2A5"}, {name:"3", hex:"#928779"}, {name:"4", hex:"#EEE5E9"}, {name:"5", hex:"#D64933"}]

 
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