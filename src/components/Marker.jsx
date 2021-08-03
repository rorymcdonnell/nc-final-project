import React, { useEffect, useState } from 'react';

const Marker = ({ location, groupData }) => {
  const groupName = localStorage.getItem('groupName');

  useEffect(() => {
    setData();
  }, []);

  const setData = async () => {
    setHTML();
  };

  const setHTML = () => {
    const lookupObj = Object.keys(groupData);

    let html = `<a href='http://localhost:3000/nc-final-project/${groupName}'><button class="a-enter-vr-button">Exit</button></a><a-scene vr-mode-ui="enabled: false" embedded><a-camera gps-camera rotation-reader></a-camera>`;

    lookupObj.forEach((member) => {
      html += `<a-box color="yellow" gps-entity-place="latitude: ${groupData[member].position.latitude}; longitude: ${groupData[member].position.longitude}">`;
    });

    html += `</a-scene>`;
    let wrapper = document.getElementById('unbelieveAbleScenes');
    wrapper.innerHTML = html;
  };

  return <div id="unbelieveAbleScenes"></div>;
};

export default Marker;

/*
 `<a-scene artoolkit><a-camera gps-camera rotation-reader></a-camera><a-box color="yellow" gps-entity-place="latitude: 52.675541; longitude: 1.231280"/><a-box color="red" gps-entity-place="latitude: 52.675507; longitude: 1.230954"/><a-box color="blue" gps-entity-place="latitude: 52.675585; longitude: 1.231684"/></a-scene>`;
*/
