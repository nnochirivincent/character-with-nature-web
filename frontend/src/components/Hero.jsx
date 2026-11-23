import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.jpg';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <section className="hero-banner">
      <div className="wrap hero-split">
        <div className="hero-content">
          <ScrollReveal>
            <h1>Nurturing character and spiritual growth through Nature</h1>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <p className="hero-lead">
              Through stories, nature explorations and guided reflection, children discover
              patterns in the natural world and explore what those discoveries can teach them
              about their choices, relationships and inner lives.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={220}>
            <div className="btn-row">
              <Link to="/programmes" className="btn btn-primary">Explore the Programmes</Link>
              <Link to="/approach" className="btn btn-ghost">Discover Our Approach</Link>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={160}>
          <div className="hero-media">
            <img
              src={heroImage}
              alt="Sunlight streaming through a green forest"
              className="hero-img"
              fetchpriority="high"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}