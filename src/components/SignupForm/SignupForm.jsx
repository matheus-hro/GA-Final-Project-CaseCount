import React from 'react';
import './SignupForm.css';

export default function SignupForm(props){
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(e){
    e.preventDefault();
    const user = {
        name: e.target.form.name.value,
        email: e.target.form.email.value,
        password: e.target.form.password.value,
    };
    try {
    const fetchResponse = await fetch('/api/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    })
    if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')
    
    const signupStatus = await fetchResponse.json()
    console.log(signupStatus.message);
    //setStatusMessage(signupStatus.message);    
    } catch(err) {
        console.log("Error when fetching user: ", err)
        setStatusMessage("Failed! Please try again.")
    }
  }

  //need to add password and complete form validation
    return (
      <div>
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
        <p>{statusMessage}</p>
      </div>  
    )

}