import firebase from "../Firebase/firebase";
//checks database for groups existence
export const checkGroupExists = (groupName) => {
  console.log(groupName);
  if (groupName.length === 0) {
    return false;
  } else {
    const group = firebase.database().ref(`${groupName}`);
    console.log(group);
    return group
      .once("value")
      .then((data) => {
        const response = data.val();

        if (response === null) {
          return false;
        } else {
          return true;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
//creates a group if none exists with that name with user and location
export const createGroup = (groupName, username, latitude, longitude) => {
  const group = firebase.database().ref(`${groupName}`);
  return group.push({
    heading: 0,
    position: { latitude, longitude },
    username: username,
    speed: 0,
  });
};
//add username and location to an existing group
export const joinGroup = (groupName, username, latitude, longitude) => {
  const group = firebase.database().ref(`${groupName}`);
  return group.push({
    heading: 0,
    position: { latitude, longitude },
    username: username,
    speed: 0,
  });
};
