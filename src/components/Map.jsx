import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

let groupData = {
  testgroup: {
    identifier1: {
      heading: 0,
      speed: 0,
      username: "Jimbob",
      position: { latitude: 52.675541, longitude: 1.23128 },
    },
    identifier2: {
      heading: 0,
      speed: 0,
      username: "Todd Howard",
      position: { latitude: 52.675507, longitude: 1.230954 },
    },
    identifier3: {
      heading: 0,
      speed: 0,
      username: "Hodd Toward",
      position: { latitude: 52.675585, longitude: 1.231684 },
    },
  },
};

const lookupObj = Object.keys(groupData.testgroup);

let greenIcon = new L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

let blueIcon = new L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

let redIcon = new L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

let orangeIcon = new L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const colors = [orangeIcon, blueIcon, greenIcon, redIcon];

const Map = () => {
  const myMap = (
    <MapContainer
      center={[52.675541, 1.23128]} //change to users location
      zoom={16}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {lookupObj.map((member, index) => {
        const lat = groupData.testgroup[member].position.latitude;
        const lng = groupData.testgroup[member].position.longitude;
        const finalPosition = [lat, lng];

        return (
          <Marker
            key={groupData.testgroup[member].username}
            position={finalPosition}
            icon={colors[index]}
          >
            <Popup> Name: {groupData.testgroup[member].username}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );

  return <div>{myMap}</div>;
};

export default Map;
