import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import firebase from "./Firebase/firebase";
import LandingPage from "./components/landing-page";
import MapPage from "./components/map-page";
import { useState } from "react";
import { GroupContext } from "./contexts/groupContext";

function App() {
  const [username, setUsername] = useState("");
  const [groupName, setGroupName] = useState("");
  console.log(firebase.database);

  return (
    <BrowserRouter>
      <GroupContext.Provider value={{ groupName, setGroupName }}>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <LandingPage
                setUsername={setUsername}
                username={username}
                groupName={groupName}
                setGroupName={setGroupName}
              />
            </Route>
            <Route exact path="/maps">
              <MapPage groupName={groupName} />
            </Route>
          </Switch>
        </div>
      </GroupContext.Provider>
    </BrowserRouter>
  );
}

export default App;
