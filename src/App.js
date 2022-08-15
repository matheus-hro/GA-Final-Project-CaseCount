import './App.css';
import React, {useState, useEffect, useSearchParams} from 'react'
import {Route, Routes, Navigate, useLocation, useParams} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';


function App(props) {

  const [userState, setUserState] = useState(null)
  const location = useLocation()
  //const [searchParams, setSearchParams] = useSearchParams();
  let {signout} = useParams();
  console.log(signout)

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
    }
  }, [location]);
  
  return (
    <div className="App">
      <Routes >
      <Route path='/' element={<HomePage user={userState}/>}/>
      <Route path='/login'  element={<LoginPage user={userState}/>}/>
      <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </div>
  );
}

export default App;
