import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const LAWS = [
  {
    id: 'cause-and-effect',
    title: 'Cause & Effect',
    reveal: 'What follows from the thoughts, words and actions we put into the world?',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <circle cx="32" cy="32" r="5" fill="currentColor" stroke="none" />
        <circle cx="32" cy="32" r="14" />
        <circle cx="32" cy="32" r="25" opacity=".55" />
      </svg>
    ),
  },
  {
    id: 'attraction',
    title: 'Attraction',
    reveal: 'What are we nurturing within ourselves, and what does it encourage around us?',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
        <circle cx="32" cy="32" r="7" fill="currentColor" stroke="none" />
        <path d="M8 8l14 14M56 8L42 22M8 56l14-14M56 56L42 42" strokeDasharray="1 7" />
        <circle cx="8" cy="8" r="3" /><circle cx="56" cy="8" r="3" />
        <circle cx="8" cy="56" r="3" /><circle cx="56" cy="56" r="3" />
      </svg>
    ),
  },
  {
    id: 'gravity',
    title: 'Gravity',
    reveal: 'What do we carry within, and how does it influence our direction?',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
        <path d="M6 54C20 40 44 40 58 54" />
        <circle cx="32" cy="14" r="6" fill="currentColor" stroke="none" />
        <path d="M32 26v14" strokeDasharray="1 6" />
      </svg>
    ),
  },
  {
    id: 'balance',
    title: 'Balance',
    reveal: 'How can giving and receiving remain in a living rhythm?',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 22h44M32 12v40M22 52h20" />
        <path d="M10 22l-6 14h12zM54 22l-6 14h12z" />
      </svg>
    ),
  },
];

export default function FourLaws() {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <section className="laws" aria-labelledby="laws-title">
      <div className="wrap">
        <ScrollReveal>
          <header className="section-head">
            <h2 id="laws-title">Four Laws. Everyday discoveries.</h2>
            <p>
              CWN explores four Laws as a spiritual framework for reflecting on how we live,
              choose and grow.
            </p>
          </header>
        </ScrollReveal>

        <ul className="law-grid">
          {LAWS.map(({ id, title, reveal, icon }, index) => {
            const open = openId === id;
            return (
              <li key={id} className={`law${open ? ' open' : ''}`}>
                <ScrollReveal delay={index * 100}>
                  <button
                    id={`${id}-btn`}
                    className="law-trigger"
                    aria-expanded={open}
                    aria-controls={`${id}-panel`}
                    onClick={() => toggle(id)}
                  >
                    <span className="law-icon">{icon}</span>
                    <span className="law-row">
                      <span className="law-title">{title}</span>
                      <span className="law-toggle" aria-hidden="true">+</span>
                    </span>
                  </button>

                  {open && (
                    <div
                      id={`${id}-panel`}
                      className="law-reveal"
                      role="region"
                      aria-labelledby={`${id}-btn`}
                    >
                      <p>{reveal}</p>
                      <Link to={`/approach#${id}`} className="law-link">
                        Explore This Law →
                      </Link>
                    </div>
                  )}
                </ScrollReveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}