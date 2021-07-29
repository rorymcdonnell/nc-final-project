import NavBar from "./navigation-bar";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { checkGroupExists, createGroup, joinGroup } from "../utils/api";
import useGeolocation from "react-hook-geolocation";

const LandingPage = ({ setUsername, username, setGroupName, groupName }) => {
  const [createError, setCreateError] = useState("false");
  const [joinError, setJoinError] = useState("false");
  const [emptyFieldError, setEmptyFieldError] = useState("false");

  const geolocation = useGeolocation();

  const handleCreateErrors = () => {
    setCreateError(!createError);
  };

  const handleJoinErrors = () => {
    setJoinError(!joinError);
  };

  //checks if group exists, if true error, if false, create group and links to page

  const handleClickCreateGroup = async () => {
    const groupCheck = await checkGroupExists(groupName).then((response) => {
      if (response) {
        handleCreateErrors();
        setJoinError("false");
      } else {
        console.log("create group");
        setCreateError("false");
        setJoinError("false");
        createGroup(
          groupName,
          username,
          geolocation.latitude,
          geolocation.longitude
        );
      }
    });
  };

  //checks if group exists, if true joins user to group, if false error
  const handleClickJoinGroup = async () => {
    const groupCheck = await checkGroupExists(groupName).then((response) => {
      if (response) {
        console.log("joining group....");
        setCreateError("false");
        setJoinError("false");
        joinGroup(
          groupName,
          username,
          geolocation.latitude,
          geolocation.longitude
        );
      } else {
        console.log(response);
        handleJoinErrors();
        setCreateError("false");
      }
    });
  };

  const handleInputError = () => {
    if (groupName.length !== 0 && username.length !== 0) {
      handleClickJoinGroup();
    } else {
      setEmptyFieldError(!emptyFieldError);
    }
  };

  return (
    <div className="landing-page">
      <NavBar />
      <h1>Welcome to MAPA</h1>
      <form className="landing-form">
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
          <p className={emptyFieldError ? "error" : null}>
            Your username or group name cannot be blank!
          </p>
        </label>
        <br />
        <p className={createError ? "error" : null}>
          Group already exists! Click join group to join this group or use a
          different group name.
        </p>
        <button
          onClick={(event) => {
            event.preventDefault();
            handleInputError();
          }}
        >
          <Link
            to={createError ? "/" : `/${groupName}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            Create Group
          </Link>
        </button>
        <br />
        <p className={joinError ? "error" : null}>
          Group does not exist! Click create group to create a group with this
          name or check you spelling.
        </p>
        <button
          onClick={(event) => {
            event.preventDefault();
            handleInputError();
          }}
        >
          <Link
            to={joinError ? "/" : `/${groupName}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            Join a Group
          </Link>
        </button>
      </form>
    </div>
  );
};

export default LandingPage;
