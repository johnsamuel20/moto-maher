import React from "react";
import ReactWhatsapp from "react-whatsapp";
import './ChatBot.css'

const ChatBot = () => {
  return (
    <div>
      <ReactWhatsapp number="+20 1288468560" message="I am interested">
      <a
        href=""
        className="float"
        target="_blank"
        style={{zIndex : "1000"}}
      >
        <i className="fa fa-whatsapp my-float"></i>
      </a>
      </ReactWhatsapp>
    </div>
  );
};

export default ChatBot;
