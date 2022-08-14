import React from 'react';
import './CanvasPage.css';
import Navbar from "../../components/Navbar/Navbar";




export default class CanvasPage extends React.Component {
  state= {
    userRegistered: true
  }
  render() {
    return(
      <Navbar />
    )
  }
}