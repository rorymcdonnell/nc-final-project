import { GroupContext } from "../contexts/groupContext";
import { useContext } from "react";
import NavBar from "./navigation-bar";
import { Link, useParams } from "react-router-dom";

const GroupPage = () => {
  const { group_slug } = useParams();
  console.log(group_slug);

  return (
    <div className="map-page">
      <NavBar />
      <h2>{group_slug}</h2>
      <ul className="group-list">People in your Group:</ul>
      <Link to="/maps/3d">
        <button className="menubuttons">View in AR</button>
      </Link>
      <Link to="/maps/2d">
        <button className="menubuttons">View in 2D</button>
      </Link>
    </div>
  );
};

export default GroupPage;
