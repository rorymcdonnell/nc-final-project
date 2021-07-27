import React from "react";
import useGeolocation from "react-hook-geolocation";

const GeoLocation = () => {
  const geolocation = useGeolocation();
  return (
    <div>
      <h3 className="latitude">LATITUDE: {geolocation.latitude}</h3>
      <h3 className="longitude">LONGITUDE: {geolocation.longitude}</h3>
    </div>
  );
};

export default GeoLocation;
