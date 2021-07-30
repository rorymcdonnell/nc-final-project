import React, { useEffect } from "react";

const Marker = ({ groupName }) => {
  useEffect(() => {
    let wrapper = document.createElement("div");
    let html = `<a href='http://localhost:3000/nc-final-project/${groupName}'><button class="a-enter-vr-button">Exit</button></a><a-scene artoolkit vr-mode-ui="enabled: false"><a-camera gps-camera rotation-reader></a-camera>`;

    const lookupObj = Object.keys(groupData.testgroup);

    lookupObj.forEach((member) => {
      html += `<a-box color="yellow" gps-entity-place="latitude: ${groupData.testgroup[member].position.latitude}; longitude: ${groupData.testgroup[member].position.longitude}"/>`;
    });
    html += `</a-scene>`;

    wrapper.innerHTML = html;
    document.body.appendChild(wrapper);
  }, []);

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

  return <div></div>;
};

export default Marker;

/*
 `<a-scene artoolkit><a-camera gps-camera rotation-reader></a-camera><a-box color="yellow" gps-entity-place="latitude: 52.675541; longitude: 1.231280"/><a-box color="red" gps-entity-place="latitude: 52.675507; longitude: 1.230954"/><a-box color="blue" gps-entity-place="latitude: 52.675585; longitude: 1.231684"/></a-scene>`;
*/
