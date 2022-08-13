import React, {Component} from 'react';
import './LoginForm.css';

export default class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
    error: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: ''
    })
  }
  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // 1. POST our new user info to the server
      const fetchResponse = await fetch('/api/users/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: this.state.email, password: this.state.password, })
      })

      // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
      if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')

      let token = await fetchResponse.json() // 3. decode fetch response: get jwt token from srv
      localStorage.setItem('token', token);  // 4. Stick token into localStorage

      const userDoc = JSON.parse(atob(token.split('.')[1])).user; // 5. Decode the token + put user document into state
      this.props.setUserInState(userDoc)

    } catch (err) {
  }
}
  render() {
    return (
      <div>
        <div>
          <h1>log in</h1>
          <h1>sign up</h1>
        </div>
         <form action="">
           <label><span>Email</span>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} required/>
           </label>
           <label><span>Password</span>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
           </label>
          <button onClick={this.handleSubmit}>login</button>
         </form>
            <p>{this.state.error}</p>
      </div>  
    )
  }
}