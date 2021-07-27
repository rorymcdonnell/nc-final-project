import { GroupContext } from "../contexts/groupContext";
import NavBar from "./navigation-bar";
import { useContext } from "react";
import useGeolocation from "react-hook-geolocation";

const MapPage = () => {
  const geolocation = useGeolocation();
  const { groupName } = useContext(GroupContext);
  // return (
  //   <div className="map-page">
  //     <NavBar />
  //     <h2>{groupName}</h2>

  //     <ul className="group-list">People in your Group:</ul>
  //     <button>View in AR</button>
  //     <button>View in 2D</button>
  //   </div>
  // );
  return !geolocation.error ? (
    <ul>
      <li>Latitude: {geolocation.latitude}</li>
      <li>Longitude: {geolocation.longitude}</li>
      <li>Location accuracy: {geolocation.accuracy}</li>
      <li>Altitude: {geolocation.altitude}</li>
      <li>Altitude accuracy: {geolocation.altitudeAccuracy}</li>
      <li>Heading: {geolocation.heading}</li>
      <li>Speed: {geolocation.speed}</li>
      <li>Timestamp: {geolocation.timestamp}</li>
    </ul>
  ) : (
    <p>No geolocation, sorry.</p>
  );
};

export default MapPage;
