import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setUserData } from '../store/slices/UserSlice'; 
const MessageParser = ({ children, actions }) => {

  const dispatch = useDispatch();


    // Dispatch the userData to Redux automatically when the component mounts
    const userData = {
      name: children.props.state.userData.name,
      age:  children.props.state.userData.age,
    };
    dispatch(setUserData(userData));


  const parse = (message) => {
    if (children.props.state.checker === "age") {
      actions.afterNameMessage();
      children.props.state.userData.name = message;
    }
    if (children.props.state.checker === "preference") {
      actions.afterageMessage();
      children.props.state.userData.age = message;
    }
      
  };



  return (
    <div>
   
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
