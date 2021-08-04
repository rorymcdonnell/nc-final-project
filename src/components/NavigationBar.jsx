import { Link } from "react-router-dom";
import { showMenu } from "../utils/showMenu";

const NavBar = () => {
  let groupName = localStorage.groupName;

  return (
    <div className="navbar" id="navbar">
      <span className="toggle-button" onClick={showMenu}>
        ☰
      </span>

      <ul>
        <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to={`/${groupName}`} style={{ textDecoration: "none" }}>
            Your Group
          </Link>
        </li>
        <li>
          <Link
            to={`/${groupName}/chatroom`}
            style={{ textDecoration: "none" }}
          >
            Chatroom
          </Link>
        </li>
        <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
