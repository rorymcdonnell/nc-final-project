import { GroupContext } from "../contexts/groupContext";
import { useContext } from "react";
import NavBar from "./navigation-bar";
import { Link } from "react-router-dom";

const GroupPage = () => {
  const { groupName } = useContext(GroupContext);
  return (
    <div className="map-page">
      <NavBar />
      <h2>{groupName}</h2>

      <ul className="group-list">People in your Group:</ul>
      <button>View in AR</button>
      <Link to="/maps/2d">
        <button>View in 2D</button>
      </Link>
    </div>
  );
};

export default GroupPage;