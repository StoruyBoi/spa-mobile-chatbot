import React from "react";

const MessageParser = ({ children, actions }) => {
  console.log(children.props.state.userData);
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
