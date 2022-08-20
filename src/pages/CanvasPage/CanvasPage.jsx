
import React, {useState} from 'react';
import './CanvasPage.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import * as dbFetch from '../../dbFetch/dbBarrel.mjs';
import * as Components from '../../components/componentBarrel.mjs';

const Navbar = Components.Navbar;
const Picker = Components.Picker;
const PhonePreview = Components.PhonePreview;
const PhoneDropDown = Components.PhoneDropdown;
const CanvasBtn = Components.CanvasBtn;
const Modal = Components.Modal;



export default function CanvasPage (props) {
  const location = useLocation();
  const [availableColors, setAvailableColors] = useState([]);
  const [phoneModel, setPhoneModel] = useState('iphone')
  const [caseColor, setCaseColor] = useState("white");
  const [modalOpen, setModalOpen] = useState(false);
  
  async function fetchColorsFromDb(){
    const colors = await dbFetch.Color.index();
    setAvailableColors(colors);
  }

  async function saveDesign(){
    if(props.user){
      let response = await dbFetch.UserDesign.create({user:props.user._id, color:caseColor._id, phoneModel:phoneModel});
      console.log(response);
    }else{
      alert("Sign up to save your designs!")
    }
  }
  
  useEffect(()=>{
    if(location.state){
      setPhoneModel(location.state.phone)
    }
    fetchColorsFromDb();   
  },[])
  
    return(
      <div>
        <Navbar user={props.user}/>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
        <div className=' wrap canvas-main'>
          <Picker colors={availableColors} setCaseColor={setCaseColor} selectedColor={caseColor}/>
          <div className='canvas-middle-container'>
            <PhonePreview caseColor={caseColor.hex}/>
            <div className='add-save-btns'>
              <CanvasBtn handleClick={setModalOpen} className='addToCart-btn' text='Add to cart' />
              <CanvasBtn handleClick={saveDesign} className='save-btn' text='Save' />
            </div>
          </div>
          <div>
            <PhoneDropDown />
            
          </div>
            
        </div> 
      </div>

    )
}