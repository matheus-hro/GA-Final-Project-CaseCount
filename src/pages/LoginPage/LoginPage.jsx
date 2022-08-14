import React, {useState} from 'react';
import './LoginPage.css'
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";


export default function LoginPage(props) {
  const [userRegistered, setUserRegistered] = useState(true)
  return(
    <div className='login-form'>
      {userRegistered ? (
        <LoginForm />
      ) : (
        <SignupForm />
      )}
    </div>
  )
  
}