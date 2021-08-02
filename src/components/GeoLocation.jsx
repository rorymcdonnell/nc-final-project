import React, { useEffect } from 'react';
import useGeolocation from 'react-hook-geolocation';
import { sendData } from '../utils/api';

const GeoLocation = ({ username, groupName, location, setLocation }) => {
  const geolocation = useGeolocation();
  setTimeout(setLocation(geolocation.latitude), 10000);
  useEffect(() => {
    sendData(groupName, username, geolocation.latitude, geolocation.longitude);
  }, [location]);

  return <div></div>;
};

export default GeoLocation;
