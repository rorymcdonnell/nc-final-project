import firebase from "../Firebase/firebase";
//checks database for groups existence

export const checkGroupExists = (groupName) => {
  const group = firebase.database().ref(`${groupName}`);

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
};

//send Data to DB
export const sendData = (groupName, username, latitude, longitude) => {
  firebase
    .database()
    .ref(`${groupName}/` + username)
    .set({ position: { latitude, longitude } });
};

//get Group Data
export const getGroupData = (groupName) => {
  const group = firebase.database().ref(`${groupName}`);

  return group.once("value").then((data) => {
    const response = data.val();
    return response;
  });
};
