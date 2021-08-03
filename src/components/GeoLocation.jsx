import React, { useEffect } from 'react';
import useGeolocation from 'react-hook-geolocation';
import { sendData } from '../utils/api';

const GeoLocation = ({ username, groupName, time, setTime }) => {
  const geolocation = useGeolocation();
  setInterval(setTime(geolocation.timestamp), 5000);
  console.log(username);
  console.log(groupName);
  useEffect(() => {
    console.log(time);
    sendData(groupName, username, geolocation.latitude, geolocation.longitude);
  }, [time]);

  return <div></div>;
};

export default GeoLocation;
