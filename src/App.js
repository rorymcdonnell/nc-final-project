import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import firebase from './Firebase/firebase';
import LandingPage from './components/landing-page';
import GroupPage from './components/GroupPage';
import { useState } from 'react';
import { GroupContext } from './contexts/groupContext';
// import TwoDMap from "./components/TwoDMap";
import Map from './components/Map';
import Marker from './components/Marker';

function App() {
  const [username, setUsername] = useState('');
  const [groupName, setGroupName] = useState('');

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
            <Route exact path="/:group_slug">
              <GroupPage />
            </Route>
            <Route exact path="/maps/2d">
              <Map />
            </Route>
            <Route exact path="/maps/3d">
              <Marker />
            </Route>
          </Switch>
        </div>
      </GroupContext.Provider>
    </BrowserRouter>
  );
}

export default App;
