import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import NewPage from "./Comonents/NewPage.jsx";
import ActionProvider from "./Chatbotbox/ActionProvider.jsx";
import MessageParser from "./Chatbotbox/MessageParser.jsx";
import config from "./Chatbotbox/config.jsx";
import Login from "./Comonents/Login";

function App() {
  return (
    <>
      <section className="Main-Container">
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Login />}></Route>
            <Route
              path="/Home"
              element={
                <Chatbot
                  config={config}
                  messageParser={MessageParser}
                  actionProvider={ActionProvider}
                />
              }
            ></Route>

            <Route path="/New" element={<NewPage />}></Route>
           
          </Routes>
        </BrowserRouter>
      </section>
    </>
  );
}

export default App;
