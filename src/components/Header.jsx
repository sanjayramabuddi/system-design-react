import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyApp</h2>

      <ul className="nav-links">
        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/signup">Signup</Link>
        </li>

        <li>
          <Link to="/user-add">Add User</Link>
        </li>

        <li>
          <Link to="/user-update">Update User</Link>
        </li>

        <li>
          <Link to="/user-list">List User</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
