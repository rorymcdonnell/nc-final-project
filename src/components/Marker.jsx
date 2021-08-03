import React, { useEffect, useState } from 'react';

const Marker = ({ location, groupData }) => {
  const groupName = localStorage.getItem('groupName');

  useEffect(() => {
    setHTML();
  }, []);

  // const setData = async () => {
  //   setHTML();
  // };

  const fakeData = {
    Aaron: {
      position: {
        latitude: 52.6757091,
        longitude: 1.2314057
      }
    },
    Chris: {
      position: {
        latitude: 52.681113599999996,
        longitude: 1.2320768
      }
    },
    Jammer: {
      position: {
        latitude: 52.675612,
        longitude: 1.231774
      }
    },
    John: {
      position: {
        latitude: 52.675417,
        longitude: 1.232085
      }
    }
  };

  const setHTML = () => {
    const lookupObj = Object.keys(fakeData);

    let html = `<a href='http://localhost:3000/nc-final-project/${groupName}'><button class="a-enter-vr-button">Exit</button></a><a-scene vr-mode-ui="enabled: false"><a-camera gps-camera rotation-reader></a-camera>`;

    lookupObj.forEach((member) => {
      html += `<a-box color="yellow" gps-entity-place="latitude: ${fakeData[member].position.latitude}; longitude: ${fakeData[member].position.longitude}"></a-box>`;
    });

    html += `</a-scene>`;
    let wrapper = document.getElementById('unbelieveAbleScenes');
    wrapper.innerHTML = html;
    document.body.appendChild(wrapper);
  };

  return <div id="unbelieveAbleScenes"></div>;
};

export default Marker;

/*
 `<a-scene artoolkit><a-camera gps-camera rotation-reader></a-camera><a-box color="yellow" gps-entity-place="latitude: 52.675541; longitude: 1.231280"/><a-box color="red" gps-entity-place="latitude: 52.675507; longitude: 1.230954"/><a-box color="blue" gps-entity-place="latitude: 52.675585; longitude: 1.231684"/></a-scene>`;
*/
