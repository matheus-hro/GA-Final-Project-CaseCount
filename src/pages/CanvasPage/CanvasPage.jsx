  
import React, {useState} from 'react';
import './CanvasPage.css';
import Navbar from "../../components/Navbar/Navbar";
import Picker from '../../components/Picker/Picker';
import PhonePreview from '../../components/PhonePreview/PhonePreview';
import PhoneDropDown from '../../components/PhoneDropDown/PhoneDropDown';
import CanvasBtn from '../../components/CanvasBtn/CanvasBtn';
import Modal from '../../components/Modal/Modal';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


export default function CanvasPage (props) {
  const location = useLocation();
  const [availableColors, setAvailableColors] = useState([]);
  const [phoneModel, setPhoneModel] = useState('iphone')
  const [caseColor, setCaseColor] = useState("white");
  const [modalOpen, setModalOpen] = useState(false);

  

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
      console.log(colors)
    }catch(err){
      console.log("Caught error when fetching colors: ", err);
    }
  }

  async function saveDesign(){
    if(props.user){
      try{
        const fetchResponse = await fetch('api/user-design', {
          method: 'POST',
          headers:{'Content-Type':'application/json'},
          referrerPolicy:'origin',
          body:JSON.stringify({user:props.user._id, color:caseColor._id, phoneModel:phoneModel})
        });
        if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request');
      }catch(err){
        console.log("Caught error when posting custom design: ", err);
      }
    }else{
      alert("Sign up to save your designs!")
    }
  }
  
  useEffect(()=>{
    if(location.state){
      setPhoneModel(location.state.phone)
    }
    fetchColors();   
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
              <CanvasBtn handleClick={saveDesign, setModalOpen} className='save-btn' text='Save' />
            </div>
          </div>
          <div>
            <PhoneDropDown />
            
          </div>
            
        </div> 
      </div>

    )
}