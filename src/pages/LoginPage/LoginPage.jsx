import React, {Component} from 'react';
import './LoginPage.css'
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";


export default class LoginPage extends React.Component {
  state= {
    // currentTab: 1,
    // isActive: true
    activeTab: 'login'
  }
 
  render() {
    return(
      <div className='login-form'>
        <div className='login-form-container'>
         <ul className='auth-tabs'>
          <li  id="loginTab" onClick={()=>this.setState({activeTab:"login"})} {this.state.activeTab==="login" ? className="activeTab" : null}>log in</li>
          <li  id="signupTab" onClick={()=>this.setState({activeTab:"signup"})} {this.state.activeTab==="signup" ? className="activeTab" : null}>sign up</li>
        </ul>
       {this.state.activeTab === "login" ? 
         <LoginForm />
        : 
        <SignupForm />
       }
       </div>
      </div>
    )
  }
}