import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link to="/" className="logo-link" onClick={close} aria-label="Character with Nature, home">
          <img src={logo} alt="" className="logo-img" />
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
          <Link to="/login" className="btn btn-primary btn-sm" onClick={close}>Log In</Link>
        </nav>
      </div>
    </header>
  );
}