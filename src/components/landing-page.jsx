import NavBar from "./navigation-bar";
import { Link } from "react-router-dom";

const LandingPage = ({ setUsername, username, setGroupName, groupName }) => {
  return (
    <div className="landing-page">
      <NavBar />
      <h1>Welcome to MAPA</h1>
      <form className="landing-form" onSubmit={() => {}}>
        <label>
          Username:
          <br />
          <input
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          ></input>
        </label>
        <br />
        <label>
          Group Name:
          <br />
          <input
            value={groupName}
            onChange={(event) => setGroupName(event.target.value)}
          ></input>
        </label>
        <br />
        <button>
          <Link to="/maps" style={{ textDecoration: "none", color: "black" }}>
            Create a Group
          </Link>
        </button>
        <br />
        <button>
          <Link to="/maps" style={{ textDecoration: "none", color: "black" }}>
            Join a Group
          </Link>
        </button>
      </form>
    </div>
  );
};

export default LandingPage;
