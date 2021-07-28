import firebase from '../Firebase/firebase';
//checks database for groups existence
export const checkGroupExists = (groupName) => {
  const group = firebase.database().ref(`${groupName}`);

  return group.once('value').then((data) => {
    const response = data.val();

    if (response === null) {
      return false;
    } else {
      return true;
    }
  });
};
//creates a group if none exists with that name with user and location
export const createGroup = (groupName, username, latitude, longitude) => {
  const group = firebase.database().ref(`${groupName}`);
  return group.push({
    heading: 0,
    position: { latitude, longitude },
    username: username,
    speed: 0
  });
};
//add username and location to an existing group
export const joinGroup = (groupName, username, latitude, longitude) => {
  const group = firebase.database().ref(`${groupName}`);
  return group.push({
    heading: 0,
    position: { latitude, longitude },
    username: username,
    speed: 0
  });
};
