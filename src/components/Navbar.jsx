import { Link } from "react-router-dom";
import logo from "../assets/images/white logo-01.png";


function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>

       <div className="nav-links">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a>
  </div>
</nav>
  );
}

export default Navbar;