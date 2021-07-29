import NavBar from './NavigationBar';
import { Link, useParams, Route } from 'react-router-dom';
import { useState } from 'react';
import { checkGroupExists, sendData } from '../utils/api';
import useGeolocation from 'react-hook-geolocation';
import GroupPage from './GroupPage';

const LandingPage = ({ setUsername, username, setGroupName, groupName }) => {
  const [error, setError] = useState('');

  const geolocation = useGeolocation();

  const checkInputs = async (button) => {
    if (groupName.length === 0 || username.length === 0) {
      setError('Please provide valid inputs');
    } else {
      checkGroupExists(groupName).then((response) => {
        if (
          (response && button === 'join') ||
          (!response && button === 'create')
        ) {
          sendData(
            groupName,
            username,
            geolocation.latitude,
            geolocation.longitude
          );
          document.getElementById('group-page-button').disabled = false;
        } else if (button === 'create') {
          setError('That group exists, please try again');
        } else {
          setError("That group doesn't exist, please try again");
        }
      });
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
          <p>{error ? error : null}</p>
        </label>
        <br />
        <button
          className="menu-buttons"
          onClick={(event) => {
            event.preventDefault();
            checkInputs('create');
          }}
        >
          Create Group
        </button>
        <br />
        <button
          className="menu-buttons"
          onClick={(event) => {
            event.preventDefault();
            checkInputs('join');
          }}
        >
          Join a Group
        </button>
        <Link to={`/${groupName}`}>
          <button
            className="menu-buttons"
            disabled="true"
            id="group-page-button"
          >
            Group Page
          </button>
        </Link>
      </form>
    </div>
  );
};

export default LandingPage;
