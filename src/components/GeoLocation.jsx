import React, { useEffect } from 'react';
import useGeolocation from 'react-hook-geolocation';
import { sendData } from '../utils/api';

const GeoLocation = ({ username, groupName, location, setLocation }) => {
  const geolocation = useGeolocation();
  setLocation(geolocation.latitude);
  useEffect(() => {
    sendData(groupName, username, geolocation.latitude, geolocation.longitude);
  }, [location]);

  return <div></div>;
};

export default GeoLocation;
