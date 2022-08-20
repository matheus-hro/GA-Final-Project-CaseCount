import './SignupForm.css';
import React, {useState} from 'react';
import * as api from '../../api/apiBarrel.mjs'

export default function SignupForm(props){
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(e){
    e.preventDefault();
    const user = {
        name: e.target.form.name.value,
        email: e.target.form.email.value,
        password: e.target.form.password.value,
    };
    let response = await api.User.create(user)
    if(response){
        setStatusMessage("Successfully registered!")
    }else{
        setStatusMessage("Failed to register.")
    }
    
  }

  //need to add password and complete form validation
    return (
      <div className='form-signup-container'>
        <form className="form-signup" action="">
            <label><span>Name</span>
                <input type="text" name="name" required/>
            </label>
            <label><span>Email</span>
                <input type="email" name="email" required/>
            </label>
            <label><span>Password</span>
                <input type="password" name="password" required/>
            </label>
            <label><span>Confirm password</span>
                <input type="password" name="confirm" required/>
            </label>
            <button type="submit" onClick={handleSubmit}>Sign up</button>
        </form>
        <p className='signup-statusMsg'>{statusMessage}</p>
      </div>  
    )

}