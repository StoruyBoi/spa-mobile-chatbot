import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/Home`; 
    navigate(path);
  }
  return (
  <>
  
  
  
  <div className='login-contianer'>
  <div className="main_login_contianer">
  <h1>Enter into Student Info System</h1>
  <button onClick={routeChange}>Enroll Now!</button>
  </div>
  </div>
  </>
  )
}
