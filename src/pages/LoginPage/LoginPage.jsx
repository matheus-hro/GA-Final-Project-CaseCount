import React, {useState} from 'react';
import './LoginPage.css'
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";


export default function LoginPage(props) {
  const [activeTab, setActiveTab] = useState('login');
  

  return(
    <div className='login-form'>
      <div className='login-form-container'>
        <ul className='auth-tabs'>
        <li  className={activeTab==="login" ? "activeTab" : null} onClick={()=>setActiveTab("login")} >log in</li>
        <li  className={activeTab==="signup" ? "activeTab" : null} onClick={()=>setActiveTab("signup")}>sign up</li>
        </ul>
        {activeTab === 'login' ? 
        <LoginForm />
        : 
        <SignupForm />
        }
      </div>
    </div>
  )
}

