import { useState } from 'react';
import { Link } from 'react-router-dom';
import sceneImg from '../assets/discovery.jpg';
import ScrollReveal from './ScrollReveal';

// PLACEHOLDER COPY: the client will select the final scene and prompts.
const POINTS = [
  {
    id: 'discover',
    label: 'Discover',
    heading: 'Something to notice',
    text: 'A single drop of water holds a tiny picture of the whole forest around it.',
    promptLabel: 'Noticing question',
    prompt: 'What can you see inside the drop?',
    left: '30%',
    top: '42%',
  },
  {
    id: 'connect',
    label: 'Connect',
    heading: 'A thought to carry',
    text: 'A drop gathers slowly, one small piece at a time. Our choices work in a similar way, quietly adding up to who we become.',
    promptLabel: 'Reflect',
    prompt: 'What small choice could you gather today?',
    left: '70%',
    top: '28%',
  },
  {
    id: 'create',
    label: 'Create',
    heading: 'Make it your own',
    text: 'Children express what they noticed through a drawing, a short note or a kind act they practise during the day.',
    promptLabel: 'Try this',
    prompt: 'Sketch the drop and write one word for what it taught you.',
    left: '68%',
    top: '74%',
  },
];

export default function Discovery() {
  const [active, setActive] = useState('discover'); // Discover is open first
  const current = POINTS.find((p) => p.id === active);

  return (
    <section className="discovery">
      <div className="wrap">
        <ScrollReveal>
          <div className="disc-head">
            <h2>A discovery in Nature. A deeper discovery within.</h2>
            <p>Choose a discovery point and see where it leads.</p>
          </div>
        </ScrollReveal>

        <div className="disc-grid">
          <ScrollReveal>
            <div className="scene-col">
              <div className="scene" data-active={active}>
                <svg viewBox="0 0 520 312" role="img" aria-label="A single drop of water reflecting a green forest">
                  <image href={sceneImg} width="520" height="312" preserveAspectRatio="xMidYMid slice" />

                  {/* Discover: a soft glow and a ring that draw the eye to the drop */}
                  <g className="layer layer-discover">
                    <circle className="dew-glow" cx="257" cy="150" r="70" fill="#F6C75E" opacity="0.3" />
                    <ellipse cx="257" cy="146" rx="46" ry="82" fill="none" stroke="#F6C75E" strokeWidth="2" strokeDasharray="5 6" />
                  </g>

                  {/* Connect: ripples from the drop and a line toward the light */}
                  <g className="layer layer-connect">
                    <circle className="ripple r1" cx="257" cy="146" r="30" fill="none" stroke="#F6C75E" strokeWidth="2" />
                    <circle className="ripple r2" cx="257" cy="146" r="30" fill="none" stroke="#F6C75E" strokeWidth="2" />
                    <path d="M262 84 C300 50 400 40 455 24" stroke="#fff" strokeWidth="2.5" strokeDasharray="4 8" strokeLinecap="round" fill="none" />
                  </g>

                  {/* Create: a small notebook with a drop sketch */}
                  <g className="layer layer-create">
                    <rect x="404" y="206" width="84" height="64" rx="6" fill="#FAF7F0" stroke="#C8963E" strokeWidth="2" />
                    <path d="M446 220 C438 236 434 244 446 252 C458 244 454 236 446 220Z" fill="none" stroke="#1F5A40" strokeWidth="2" />
                    <path d="M418 262h56" stroke="#C8963E" strokeWidth="2" strokeLinecap="round" />
                  </g>
                </svg>

                {/* Clickable points on the scene (desktop) */}
                {POINTS.map((p) => (
                  <button
                    key={p.id}
                    className={`hotspot ${active === p.id ? 'active' : ''}`}
                    style={{ left: p.left, top: p.top }}
                    aria-pressed={active === p.id}
                    onClick={() => setActive(p.id)}
                  >
                    <span className="dot" aria-hidden="true" />
                    {p.label}
                  </button>
                ))}
              </div>

              {/* Large tap buttons beneath the illustration (mobile) */}
              <div className="disc-tabs">
                {POINTS.map((p) => (
                  <button
                    key={p.id}
                    className={`tab ${active === p.id ? 'active' : ''}`}
                    aria-pressed={active === p.id}
                    onClick={() => setActive(p.id)}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="disc-panel" aria-live="polite" key={current.id}>
              <div className="eyebrow">{current.label}</div>
              <h3>{current.heading}</h3>
              <p>{current.text}</p>
              <div className="prompt">
                <div className="prompt-label">{current.promptLabel}</div>
                <p>{current.prompt}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={180}>
          <Link to="/approach" className="more-link">
            More About Discover → Connect → Create
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}