import NavBar from './navigation-bar';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { checkGroupExists, createGroup, joinGroup } from '../utils/api';
import useGeolocation from 'react-hook-geolocation';

const LandingPage = ({ setUsername, username, setGroupName, groupName }) => {
  const [createError, setCreateError] = useState('false');
  const [joinError, setJoinError] = useState('false');

  const geolocation = useGeolocation();

  const handleCreateErrors = () => {
    setCreateError(!createError);
  };

  const handleJoinErrors = () => {
    setJoinError(!joinError);
  };
  let toggle = false;

  const handleClickCreateGroup = async () => {
    await checkGroupExists(groupName).then((response) => {
      if (response) {
        handleCreateErrors();
        setJoinError('false');
      } else {
        console.log('create group');
        setCreateError('false');
        setJoinError('false');
        createGroup(
          groupName,
          username,
          geolocation.latitude,
          geolocation.longitude
        );
        return (
          <Link
            to={`/${groupName}`}
            style={{ textDecoration: 'none', color: 'black' }}
          ></Link>
        );
      }
    });
  };
  //checks if group exists, if true error, if false, create group and links to page
  const checkGroupInput = () => {
    if (groupName.length !== 0) {
      handleClickCreateGroup();
    } else {
      // toggle = true;
    }
  };
  //checks if group exists, if true joins user to group, if false error
  const handleClickJoinGroup = async () => {
    const groupCheck = await checkGroupExists(groupName).then((response) => {
      if (response) {
        console.log('joining group....');
        setCreateError('false');
        setJoinError('false');
        joinGroup(
          groupName,
          username,
          geolocation.latitude,
          geolocation.longitude
        );
      } else {
        handleJoinErrors();
        setCreateError('false');
      }
    });
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
        {toggle ? <h1>No</h1> : null}
        <label>
          Group Name:
          <br />
          <input
            value={groupName}
            onChange={(event) => setGroupName(event.target.value)}
          ></input>
        </label>
        <br />
        <p className={createError ? 'error' : null}>
          Group already exists! Click join group to join this group or use a
          different group name.
        </p>
        <button
          className="menubuttons"
          onClick={(event) => {
            event.preventDefault();
            checkGroupInput();
          }}
        >
          Create Group
          {/* <Link
            to={`/${groupName}`}
            style={{ textDecoration: "none", color: "black" }}
            >
            Create Group
          </Link> */}
        </button>
        <br />
        <p className={joinError ? 'error' : null}>
          Group does not exists! Click create group to create a group with this
          name or check you spelling.
        </p>
        <button
          className="menubuttons"
          onClick={(event) => {
            event.preventDefault();
            checkGroupInput();
          }}
        >
          Join a Group
          {/* <Link
            to={`/${groupName}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            Join a Group
          </Link> */}
        </button>
      </form>
    </div>
  );
};

export default LandingPage;
