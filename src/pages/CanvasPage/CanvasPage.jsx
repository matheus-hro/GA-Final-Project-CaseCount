
import React, { useState } from 'react';
import './CanvasPage.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import * as api from '../../api/apiBarrel.mjs';
import * as Components from '../../components/componentBarrel.mjs';

export default function CanvasPage(props) {
  const { Navbar, Picker, PhonePreview, PhoneDropDown, CanvasBtn, Modal } = Components;
  const location = useLocation();
  const [availableColors, setAvailableColors] = useState([]);
  const [availableCases, setAvailableCases] = useState([]);
  const [caseModel, setCaseModel] = useState(null);
  const [caseColor, setCaseColor] = useState("white");
  const [modalOpen, setModalOpen] = useState(false);

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
}, [])

useEffect(() => {
  setCaseModel(availableCases[0])
  fetchColorsFromDb();
}, [availableCases])

return (
  <div>
    <Navbar user={props.user} />
    {modalOpen && <Modal setOpenModal={setModalOpen} />}
    <div className=' wrap canvas-main'>
      <Picker colors={availableColors} setCaseColor={setCaseColor} selectedColor={caseColor} />
      <div className='canvas-middle-container'>
        <PhonePreview caseColor={caseColor.hex} />
        <div className='add-save-btns'>
          <CanvasBtn handleClick={setModalOpen} className='addToCart-btn' text='Add to cart' />
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