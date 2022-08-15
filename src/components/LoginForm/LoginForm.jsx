import React, {useState} from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom'

export default function LoginForm (props) {
  const [statusMessage, setStatusMessage] = useState("");
  const navigate = useNavigate();

  async function fetchUser(e){
      e.preventDefault();
      const user = {
        email: e.target.form.email.value,
        password: e.target.form.password.value,
      };
      console.log(user)
      try {
          //let jwt = localStorage.getItem('token')
          let fetchResponse = await fetch("/api/login", {
              method: "POST",
              headers: {"Content-Type": "application/json",},
              body: JSON.stringify(user)
          })
          if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')
          let token = await fetchResponse.json();
          localStorage.setItem('token', token);
          setStatusMessage("Signed in!");
          navigate('/', {replace: true});
          
      }catch(err){
          console.log("Error when fetching user: ", err)
          setStatusMessage("Failed! Please try again.")
      }
    }

  return (
    <div className='form-container'>
      <ul>
        <li>log in</li>
        <li>sign up</li>
      </ul>
        <form className="form-login" action="">
          <label><span>Email</span>
          <input type="email" name="email" required/>
          </label>
          <label><span>Password</span>
          <input type='password' name="password" required/>
          </label>
        <button type="submit" onClick={fetchUser}>login</button>
        </form>
          <p>{statusMessage}</p>
    </div>  
  )
}