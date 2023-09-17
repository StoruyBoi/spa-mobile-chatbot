import { createChatBotMessage } from "react-chatbot-kit";
import ButtonStart from "../Comonents/ButtonStart";
import MainBtns from "../Comonents/MainBtns";
import CustoMessages from "../Comonents/CustoMessages";
import NewPage from "../Comonents/NewPage";

const config = {
  initialMessages: [
    createChatBotMessage(
      ` Hello, Welcome to student info system!
    `,
      {
        widget: "GoitIT",
      }
    ),
  ],
  customStyles: {
    botMessageBox: {
      display: "none",
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  state: {
    checker: null,
    userData: {
      name: "",
      age: 0,
    },
  },
  widgets: [
    {
      widgetName: "GoitIT",
      widgetFunc: (props) => <ButtonStart {...props} />,
    },
    {
      widgetName: "ButtonAr",
      widgetFunc: (props) => <MainBtns {...props} />,
    },
    {
      widgetName: "custom",
      widgetFunc: (props) => <CustoMessages {...props} />,
    },
    {
      widgetName: "newpage",
      widgetFunc: (props) => <NewPage {...props} />,
    },
  ],
};

export default config;
