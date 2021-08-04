import React, { useEffect } from 'react';

const Marker = ({ groupData }) => {
  useEffect(() => {
    setHTML();
  });

  const colors = [
    'orange',
    'blue',
    'green',
    'red',
    'orange',
    'blue',
    'green',
    'red',
    'orange',
    'blue',
    'green',
    'red',
    'orange',
    'blue',
    'green',
    'red',
    'green',
    'red',
    'orange',
    'blue',
    'green',
    'red'
  ];

  const setHTML = () => {
    let counter = 0;
    const lookupObj = Object.keys(groupData);

    let html = `<a href='https://rorymcdonnell.github.io/nc-final-project/'><button class="a-enter-vr-button">Exit</button></a><a-scene vr-mode-ui="enabled: false"><a-camera gps-camera rotation-reader></a-camera>`;

    lookupObj.forEach((member) => {
      html += `<a-box color=${colors[counter]} gps-entity-place="latitude: ${groupData[member].position.latitude}; longitude: ${groupData[member].position.longitude}"></a-box>`;
      counter++;
    });

    html += `</a-scene>`;
    let wrapper = document.getElementById('unbelieveAbleScenes');
    wrapper.innerHTML = html;
    document.body.appendChild(wrapper);
  };

  return <div id="unbelieveAbleScenes"></div>;
};

export default Marker;
