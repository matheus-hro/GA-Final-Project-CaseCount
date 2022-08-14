import './App.css';
import {Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import CanvasPage from './pages/CanvasPage/CanvasPage';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/canvas' element={<CanvasPage />}/>

      <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
      
     
    </div>
  );
}

export default App;
