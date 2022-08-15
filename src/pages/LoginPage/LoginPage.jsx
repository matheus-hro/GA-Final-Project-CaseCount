import React, {Component} from 'react';
import './LoginPage.css'
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";


export default class LoginPage extends React.Component {
  state= {
    
    activeTab: 'login'
  }
 
  render() {
    return(
      <div className='login-form'>
        <div className='login-form-container'>
         <ul className='auth-tabs'>
          <li  className={this.state.activeTab==="login" ? "activeTab" : null} onClick={()=>this.setState({activeTab:"login"})} >log in</li>
          <li  className={this.state.activeTab==="signup" ? "activeTab" : null} onClick={()=>this.setState({activeTab:"signup"})} c>sign up</li>
        </ul>
       {this.state.activeTab === 'login' ? 
         <LoginForm />
        : 
        <SignupForm />
       }
       </div>
      </div>
    )
  }
}