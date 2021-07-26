import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/landing-page";
import MapPage from "./components/map-page";
import { useState } from "react";
import NavBar from "./components/navigation-bar";

function App() {
  const [username, setUsername] = useState("");
  const [groupName, setGroupName] = useState("");
  return (
    <BrowserRouter>
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
          <Route>
            <MapPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
