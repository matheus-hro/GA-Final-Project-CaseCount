
import React, { useState, useEffect } from 'react';
import './CanvasPage.css';
import * as api from '../../api/apiBarrel.mjs';
import { Picker, PhonePreview, PhoneDropDown, CanvasBtn, Loader } from '../../components/componentBarrel.mjs';
import availablePatterns from '../../svgs/patterns.mjs'

export default function CanvasPage(props) {
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
  }, []);

  useEffect(() => {
    if (availableColors.length > 0 && availableCases.length > 0) {
      setCaseModel(availableCases[0]);
      setCaseColor(availableColors[0]);
    }
  }, [availableColors, availableCases]);

  async function saveDesign() {
    if (props.user) {
      const successful = await api.UserDesign.create({
        color: caseColor._id,
        productId: caseModel.productId,
        patternName: casePattern.name
      });
      if (successful) {
        alert("Design successfully saved!")
      } else {
        alert("Sorry, try again.")
      }
    } else {
      alert("Sign up to save your designs!");
    }
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  function randomize() {
    const rndmColorIndex = getRandomInt(0, availableColors.length - 1);
    const rndmPatternIndex = getRandomInt(0, availablePatterns.size - 1);
    const rndmPattern = Array.from(availablePatterns)[rndmPatternIndex];
    setCaseColor(availableColors[rndmColorIndex]);
    setCasePattern({ name: rndmPattern[0], svg: rndmPattern[1] });
  }

  return (
    <div>
      {isBusy && <Loader />}
      <div className=' wrap canvas-main'>
        <Picker
          colors={availableColors}
          caseColor={caseColor}
          setCaseColor={setCaseColor}
          availablePatterns={availablePatterns}
          casePattern={casePattern}
          setCasePattern={setCasePattern}
          randomize={randomize}
        />
        <div className='canvas-middle-container'>
          <PhonePreview
            setBusy={setBusy}
            caseModelImg={caseModel.imgUrl}
            caseColor={caseColor.hex}
            casePattern={casePattern.svg}
          />
        </div>
        <div className='canvas-right-container'>
        <PhoneDropDown
            className="phone-dropdown"
            setCaseModel={findCaseModelAndSet}
            availableCases={availableCases}
            label={`${caseModel.name} - $${caseModel.displayPrice}`}
          />
          <div className='add-save-btns'>
            <CanvasBtn className='addToCart-btn' text='Add to cart'
              handleClick={() => {
                props.addToCart({
                  ...caseModel,
                  patternName: casePattern.name,
                  color: caseColor
                })
              }}
            />

            <CanvasBtn
              className="save-btn"
              text="Save"
              handleClick={saveDesign}
            />
          </div>
         
        </div>
      </div>
    </div>
  );
}
