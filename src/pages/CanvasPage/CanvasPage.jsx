
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './CanvasPage.css';
import * as api from '../../api/apiBarrel.mjs';
import * as Components from '../../components/componentBarrel.mjs';
import aztec from '../../svgs/aztec.svg';
import bubbles from '../../svgs/bubbles.svg';
import circSq from '../../svgs/circles-and-squares.svg';
import circuitB from '../../svgs/circuitboard.svg';

export default function CanvasPage(props) {
  const { NavResponsive, Picker, PhonePreview, PhoneDropDown, CanvasBtn, Modal, Loader } = Components;
  const [isBusy, setBusy] = useState(true);
  const [isPhoneBusy, setPhoneBusy] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [caseModel, setCaseModel] = useState({});
  const [caseColor, setCaseColor] = useState({});
  const [casePattern, setCasePattern] = useState("");
  const [availableColors, setAvailableColors] = useState([]);
  const availablePatterns = [aztec, bubbles, circSq, circuitB]
  const availableCases = props.availableCases;

  async function saveDesign() {
    if (props.user) {
      await api.UserDesign.create({ color: caseColor._id, productId: caseModel.productId });
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
    async function fetchColorsFromDb() {
      const colors = await api.Color.index();
      setAvailableColors(colors);
    }
    fetchColorsFromDb();
  }, [])

  useEffect(() => {
    if (availableColors.length > 0 && availableCases.length > 0) {
      setCaseModel(availableCases[0]);
      setCaseColor(availableColors[0]);
    }
  }, [availableColors, availableCases])  

  return (
    <div>
      <NavResponsive user={props.user} />
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      {isBusy && <Loader />}
      <div className=' wrap canvas-main'>
        <Picker colors={availableColors} caseColor={caseColor} setCaseColor={setCaseColor} availablePatterns={availablePatterns} casePattern={casePattern} setCasePattern={setCasePattern} />
        <div className='canvas-middle-container'>
          <PhonePreview setBusy={setBusy} caseModelImg={caseModel.imgUrl} caseColor={caseColor.hex} casePattern={casePattern} />
          <div className='add-save-btns'>
            <CanvasBtn handleClick={() => { props.addToCart({ productId: caseModel.productId, price: caseModel.price, color: caseColor._id, pattern: casePattern }) }} className='addToCart-btn' text='Add to cart' />
            <CanvasBtn handleClick={saveDesign /*needs to add openModal */} className='save-btn' text='Save' />
          </div>
        </div>
        <div>
          <PhoneDropDown setCaseModel={findCaseModelAndSet} availableCases={availableCases} label={`${caseModel.phoneModel} ${caseModel.type} $${caseModel.displayPrice}`} />
        </div>
      </div>
    </div>
  )

}