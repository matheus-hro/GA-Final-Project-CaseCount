import React from 'react';
import './CanvasPage.css';
import Navbar from "../../components/Navbar/Navbar";
import Picker from '../../components/Picker/Picker';
import PhonePreview from '../../components/PhonePreview/PhonePreview';
import PhoneDropDown from '../../components/PhoneDropDown/PhoneDropDown';
import AddToCartBtn from '../../components/AddToCartBtn/AddToCartBtn';
import SaveBtn from '../../components/SaveBtn/SaveBtn';


export default class CanvasPage extends React.Component {
  state= {
    userRegistered: true
  }
  render() {
    return(
      <div>
        <Navbar />
        <div className=' wrap canvas-main'>
          <Picker />
          <PhonePreview />
          <PhoneDropDown />
          <div>
          <AddToCartBtn />
          <SaveBtn />
        </div>
          </div> 
      </div>
      
    )
  }
}