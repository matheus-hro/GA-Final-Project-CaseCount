import './App.css';
import React, {useState, useEffect} from 'react'
import {Route, Routes, Navigate, useLocation} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import LogoutPage from './pages/LogoutPage/LogoutPage.jsx';
import CanvasPage from './pages/CanvasPage/CanvasPage';


function App() {

  const [userState, setUserState] = useState(null)
  const location = useLocation()
  
  useEffect(() => {
    let token = localStorage.getItem('token');
    console.log("token in useeffect: ", token)
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      if (payload.exp < Date.now() / 1000) {  
        localStorage.removeItem('token');
        token = null;
      } else { 
        setUserState(payload.user)
      }
    }else{
      setUserState(null)
    }
  }, [location]);
  
  return (
    <div className="App">
      <Routes >
      <Route path='/' element={<HomePage user={userState}/>}/>
      <Route path='/login'  element={<LoginPage user={userState}/>}/>
      <Route path="/logout" element={<LogoutPage/>}/>
      <Route path='/canvas' element={<CanvasPage />}/>

      <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </div>
  );
}

export default App;
