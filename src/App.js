import './App.css';
import React, {useState, useEffect} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';


function App() {

  const [userState, setUserState] = useState(null)

  useEffect(() => {
    console.log("thats me")
    let token = localStorage.getItem('token')
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      if (payload.exp < Date.now() / 1000) {  
        localStorage.removeItem('token');
        token = null;
      } else { 
        setUserState(payload.user)      
      }
    }
  }, []);  

  return (
    <div className="App">
      <Routes >
      <Route path='/' element={<HomePage user={userState}/>}/>
      <Route path='/signin'  element={<LoginPage user={userState}/>}/>
      <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </div>
  );
}

export default App;
