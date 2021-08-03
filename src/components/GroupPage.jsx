import { GroupContext } from "../contexts/groupContext";
import { useContext, useState, useEffect } from "react";
import NavBar from "./NavigationBar";
import { Link, useParams } from "react-router-dom";
import { getGroupData } from "../utils/api";
import Particle from "react-particles-js";
import particlesConfig from "../assets/particlesConfig.json";
import useGeolocation from "react-hook-geolocation";

const GroupPage = ({ groupData, setGroupData }) => {
  const { group_slug } = useParams();
  const [lookupObj, setLookupObj] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const groupName = localStorage.getItem("groupName");
  const username = localStorage.getItem("username");

  useEffect(() => {
    getGroupData(groupName).then((response) => {
      setGroupData(response);
      setLookupObj(Object.keys(response));
      setIsLoading(false);
    });
  }, []);

  // Distance between 2 people function
  const geolocation = useGeolocation();
  const distance = (member) => {
    const R = 6371e3; // metres
    const φ1 = (geolocation.latitude * Math.PI) / 180; // φ, λ in radians
    const φ2 = (groupData[member].position.latitude * Math.PI) / 180;
    const Δφ =
      ((groupData[member].position.latitude - geolocation.latitude) * Math.PI) /
      180;
    const Δλ =
      ((groupData[member].position.longitude - geolocation.longitude) *
        Math.PI) /
      180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c; // in metres

    return d;
  };

  if (isLoading) {
    return (
      <div
        className="group-page"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div style={{ position: "absolute" }}>
          <Particle height="100vh" width="100vw" params={particlesConfig} />
        </div>
        <NavBar />
        <h1>LOADING...</h1>
      </div>
    );
  }

  return (
    <div
      className="group-page"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div style={{ position: "absolute" }}>
        <Particle height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <NavBar />
      <h2>{group_slug}</h2>
      <h4>Welcome {username}</h4>
      <div className="group-container">
        <ul className="group-list">
          <li className="user-heading">Group Members</li>
          {lookupObj.map((member) => {
            return (
              <li key={member}>
                <p>{member} </p>
              </li>
            );
          })}
        </ul>

        <ul className="distance-list">
          <li className="user-heading">{`Distance from you`}</li>
          {lookupObj.map((member) => {
            return (
              <li key={member + member}>
                <p>{`${Math.round(`${distance(member)}`)}m`}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="button-container">
        <Link to={`/${group_slug}/ar`}>
          <button className="join-button">View in AR</button>
        </Link>
        <Link to={`/${group_slug}/map`}>
          <button className="create-button">View in 2D</button>
        </Link>
      </div>
      <Link to={`/${groupName}/chatroom`}>
        <button className="group-button">Group Chatroom</button>
      </Link>
    </div>
  );
};

export default GroupPage;
