import { NavLink, Link } from "react-router-dom";
import './Hero.css';
import { FiAlignJustify } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <nav>
        {/* Logo */}
        <Link to="/"><img src="./images/nav_logo.png" alt="Logo" /></Link>

        {/* Nav Links */}
        <ul className={menuOpen ? 'nav_links open' : 'nav_links'}>
          <li><NavLink to="/" className="link">Pages</NavLink></li>
          <li><NavLink to="/" className="link">Shop</NavLink></li>
          <li><NavLink to="/" className="link">About</NavLink></li>
          <li><NavLink to="/" className="link">Login</NavLink></li>
          <li><NavLink to="/" className="link">Cart</NavLink></li>
        </ul>

        {/* Hamburger Icon */}
        <button className="link_icon" onClick={toggleMenu}>
          <FiAlignJustify />
        </button>
      </nav>
    </>
  );
}

export default Navbar;
