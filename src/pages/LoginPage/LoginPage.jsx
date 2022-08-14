import React, {Component} from 'react';
import './LoginPage.css'
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";


export default class LoginPage extends React.Component {
  state= {
    userRegistered: true
  }
  render() {
    return(
      <div className='wrap login-form'>
       {this.state.userRegistered ? (
         <LoginForm />
       ) : (
        <SignupForm />
       )}
      </div>
    )
  }
}