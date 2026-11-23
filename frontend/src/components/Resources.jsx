import { useState } from 'react';
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

const TABS = {
  children: {
    label: 'For children',
    caption: 'Ways to discover and reflect',
    items: [
      { title: 'Stories', icon: 'stories' },
      { title: 'Videos', icon: 'videos' },
      { title: 'Exploration materials', icon: 'exploration' },
      { title: 'Creative activities', icon: 'creative' },
    ],
  },
  adults: {
    label: 'For adults',
    caption: 'Support to prepare and guide',
    items: [
      { title: 'Background explanations', icon: 'background' },
      { title: 'Preparation notes', icon: 'preparation' },
      { title: 'Reflection prompts', icon: 'reflection' },
    ],
  },
};

export default function Resources() {
  const [tab, setTab] = useState('children');
  const current = TABS[tab];

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      setTab(tab === 'children' ? 'adults' : 'children');
    }
  };

  return (
    <section className="guidance" aria-labelledby="guidance-title">
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
            <Link to="/guidance" className="btn btn-primary">
              Explore Parent &amp; Educator Guidance
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="guide-card">
            <div className="seg" data-tab={tab} role="tablist" aria-label="Resources" onKeyDown={onKeyDown}>
              <span className="seg-ind" aria-hidden="true" />
              {Object.entries(TABS).map(([id, t]) => (
                <button
                  key={id}
                  id={`tab-${id}`}
                  role="tab"
                  aria-selected={tab === id}
                  aria-controls="guide-panel"
                  tabIndex={tab === id ? 0 : -1}
                  className={`seg-btn${tab === id ? ' on' : ''}`}
                  onClick={() => setTab(id)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div id="guide-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} key={tab}>
              <p className="guide-caption">{current.caption}</p>
              <ul className={`guide-items${current.items.length === 3 ? ' is-3' : ''}`}>
                {current.items.map((item, i) => (
                  <li key={item.title} className="gitem" style={{ '--i': i }}>
                    <span className="gicon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        {ICONS[item.icon]}
                      </svg>
                    </span>
                    <span className="gtitle">{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}