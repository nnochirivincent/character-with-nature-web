import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.jpg';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <section className="hero-banner">
      <div className="hero-top">
        <div className="hero-media">
          <img
            src={heroImage}
            alt="An apple blossom with a honeybee in soft golden light"
            className="hero-img"
            fetchPriority="high"
          />
        </div>

        <div className="wrap">
          <div className="hero-content">
            <ScrollReveal>
              <p className="hero-eyebrow">
                For families, homeschoolers, schools, forest schools and children’s groups
              </p>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1>Nurturing character and spiritual growth through Nature</h1>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="hero-sub">
                Character with Nature<sup>®</sup> is a nature-based character and spiritual
                development programme for children, with guidance for parents and educators.
              </p>
              <p className="hero-lead">
                Through stories, close observation, creative exploration, noticing patterns and
                sensing deeper meaning, Character with Nature<sup>®</sup> invites children to
                explore and discover connections between the visible world and the unseen
                spiritual principles that shape their lives.
              </p>
              <p className="hero-lead">
                Along the way, children reflect on how these principles influence their choices,
                relationships and inner growth—and why living in harmony with them matters.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={140}>
              <div className="hero-actions">
                <Link to="/programmes" className="btn btn-primary">Explore the Programmes</Link>
                <Link to="/approach" className="text-link">Discover Our Approach</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="wrap">
        <ScrollReveal delay={160}>
          <figure className="hero-quote">
            <blockquote>
              Nature in its perfection in accordance with the Laws of Creation is the most
              beautiful gift that God gave His creatures! First thoroughly get to know Nature, …
              and then it will be possible for you to become human beings again…
            </blockquote>
            <figcaption>— Abd-ru-shin</figcaption>
          </figure>
        </ScrollReveal>
      </div>
    </section>
  );
}