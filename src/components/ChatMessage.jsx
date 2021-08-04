const ChatMessage = (props) => {
  const user = localStorage.getItem("username");
  const group = localStorage.getItem("groupName");
  const { text, id, username, groupName } = props.message;

  const messageType = username === user ? "sent" : "received";
  return (
    <div>
      <p className={`username-${messageType}`}>{`${username}`}</p>
      <p className={`message-${messageType}`} id={`${id}`}>
        {" "}
        {`${text}`}
      </p>
    </div>
  );
};

export default ChatMessage;
