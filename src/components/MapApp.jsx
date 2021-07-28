import React, { useState, Component, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import useGeolocation from "react-hook-geolocation";
import GeoLocation from "./GeoLocation";

const MapApp = () => {
  const geolocation = useGeolocation();

  console.log(geolocation.latitude);
  console.log(geolocation.longitude);

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const [viewport, setViewport] = useState({
    // latitude: { latitude },
    // longitude: { longitude },
    width: "100vw",
    height: "100vh",
    zoom: 5,
  });

  // const [latitude, setLatitude] = useState(0);
  // const [longitude, setLongitude] = useState(0);
  // const [status, setStatus] = useState(null);
  // const [userLocation, setUserLocation] = useState({
  //   viewport: {
  //     width: "100vw",
  //     height: "100vh",
  //     latitude: 42.430472,
  //     longitude: -123.334102,
  //     zoom: 16,
  //   },
  // });

  return (
    <div>
      <GeoLocation />
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/qu1p/ckrgqg5an5n2618oii11m51r4"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {/* <Marker latitude={latitude} longitude={longitude}>
          <img src={otherMarker} alt=“map marker”></img>
        </Marker> */}
      </ReactMapGL>
    </div>
  );
};

export default MapApp;
