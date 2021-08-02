import { GroupContext } from "../contexts/groupContext";
import { useContext, useState, useEffect } from "react";
import NavBar from "./NavigationBar";
import { Link, useParams } from "react-router-dom";
import { getGroupData } from "../utils/api";
import Particle from "react-particles-js";
import particlesConfig from "../assets/particlesConfig.json";

const GroupPage = () => {
  const { group_slug } = useParams();
  const [groupData, setGroupData] = useState("");
  const [lookupObj, setLookupObj] = useState([]);
  // const { groupName } = useContext(GroupContext);

  const myStorage = window.localStorage;
  console.log(myStorage);
  const groupName = localStorage.getItem("groupName");
  const username = localStorage.getItem("username");
  console.log(groupName);
  console.log(username);

  useEffect(() => {
    getGroupData(group_slug).then((response) => {
      setGroupData(response);
      setLookupObj(Object.keys(response));
    });
  }, []);

  return (
    <div className="map-page">
      <div style={{ position: "absolute" }}>
        <Particle height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <NavBar />
      <h2>{group_slug}</h2>
      <h4>Welcome {username}</h4>
      <ul className="group-list">
        {lookupObj.map((member) => {
          return (
            <li key={member}>
              <p>{groupData[member].username}, </p>
            </li>
          );
        })}
      </ul>
      <div className="button-container">
        <Link to={`/nc-final-project/${group_slug}/ar`}>
          <button className="join-button">View in AR</button>
        </Link>
        <Link to={`/nc-final-project/${group_slug}/map`}>
          <button className="create-button">View in 2D</button>
        </Link>
      </div>
    </div>
  );
};

export default GroupPage;
