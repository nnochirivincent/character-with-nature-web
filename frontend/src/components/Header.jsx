import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link to="/" className="brand" onClick={close} aria-label="Character with Nature, home">
          <img src={logo} alt="" className="brand-mark" />
          <span className="brand-divider" aria-hidden="true" />
          <span className="brand-name">
            Character with Nature<sup>®</sup>
          </span>
        </Link>

        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <NavLink to="/programmes" onClick={close}>Programmes</NavLink>
          <NavLink to="/approach" onClick={close}>Our Approach</NavLink>
          <NavLink to="/pilot-access" onClick={close}>Pilot Access</NavLink>
          <NavLink to="/login" onClick={close}>Log In</NavLink>
        </nav>
      </div>
    </header>
  );
}