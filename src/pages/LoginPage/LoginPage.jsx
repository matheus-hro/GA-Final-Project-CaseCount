import React, {Component} from 'react';
import './LoginPage.css'
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";


export default class LoginPage extends React.Component {
  state= {
    currentTab: 1
  }
  updateCurrentTabTo = (incoming_tab) => {
    this.setState({
      currentTab: incoming_tab,
    })
  }
  render() {
    return(
      <div className='login-form'>
        <div className='login-form-container'>
         <ul className='auth-tabs'>
          <li  className="activeTab" onClick={()=> this.updateCurrentTabTo(1)}>log in</li>
          <li onClick={()=> this.updateCurrentTabTo(2)}>sign up</li>
        </ul>
       {this.state.currentTab === 1 ? 
         <LoginForm />
        : 
        <SignupForm />
       }
       </div>
      </div>
    )
  }
}