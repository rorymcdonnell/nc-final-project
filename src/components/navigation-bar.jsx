import { Link } from "react-router-dom";
import { showMenu } from "../utils/showMenu";

const NavBar = () => {
  return (
    <div className="navbar" id="navbar">
      <span className="toggle-button" onClick={showMenu}>
        ☰
      </span>

      <ul>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Maps</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
