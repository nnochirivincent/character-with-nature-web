import { useRef } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const GROUPS = [
  {
    label: 'For children',
    caption: 'Ways to discover and reflect',
    items: ['Stories', 'Videos', 'Exploration materials', 'Creative activities'],
  },
  {
    label: 'For adults',
    caption: 'Support to prepare and guide',
    items: ['Background explanations', 'Preparation notes', 'Reflection prompts'],
  },
];

export default function Resources() {
  const ref = useRef(null);

  // A soft golden light follows the cursor across the band.
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <section className="guidance" aria-labelledby="guidance-title" ref={ref} onMouseMove={onMove}>
      <div className="wrap guide-layout">
        <ScrollReveal>
          <div className="guide-copy">
            <header className="section-head">
              <h2 id="guidance-title">Meaningful experiences, with guidance alongside</h2>
              <p>
                Stories, short videos, nature explorations and creative activities give children
                different ways to discover and reflect. Guidance helps adults prepare, ask
                thoughtful questions and make space for children’s own understanding.
              </p>
            </header>
            <Link to="/guidance" className="btn btn-gold">
              Explore Parent &amp; Educator Guidance
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="idx">
            {GROUPS.map((g) => (
              <div className="idx-col" key={g.label}>
                <h3 className="idx-label">{g.label}</h3>
                <p className="idx-sub">{g.caption}</p>
                <ul className="idx-list">
                  {g.items.map((item, i) => (
                    <li key={item}>
                      <span className="idx-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                      <span className="idx-title">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}