
import React, { useState, useEffect, useLayoutEffect } from 'react';
import './CanvasPage.css';
import * as api from '../../api/apiBarrel.mjs';
import * as Components from '../../components/componentBarrel.mjs';
import aztec from '../../svgs/aztec.svg';
import bubbles from '../../svgs/bubbles.svg';
import circSq from '../../svgs/circles-and-squares.svg';
import circuitB from '../../svgs/circuitboard.svg';

export default function CanvasPage(props) {
  const [caseModel, setCaseModel] = useState({});
  const [caseColor, setCaseColor] = useState({});
  const [casePattern, setCasePattern] = useState("");
  const [availableColors, setAvailableColors] = useState([]);
  const availablePatterns = [aztec, bubbles, circSq, circuitB]
  const availableCases = props.availableCases;
  const setAvailableCases = props.setAvailableCases;

  const { NavResponsive, Picker, PhonePreview, PhoneDropDown, CanvasBtn, Modal } = Components;

  const [modalOpen, setModalOpen] = useState(false);
  // patterns:

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
      let response = await api.UserDesign.create({ color: caseColor._id, caseModel: caseModel.productId });
      //setOpenModal()
    } else {
      alert("Sign up to save your designs!")
    }
  }

  function findCaseModelAndSet(prodId) {
    const i = availableCases.findIndex(e => e.productId === prodId);
    setCaseModel(availableCases[i]);
  }

  useEffect(() => {
    fetchColorsFromDb();
  }, [])

  useEffect(() => {
    if (availableCases.length > 0) {
      setCaseModel(availableCases[0]);
    }
  }, [availableCases])

  useEffect(() => {
    if (availableColors.length > 0) {
      setCaseColor(availableColors[0]);
    }
  }, [availableColors])

  return (
    <div>
      <NavResponsive user={props.user} />
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      <div className=' wrap canvas-main'>
        <Picker colors={availableColors} caseColor={caseColor} setCaseColor={setCaseColor} availablePatterns={availablePatterns} casePattern={casePattern} setCasePattern={setCasePattern} />
        <div className='canvas-middle-container'>
          <PhonePreview caseModelImg={caseModel.imgUrl} caseColor={caseColor.hex} casePattern={casePattern} />
          <div className='add-save-btns'>
            <CanvasBtn handleClick={() => { props.addToCart({ productId: caseModel.productId, price: caseModel.price, color: caseColor._id, pattern: casePattern }) }} className='addToCart-btn' text='Add to cart' />
            <CanvasBtn handleClick={saveDesign /*needs to add openModal */} className='save-btn' text='Save' />
          </div>
        </div>
        <div>
          <PhoneDropDown setCaseModel={findCaseModelAndSet} availableCases={availableCases} label={caseModel.phoneModel + " " + caseModel.type + ' - ' + "$" + caseModel.displayPrice} />
        </div>
      </div>
    </div>
  )

}