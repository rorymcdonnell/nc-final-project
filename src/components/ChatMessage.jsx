import { useState } from "react";

const ChatMessage = (props) => {
  console.log(props);
  const user = localStorage.getItem("username");
  const { text, id, username, groupName } = props.message;

  const messageType = username === user ? "sent" : "received";

  return (
    <div>
      <div className="username">{`${username}:`}</div>
      <div className={`message ${messageType}`} id={`${id}`}>
        {" "}
        {`${text}`}
      </div>
    </div>
  );
};

export default ChatMessage;
