import firebase from "../Firebase/firebase";

export const checkGroupExists = (groupName) => {
  const group = firebase.database().ref(`${groupName}`);

  return group.once("value").then((data) => {
    const response = data.val();

    if (response === null) {
      return false;
    } else {
      return true;
    }
  });
};

// group.push({
//   heading: 15,
//   position: { latitude: 12, longitude: 13 },
//   username: "weee",
//   speed: 0,
// });
