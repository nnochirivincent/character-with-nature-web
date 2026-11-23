import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const PROGRAMMES = [
  {
    range: '3–5',
    path: '/programmes/ages-3-5',
    copy: 'Notice, wonder and discover through stories, play and simple hands-on experiences.',
    status: 'In development',
    pilot: false,
  },
  {
    range: '6–8',
    path: '/programmes/ages-6-8',
    copy: 'Explore patterns in Nature and connect them to everyday choices and relationships.',
    status: 'In development',
    pilot: false,
  },
  {
    range: '9–12',
    path: '/programmes/ages-9-12',
    copy: 'Reflect more deeply on thoughts, habits, responsibility and the person we are becoming.',
    status: 'First pilot',
    pilot: true,
  },
];

export default function AgePathways() {
  return (
    <section className="pathways" aria-labelledby="pathways-title">
      <div className="wrap">
        <ScrollReveal>
          <header className="pathways-head">
            <h2 id="pathways-title">Growing with your child</h2>
            <p>
              From early wonder to deeper reflection, CWN offers experiences that develop with
              children’s understanding.
            </p>
          </header>
        </ScrollReveal>

        <ul className="age-grid">
          {PROGRAMMES.map(({ range, path, copy, status, pilot }, index) => (
            <li key={path}>
              <ScrollReveal delay={index * 110}>
                <Link to={path} className={`age-card${pilot ? ' is-pilot' : ''}`}>
                  <span className="age-label">Ages</span>
                  <span className="age-range">{range}</span>
                  <span className="age-copy">{copy}</span>
                  <span className="age-footer">
                    <span className={`status${pilot ? ' status-pilot' : ''}`}>{status}</span>
                    <span className="age-cta">
                      View programme <span aria-hidden="true">→</span>
                    </span>
                  </span>
                </Link>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}