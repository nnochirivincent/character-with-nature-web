import { useState } from 'react';
import { Link } from 'react-router-dom';
import sunflower from '../assets/sunflower.jpg'; // if your file is a .png, change this to sunflower.png
import ScrollReveal from './ScrollReveal';

// left/top place each label around the picture (percentages of the picture).
const STAGES = [
  {
    id: 'discover',
    label: 'Discover',
    heading: 'One becomes many.',
    body:
      'A single seed went into the soil. Look closely at the centre: hundreds of the exact sunflower seeds have grown. In nature every harvest multiples what was originally planted.',
    left: '18%',
    top: '41%',
  },
  {
    id: 'connect',
    label: 'Connect',
    heading: 'The unseen law of sowing.',
    body:
      'Just as the earth multiplies a physical seed, human life responds to the quiet seeds of our thoughts, words, and actions. What we release into the world bears fruit according to its own nature—and returns multiplied.',
    left: '85%',
    top: '14%',
  },
  {
    id: 'create',
    label: 'Create',
    heading: 'What will you sow?',
    body:
      'Unlike a seed, you get to choose what you plant. Think of one moment you will face today: if your response were to return to you a hundredfold, what would you choose to bring to it?',
    left: '83%',
    top: '77%',
  },
];

export default function Discovery() {
  const [active, setActive] = useState('discover'); // Discover is shown first
  const current = STAGES.find((s) => s.id === active);

  return (
    <section className="sun" aria-labelledby="sun-title">
      <div className="wrap">
        <ScrollReveal>
          <header className="sun-head">
            <h2 id="sun-title">A discovery in Nature. A deeper discovery within.</h2>
            <p className="sun-intro">
              Look closer. What might the visible world help children discover about the
              unseen—and how it shapes their lives?
            </p>
            <p className="sun-explain">
              See how children discover a pattern in Nature, connect it to their inner lives,
              and explore how to live in harmony with the principle it reveals.
            </p>
            <p className="sun-instruction">
              Pause and notice. Choose a discovery point and see where it leads.
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="sun-grid">
            {/* Mobile: three clear tap buttons above the picture */}
            <div className="sun-tabs" role="group" aria-label="Discovery points">
              {STAGES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={`sun-tab${active === s.id ? ' on' : ''}`}
                  aria-pressed={active === s.id}
                  onClick={() => setActive(s.id)}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <div className="sun-visual" data-stage={active}>
              <div className="sun-stage">
                <img
                  src={sunflower}
                  alt="A sunflower in bloom beside a single sunflower seed resting on soil"
                  className="sun-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Magnifier and marker (Discover only) */}
              <svg className="sun-line" viewBox="0 0 100 64.52" preserveAspectRatio="none" aria-hidden="true">
                <circle cx="45.6" cy="31.8" r="1.6" fill="none" stroke="currentColor" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
                <line x1="47.2" y1="31" x2="54.2" y2="27.6" stroke="currentColor" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
              </svg>
              <div
                className="sun-lens"
                style={{ backgroundImage: `url(${sunflower})` }}
                aria-hidden="true"
              />

              {/* Desktop: labels around the picture */}
              {STAGES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={`sun-pill${active === s.id ? ' on' : ''}`}
                  style={{ left: s.left, top: s.top }}
                  aria-pressed={active === s.id}
                  onClick={() => setActive(s.id)}
                >
                  <span className="sun-dot" aria-hidden="true" />
                  {s.label}
                </button>
              ))}
            </div>

            <div className="sun-panel" aria-live="polite">
              <div key={active} className="sun-panel-inner">
                <div className="sun-kicker">{current.label}</div>
                <h3>{current.heading}</h3>
                <p>{current.body}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <p className="sun-more">
          <Link to="/approach">More About Discover → Connect → Create</Link>
        </p>
      </div>
    </section>
  );
}