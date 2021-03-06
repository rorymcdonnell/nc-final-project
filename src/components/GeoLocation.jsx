import React, { useEffect } from 'react';
import useGeolocation from 'react-hook-geolocation';
import { sendData } from '../utils/api';

const GeoLocation = ({ username, groupName, time, setTime }) => {
  const geolocation = useGeolocation();
  setInterval(setTime(geolocation.timestamp), 5000);

  useEffect(() => {
    sendData(groupName, username, geolocation.latitude, geolocation.longitude);
  }, [time, groupName, username, geolocation.latitude, geolocation.longitude]);

  return <div></div>;
};

export default GeoLocation;
