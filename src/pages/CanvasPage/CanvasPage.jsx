import React from 'react';
import './CanvasPage.css';
import Navbar from "../../components/Navbar/Navbar";
import Picker from '../../components/Picker/Picker'



export default class CanvasPage extends React.Component {
  state= {
    userRegistered: true
  }
  render() {
    return(
      <div>
        <Navbar />
        <Picker />
      </div>
      
    )
  }
}