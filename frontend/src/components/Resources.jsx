import { Link } from 'react-router-dom';
import storiesImg from '../assets/stories.jpg';
import videosImg from '../assets/videos.jpg';
import explorationImg from '../assets/exploration.jpg';
import creativeImg from '../assets/creative.jpg';
import backgroundImg from '../assets/background.jpg';
import preparationImg from '../assets/preparation.jpg';
import reflectionImg from '../assets/reflection.jpg';

import ScrollReveal from './ScrollReveal';

const CHILDREN = [
  { title: 'Stories', image: storiesImg },
  { title: 'Videos', kind: 'video', image: videosImg },
  { title: 'Exploration materials', image: explorationImg },
  { title: 'Creative activities', image: creativeImg },
];

const ADULTS = [
  { title: 'Background explanations', image: backgroundImg },
  { title: 'Preparation notes', image: preparationImg },
  { title: 'Reflection prompts', image: reflectionImg },
];

// Previews fall back to the placeholder if an item has no image.
function Preview({ title, kind, image, tone }) {
  return (
    <li className="preview">
      <div className={`thumb ${tone}${image ? ' has-img' : ''}`} aria-hidden="true">
        {image && <img src={image} alt="" className="thumb-img" />}
        {kind === 'video' ? (
          <span className={`play${image ? ' play-over' : ''}`}>▶</span>
        ) : (
          !image && (
            <>
              <i /><i /><i />
            </>
          )
        )}
      </div>
      <span className="cap">{title}</span>
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
            <div className="guide-panel">
              <div className="eyebrow">For children</div>
              <h3>Ways to discover and reflect</h3>
              <ul className="preview-grid">
                {CHILDREN.map((item) => (
                  <Preview key={item.title} {...item} tone="tone-sage" />
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="guide-panel">
              <div className="eyebrow">For adults</div>
              <h3>Support to prepare and guide</h3>
              <ul className="preview-grid">
                {ADULTS.map((item) => (
                  <Preview key={item.title} {...item} tone="tone-gold" />
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