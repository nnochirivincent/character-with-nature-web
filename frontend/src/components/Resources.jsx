import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const ICONS = {
  stories: <path d="M4 5h6a2 2 0 012 2v12a2 2 0 00-2-2H4zM20 5h-6a2 2 0 00-2 2v12a2 2 0 012-2h6z" />,
  videos: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M10 9l5 3-5 3z" />
    </>
  ),
  exploration: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M16 16l5 5" />
    </>
  ),
  creative: <path d="M4 20l1-4L16 5l3 3L8 19zM14 7l3 3" />,
  background: <path d="M7 3h8l4 4v14H7zM15 3v4h4M10 12h6M10 16h6" />,
  preparation: <path d="M5 7l2 2 3-3M5 15l2 2 3-3M13 8h7M13 16h7" />,
  reflection: <path d="M4 5h16v11H10l-4 4v-4H4z" />,
};

const CHILDREN = [
  { title: 'Stories', icon: 'stories' },
  { title: 'Videos', icon: 'videos' },
  { title: 'Exploration materials', icon: 'exploration' },
  { title: 'Creative activities', icon: 'creative' },
];

const ADULTS = [
  { title: 'Background explanations', icon: 'background' },
  { title: 'Preparation notes', icon: 'preparation' },
  { title: 'Reflection prompts', icon: 'reflection' },
];

function Row({ title, icon, number }) {
  return (
    <li className="res">
      <span className="res-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          {ICONS[icon]}
        </svg>
      </span>
      <span className="res-title">{title}</span>
      <span className="res-num" aria-hidden="true">{String(number).padStart(2, '0')}</span>
    </li>
  );
}

export default function Resources() {
  return (
    <section className="guidance" aria-labelledby="guidance-title">
      <div className="wrap">
        <ScrollReveal>
          <header className="section-head">
            <h2 id="guidance-title">Meaningful experiences, with guidance alongside</h2>
            <p>
              Stories, short videos, nature explorations and creative activities give children
              different ways to discover and reflect. Guidance helps adults prepare, ask thoughtful
              questions and make space for children’s own understanding.
            </p>
          </header>
        </ScrollReveal>

        <div className="guide-grid">
          <ScrollReveal>
            <div className="guide-panel is-dark">
              <div className="eyebrow">For children</div>
              <h3>Ways to discover and reflect</h3>
              <ul className="res-list">
                {CHILDREN.map((item, i) => (
                  <Row key={item.title} {...item} number={i + 1} />
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="guide-panel">
              <div className="eyebrow">For adults</div>
              <h3>Support to prepare and guide</h3>
              <ul className="res-list">
                {ADULTS.map((item, i) => (
                  <Row key={item.title} {...item} number={i + 1} />
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={180}>
          <div className="guide-cta">
            <Link to="/guidance" className="btn btn-primary">
              Explore Parent &amp; Educator Guidance
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}