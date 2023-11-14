import "../components/header.css";
import logo from "../../assets/logo-2.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav>
          <ul className="container">
            <li>
              <img className="logo" src={logo} alt="Logo" />
            </li>
            <li>
              <Link to="/homePage">Home</Link>
            </li>
            <li>
              <Link to="/addGamesPage">Add</Link>
            </li>
            <li>
              <a href="/homePage">User</a>
            </li>
            <div className="searchbar">
              <input
                className="searchbox"
                type="search"
                name="search"
                placeholder="Enter text here.."
              />
              <input type="submit" value="search" className="searchbutton" />
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
