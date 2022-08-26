import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';

export default function LogoutPage(props){
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.removeItem('token');
        navigate('/', {replace: true});
      },);
    
    return(
        <div>Logging you out... </div>  
    )
}