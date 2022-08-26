
import React, { useState, useEffect } from 'react';
import './CanvasPage.css';
import * as api from '../../api/apiBarrel.mjs';
import * as Components from '../../components/componentBarrel.mjs';
import availablePatterns from '../../svgs/patterns.js'

export default function CanvasPage(props) {
  const { NavResponsive, Picker, PhonePreview, PhoneDropDown, CanvasBtn, Modal, Loader } = Components;
  const [isBusy, setBusy] = useState(true);
  const [caseModel, setCaseModel] = useState({});
  const [caseColor, setCaseColor] = useState({});
  const [casePattern, setCasePattern] = useState("");
  const [availableColors, setAvailableColors] = useState([]);
  const availableCases = props.availableCases;

  function findCaseModelAndSet(productId) {
    const i = availableCases.findIndex(e => e.productId === productId);
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

  async function saveDesign() {
    if (props.user) {
      await api.UserDesign.create({
        color: caseColor._id,
        productId: caseModel.productId,
        patternName:casePattern.name
      });
    } else {
      alert("Sign up to save your designs!")
    }
  }

  return (
    <div>
      <NavResponsive setModalOpen={props.setModalOpen} user={props.user} />
      {isBusy && <Loader />}
      <div className=' wrap canvas-main'>
        <Picker 
          colors={availableColors}
          caseColor={caseColor}
          setCaseColor={setCaseColor}
          availablePatterns={availablePatterns}
          casePattern={casePattern}
          setCasePattern={setCasePattern}
        />
        <div className='canvas-middle-container'>
          <PhonePreview
            setBusy={setBusy}
            caseModelImg={caseModel.imgUrl}
            caseColor={caseColor.hex}
            casePattern={casePattern.svg}
          />
          <div className='add-save-btns'>
            <CanvasBtn className='addToCart-btn' text='Add to cart'
            handleClick={() => {props.addToCart({
              ...caseModel,
              patternName:casePattern.name,
              color:caseColor
            })}}
            />

            <CanvasBtn className='save-btn' text='Save'
            handleClick={saveDesign}  />
          </div>
        </div>
        <div>
          <PhoneDropDown
            setCaseModel={findCaseModelAndSet}
            availableCases={availableCases}
            label={`${caseModel.name} - $${caseModel.displayPrice}`}
          />
        </div>
      </div>
    </div>
  )

}