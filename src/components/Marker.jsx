import React, { useEffect, useState } from 'react';
import { getGroupData } from '../utils/api';
import { Entity, Scene } from 'aframe-react';

const Marker = ({ location, groupData }) => {
  const [refreshedData, setGroupData] = useState(groupData);
  const groupName = localStorage.getItem('groupName');

  useEffect(() => {
    initialSetData();
    refreshData();
  }, []);

  const refreshData = async () => {
    setInterval(async () => {
      await initialSetData();
      document.getElementById('arjs-video').remove();
    }, 60000);
  };

  const initialSetData = async () => {
    setGroupData(await getGroupData(groupName));
    setHTML();
  };

  const setHTML = () => {
    const lookupObj = Object.keys(groupData);

    let html = `<a href='http://localhost:3000/nc-final-project/${groupName}'><button class="a-enter-vr-button">Exit</button></a><a-scene    arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false;"
    "><a-camera arjs-look-controls='smoothingFactor: 0.1' maxDistance=0 minDistance=10 gps-camera gpsMinDistance=10 gpsTimeInterval=5000 rotation-reader></a-camera><div id='members'>`;

    lookupObj.forEach((member) => {
      html += `<a-box color="yellow" gps-entity-place="latitude: ${groupData[member].position.latitude}; longitude: ${groupData[member].position.longitude}"></a-box>`;
    });

    html += `</div></a-scene>`;
    let wrapper = document.getElementById('unbelieveAbleScenes');
    wrapper.innerHTML = html;
  };

  return <div id="unbelieveAbleScenes"></div>;
};

export default Marker;

/*
 `<a-scene artoolkit><a-camera gps-camera rotation-reader></a-camera><a-box color="yellow" gps-entity-place="latitude: 52.675541; longitude: 1.231280"/><a-box color="red" gps-entity-place="latitude: 52.675507; longitude: 1.230954"/><a-box color="blue" gps-entity-place="latitude: 52.675585; longitude: 1.231684"/></a-scene>`;
*/
