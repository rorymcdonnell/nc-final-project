import firebase from "firebase/app";
import "firebase/firestore";
import { useState, useRef } from "react";
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

  const query = messagesRef.orderBy("createdAt").limit(3);

  const [formVal, setFormVal] = useState("");

  const [messages] = useCollectionData(query, { idField: "id" });
  const dummy = useRef();

  const sendMessage = async (event) => {
    event.preventDefault();
    await messagesRef.add({
      text: formVal,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      username,
      groupName,
    });

    setFormVal("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="chat-page"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div style={{ position: "absolute" }}>
        <Particle height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <div>
        <NavBar />
        <h2>{groupName}'s Chat</h2>
        <div className="chatbox">
          {messages &&
            messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          <div ref={dummy}></div>
        </div>
        <form onSubmit={sendMessage}>
          <input
            className="chat-input"
            value={formVal}
            onChange={(event) => {
              setFormVal(event.target.value);
            }}
          ></input>{" "}
          <button className="submit-button" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatroom;
