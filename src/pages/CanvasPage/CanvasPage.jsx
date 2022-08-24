
import React, { useState } from 'react';
import './CanvasPage.css';
import { useEffect } from 'react';
import * as api from '../../api/apiBarrel.mjs';
import * as Components from '../../components/componentBarrel.mjs';
import aztec from '../../svgs/aztec.svg';
import bubbles from '../../svgs/bubbles.svg';
import circSq from '../../svgs/circles-and-squares.svg';
import circuitB from '../../svgs/circuitboard.svg';


export default function CanvasPage(props) {
  const { NavResponsive, Picker, PhonePreview, PhoneDropDown, CanvasBtn, Modal } = Components;
  const [availableColors, setAvailableColors] = useState([]);
  const [availableCases, setAvailableCases] = useState([]);
  const [caseModel, setCaseModel] = useState({});
  const [caseColor, setCaseColor] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  // patterns:
  const availablePatterns = [aztec, bubbles, circSq, circuitB]
  const [casePattern, setCasePattern] = useState("aztec");


  async function fetchColorsFromDb() {
    const colors = await api.Color.index();
    setAvailableColors(colors);
  }

  async function fetchCaseModelsFromDb() {
    const caseModels = await api.CaseModel.index();
    setAvailableCases(caseModels);
  }

  async function saveDesign() {
    if (props.user) {
      let response = await api.UserDesign.create({ color: caseColor._id, caseModel: caseModel._id });
      //setOpenModal()
    } else {
      alert("Sign up to save your designs!")
    }
  }

  useEffect(() => {
    fetchCaseModelsFromDb();
    fetchColorsFromDb();
  }, [])

  useEffect(() => {
    if(availableCases.length>0){
      setCaseModel(availableCases[0]);
    }   
  }, [availableCases])

  useEffect(() => {
    if(availableColors.length>0){
      setCaseColor(availableColors[0]);
    }    
  }, [availableColors])

  return (
    <div>
      <NavResponsive user={props.user} />
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      <div className=' wrap canvas-main'>
        <Picker colors={availableColors} caseColor={caseColor} setCaseColor={setCaseColor} patterns={availablePatterns} casePattern={casePattern} setCasePattern={setCasePattern}/>
        <div className='canvas-middle-container'>
          <PhonePreview caseColor={caseColor.hex} casePattern={casePattern} />
          <div className='add-save-btns'>
            <CanvasBtn handleClick={()=>{props.addToCart({price:caseModel.priceId,quantity:1, color:caseColor._id})}} className='addToCart-btn' text='Add to cart' />
            <CanvasBtn handleClick={saveDesign /*needs to add openModal */} className='save-btn' text='Save' />
          </div>
        </div>
        <div>
          <PhoneDropDown setCaseModel={setCaseModel} availableCases={availableCases} />
        </div>
      </div>
    </div>
  )

}