import React, {Component} from 'react';
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";


export default class LoginPage extends React.Component {
  state= {
    userRegistered: false
  }
  render() {
    return(
      <>
       {this.state.userRegistered ? (
         <LoginForm />
       ) : (
        <SignupForm />
       )}
      </>
    )
  }
}