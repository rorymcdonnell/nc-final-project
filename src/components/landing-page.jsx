import NavBar from "./navigation-bar";
import { Link } from "react-router-dom";
import { checkGroupExists } from "../utils/api";

const LandingPage = ({ setUsername, username, setGroupName, groupName }) => {
  //checks if group exists, if true error, if false, create group and links to page
  const handleClickCreateGroup = async () => {
    const groupCheck = await checkGroupExists(groupName).then((response) => {
      if (response) {
        console.log("group exists");
        // createGroup(groupName, username, latitude, longitude);
        // <Link to={`/${groupName}`}></Link>;
      } else {
        console.log("create group");
      }
    });
  };

  return (
    <div className="landing-page">
      <NavBar />
      <h1>Welcome to MAPA</h1>
      <form className="landing-form">
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
        <button
          onClick={(event) => {
            event.preventDefault();
            handleClickCreateGroup();
          }}
        >
          Create Group
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
