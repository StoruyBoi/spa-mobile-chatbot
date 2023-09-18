// ChildComponent.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ChildComponent = () => {
  // Access userData from Redux store using useSelector
  const userData = useSelector((state) => state.userData);
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }
  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {userData.name}</p>
      <p>Age: {userData.age}</p>
      <button onClick={routeChange}  >Logout</button>
    </div>
  );
};

export default ChildComponent;
