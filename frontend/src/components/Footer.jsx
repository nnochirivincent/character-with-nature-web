import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <div className="logo logo-light">Character with Nature<sup>®</sup></div>
          <p>
            A programme from{' '}
            <a href="https://www.magnifyingchildrenshorizons.com" target="_blank" rel="noreferrer">
              Magnifying Children’s Horizons
            </a>
          </p>
        </div>
        <nav className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/guidance">Parent &amp; Educator Guidance</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
        </nav>
      </div>
    </footer>
  );
}