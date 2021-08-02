import React, { useEffect, useState } from 'react';
import { getGroupData } from '../utils/api';
import { Entity, Scene } from 'aframe-react';

const Marker = ({ location }) => {
  const [isLoading, setIsLoading] = useState(true);
  // const [groupData, setGroupData] = useState('');
  // const [lookupObj, setLookupObj] = useState('');

  const groupName = localStorage.getItem('groupName');

  // useEffect(() => {
  //   getGroupData(groupName)
  //     .then((response) => {
  //       setGroupData(response);
  //       setLookupObj(Object.keys(groupData));
  //       console.log(lookupObj);
  //     })
  //     .then((response) => {
  //       setIsLoading(false);
  //       AR();
  //     });
  // }, [location]);

  // const AR = () => {
  //   if (!isLoading) {
  //     let html = `<a href='https://rorymcdonnell.github.io/nc-final-project/${groupName}'><button class="a-enter-vr-button">Exit</button></a><a-scene artoolkit vr-mode-ui="enabled: false"><a-camera gps-camera rotation-reader></a-camera>`;
  //     lookupObj.forEach((member) => {
  //       html += `<a-box color="yellow" gps-entity-place="latitude: ${groupData[member].position.latitude}; longitude: ${groupData[member].position.longitude}"/>`;
  //     });
  //     html += `</a-scene>`;
  //     let wrapper = document.createElement('div');
  //     wrapper.innerHTML = html;
  //     document.body.appendChild(wrapper);
  //   }
  // };

  const groupData = {
    Aaron: {
      position: {
        latitude: 52.67567031124288,
        longitude: 1.2313851629922208
      }
    },
    Chris: {
      position: {
        latitude: 52.681113599999996,
        longitude: 1.2320768
      }
    },
    John: {
      position: {
        latitude: 52.675717999999996,
        longitude: 1.2313607
      }
    }
  };

  let lookupObj = Object.keys(groupData);

  let html = `<a href='https://rorymcdonnell.github.io/nc-final-project/${groupName}'><button class="a-enter-vr-button">Exit</button></a><a-scene artoolkit vr-mode-ui="enabled: false"><a-camera gps-camera rotation-reader></a-camera>`;
  lookupObj.forEach((member) => {
    html += `<a-box color="yellow" gps-entity-place="latitude: ${groupData[member].position.latitude}; longitude: ${groupData[member].position.longitude}"/>`;
  });
  html += `</a-scene>`;
  let wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  document.body.appendChild(wrapper);

  return <div></div>;
  // (
  //   <Scene>
  //     <a-camera gps-camera rotation reader></a-camera>
  //     <Entity
  //       primitive="a-box"
  //       gps-entity-place="latitude: 52; longitude: 1.2"
  //       color="blue"
  //     />
  //   </Scene>
  // );
};

export default Marker;

/*
 `<a-scene artoolkit><a-camera gps-camera rotation-reader></a-camera><a-box color="yellow" gps-entity-place="latitude: 52.675541; longitude: 1.231280"/><a-box color="red" gps-entity-place="latitude: 52.675507; longitude: 1.230954"/><a-box color="blue" gps-entity-place="latitude: 52.675585; longitude: 1.231684"/></a-scene>`;
*/
