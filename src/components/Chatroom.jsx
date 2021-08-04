import firebase from "firebase/app";
import "firebase/firestore";
import { useState, useRef, useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";
import NavBar from "./NavigationBar";
import Particle from "react-particles-js";
import particlesConfig from "../assets/particlesConfig.json";

const Chatroom = () => {
  const firestore = firebase.firestore();
  const username = localStorage.getItem("username");
  const groupName = localStorage.getItem("groupName");
  const messagesRef = firestore.collection("messages");

  const query = messagesRef.orderBy("createdAt");

  const [formVal, setFormVal] = useState("");

  const [messages] = useCollectionData(query, { idField: "id" });
  const messagesEnd = useRef();

  const sendMessage = async (event) => {
    event.preventDefault();
    await messagesRef.add({
      text: formVal,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      username,
      groupName,
    });

    setFormVal("");
    messagesEnd.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      className="chat-page"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div style={{ position: "absolute" }}>
        <Particle height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <NavBar />
      <h1>{groupName}'s Chat</h1>
      <div className="chat-container">
        <div className="chatbox">
          {messages &&
            messages
              .filter((message) => message.groupName === groupName)
              .map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
        </div>
        <div ref={messagesEnd}></div>
      </div>

      <div className="form-inline">
        <form onSubmit={sendMessage}>
          <textarea
            className="chat-input"
            value={formVal}
            onChange={(event) => {
              setFormVal(event.target.value);
            }}
          ></textarea>{" "}
          <button className="submit-button" type="submit" disabled={!formVal}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatroom;
