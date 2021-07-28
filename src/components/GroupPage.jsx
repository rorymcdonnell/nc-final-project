import { GroupContext } from "../contexts/groupContext";
import { useContext } from "react";
import NavBar from "./navigation-bar";

const GroupPage = () => {
  const { groupName } = useContext(GroupContext);
  return (
    <div className="map-page">
      <NavBar />
      <h2>{groupName}</h2>
      <ul className="group-list">People in your Group:</ul>
      <button>View in AR</button>
      <button>View in 2D</button>
    </div>
  );
};

export default GroupPage;
