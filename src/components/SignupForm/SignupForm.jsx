import React, {Component} from 'react';
import './SignupForm.css';

export default class SignupForm extends Component {
  state= {
    name:'',
    email:'',
    confirm:'',
    error: ''
  };

  handleChange= (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: ''
    })
  }
  handleSubmit= async(e)=> {
    e.preventDefault();
      try {
        const fetchResponse = await fetch('/api/users/signup', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({name: this.state.name, email:this.state.email, password:this.state.password})
        })
        console.log(fetchResponse);
        if (!fetchResponse.ok) this.setState({error: "We are broken"});
      
        let token = await fetchResponse.json()
        console.log(token);
        localStorage.setItem('token', token);
        
        const userDoc = JSON.parse(atob(token.split('.')[1])).user;
        console.log(userDoc);
        this.props.setUserInState(userDoc)
      } catch(err) {

      }
  }
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
         <ul className='auth-tabs'>
          <li>log in</li>
          <li>sign up</li>
        </ul>
         <form className="form-signup" action="">
           <label><span>Name</span>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required/>
           </label>
           <label><span>Email</span>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
           </label>
           <label><span>Password</span>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
           </label>
           <label><span>Confirm</span>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required/>
           </label>
          <button type="submit" disabled={disable} onClick={this.handleSubmit}>login</button>
         </form>
            <p>{this.state.error}</p>
      </div>  
    )
}
}