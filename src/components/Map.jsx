import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { getGroupData } from '../utils/api';
import { useParams } from 'react-router';

const Map = ({ time }) => {
  const [groupData, setGroupData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [lookupObj, setLookupObj] = useState([]);
  const { group_slug } = useParams();

  let greenIcon = new L.icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  let blueIcon = new L.icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  let redIcon = new L.icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  let orangeIcon = new L.icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const colors = [
    orangeIcon,
    blueIcon,
    greenIcon,
    redIcon,
    orangeIcon,
    blueIcon,
    greenIcon,
    redIcon,
    orangeIcon,
    blueIcon,
    greenIcon,
    redIcon,
    orangeIcon,
    blueIcon,
    greenIcon,
    redIcon,
    greenIcon,
    redIcon,
    orangeIcon,
    blueIcon,
    greenIcon,
    redIcon
  ];

  useEffect(() => {
    getGroupData(group_slug)
      .then((response) => {
        setGroupData(response);
        setLookupObj(Object.keys(response));
      })
      .then((response) => {
        setIsLoading(false);
      });
  }, [time, group_slug]);

  return (
    <div className="map-container">
      {!isLoading ? (
        <div>
          <button className="map-exit-btn">Return to Group Page</button>
          <div>
            <MapContainer
              center={[52.675541, 1.23128]} //change to users location
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {lookupObj.map((member, index) => {
                const lat = groupData[member].position.latitude;
                const lng = groupData[member].position.longitude;
                const finalPosition = [lat, lng];
                return (
                  <Marker
                    key={member}
                    position={finalPosition}
                    icon={colors[index]}
                  >
                    <Popup> Name: {member}</Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          </div>
        </div>
      ) : (
        '...isLoading'
      )}
    </div>
  );
};

export default Map;
