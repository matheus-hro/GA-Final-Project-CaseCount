import React, {useState} from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom'
import * as dbFetch from '../../dbFetch/dbBarrel.mjs'

export default function LoginForm (props) {
  const [statusMessage, setStatusMessage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e){
      e.preventDefault();
      const user = {
        email: e.target.form.email.value,
        password: e.target.form.password.value,
      };
      let isLoggedIn = await dbFetch.User.login(user);
      if (isLoggedIn){
        setStatusMessage("Signed in!");
        navigate(-1, {replace: true});
      }else{
        setStatusMessage("Failed! Please try again.")
      }
    }

  return (
    <div className='form-container'>
      <form className="form-signup" action="">
        <label><span>Email</span>
          <input type="email" name="email" required/>
        </label>
        <label><span>Password</span>
          <input type='password' name="password" required/>
        </label>
        <button type="submit" onClick={handleSubmit}>Log in</button>
      </form>
      <p>{statusMessage}</p>
    </div>  
  )
}