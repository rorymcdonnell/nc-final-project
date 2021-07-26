import { useState } from "react";
import NavBar from "./navigation-bar";

const LandingPage = ({ setUsername, username, setGroupName, groupName }) => {
  return (
    <div className="landing-page">
      <NavBar />
      <h1>Welcome to MAPA</h1>
      <form>
        <label>
          Username:
          <br />
          <input
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          ></input>
        </label>
        <br />
        <label>
          Group Name:
          <br />
          <input
            value={groupName}
            onChange={(event) => setGroupName(event.target.value)}
          ></input>
        </label>
        <br />
        <button>Create a Group</button>
        <br />
        <button>Join a Group</button>
      </form>
    </div>
  );
};

export default LandingPage;
