import './App.css';
import React, {useState, useEffect} from 'react'
import {Route, Routes, Navigate, useLocation} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import LogoutPage from './pages/LogoutPage/LogoutPage.jsx';
import CanvasPage from './pages/CanvasPage/CanvasPage';
import SavedPage from './pages/SavedPage/SavedPage';
import Modal from './components/Modal/Modal'


function App() {

  const [userState, setUserState] = useState(null)
  const location = useLocation()
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    let token = localStorage.getItem('token');
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
       {modalOpen && <Modal setOpenModal={setModalOpen} />}
      <Routes >
      <Route path='/' element={<HomePage user={userState}/>}/>
      <Route path='/login'  element={<LoginPage user={userState}/>}/>
      <Route path="/logout" element={<LogoutPage/>}/>
      <Route path='/canvas' element={<CanvasPage user={userState}/>}/>
      <Route path='/saved' element={<SavedPage user={userState}/>}/>
      <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </div>
  );
}

export default App;
