import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import GroupPage from "./components/GroupPage";
import { useState } from "react";
import { GroupContext } from "./contexts/groupContext";
import Map from "./components/Map";
import Marker from "./components/Marker";
import GeoLocation from "./components/GeoLocation";
import Chatroom from "./components/Chatroom";

function App() {
  const [username, setUsername] = useState("");
  const [groupName, setGroupName] = useState("");
  const [location, setLocation] = useState("");
  const [groupData, setGroupData] = useState(null);

  return (
    <HashRouter basename="/">
      <div>
        {username !== "" && groupName !== "" ? (
          <GeoLocation
            username={username}
            groupName={groupName}
            location={location}
            setLocation={setLocation}
          />
        ) : null}

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
              <Route exact path="/:group_slug">
                <GroupPage groupData={groupData} setGroupData={setGroupData} />
              </Route>
              <Route exact path="/:group_slug/map">
                <Map location={location} />
              </Route>
              <Route exact path="/:group_slug/ar">
                <Marker groupData={groupData} location={location} />
              </Route>
              <Route exact path="/:group_slug/chatroom">
                <Chatroom />
              </Route>
            </Switch>
          </div>
        </GroupContext.Provider>
      </div>
    </HashRouter>
  );
}

export default App;
