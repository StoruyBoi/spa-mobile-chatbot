import React from "react";
import { createClientMessage } from 'react-chatbot-kit';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const startingBtn = () => {
    const message = createChatBotMessage(" Pick a slot !",{
      widget:"ButtonAr",
    })
    updateState(message);
  };
  const timePasss = (datas) => {
    const message = createClientMessage(datas)
    updateState(message);
    CustoMessages()

  };
  
  const CustoMessages = () => {
    const message = createChatBotMessage("Enter your Name")
    updateState(message,"age");
    
  };

  const afterNameMessage = () => {
    const message = createChatBotMessage(" Enter your Age");
    updateState(message,"preference");

  };
  const afterageMessage = () => {
    const message = createChatBotMessage(" Thank you. In 5 seconds, bot will exit",{
      widget:"custom"
    });
    updateState(message);
  };

  const updateState = (message,checker) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],checker
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            startingBtn,
            timePasss,
            afterNameMessage,
            afterageMessage,
          
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
