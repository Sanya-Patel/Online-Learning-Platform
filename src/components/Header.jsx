import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header>
      <div className="logo">
        <img id='icon' src="../logo-black.png" alt="Logo" className="logo-image" />
        VidyaSagar
      </div>
      <nav>
        <div className="burger" onClick={toggleNav}>
          <i className="fas fa-bars"></i> {/* FontAwesome Hamburger Icon */}
        </div>
        <ul className={navOpen ? 'show' : ''}>
          <li><Link to="/" onClick={toggleNav}>Home</Link></li>
          <li><Link to="/courses" onClick={toggleNav}>Courses</Link></li>
          <li><Link to="/about" onClick={toggleNav}>About</Link></li>
          <li><Link to="/contact" onClick={toggleNav}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
