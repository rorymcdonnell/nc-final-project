import { ConsoleWriter } from 'istanbul-lib-report';
import React, { useEffect, useState } from 'react';
import { getGroupData } from '../utils/api';

const Marker = ({ location }) => {
  const [lookupObj, setLookupObj] = useState({});
  const [groupData, setGroupData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const myStorage = window.localStorage;
  const groupName = localStorage.getItem('groupName');
  const username = localStorage.getItem('username');

  useEffect(() => {
    getGroupData(groupName)
      .then((response) => {
        setGroupData(response);
        setLookupObj(Object.keys(groupData));
      })
      .then((response) => {
        setIsLoading(false);
      });
  }, [location]);

  const AR = () => {
    if (document.getElementById('AR') !== null) {
      let element = document.getElementById('AR');
      element.remove();
    }
    let wrapper = document.createElement('div');
    wrapper.id = 'AR';
    let html = `<a href='http://localhost:3000/nc-final-project/${groupName}'><button class="a-enter-vr-button">Exit</button></a><a-scene artoolkit vr-mode-ui="enabled: false"><a-camera gps-camera rotation-reader></a-camera>`;
    console.log(lookupObj);
    lookupObj.forEach((member) => {
      html += `<a-box color="yellow" gps-entity-place="latitude: ${groupData[member].position.latitude}; longitude: ${groupData[member].position.longitude}"/>`;
    });
    html += `</a-scene>`;
    console.log(html);
    wrapper.innerHTML = html;
    document.body.appendChild(wrapper);
  };

  return <div>{!isLoading ? AR() : <p>is Loading...</p>}</div>;
};

export default Marker;

/*
 `<a-scene artoolkit><a-camera gps-camera rotation-reader></a-camera><a-box color="yellow" gps-entity-place="latitude: 52.675541; longitude: 1.231280"/><a-box color="red" gps-entity-place="latitude: 52.675507; longitude: 1.230954"/><a-box color="blue" gps-entity-place="latitude: 52.675585; longitude: 1.231684"/></a-scene>`;
*/
