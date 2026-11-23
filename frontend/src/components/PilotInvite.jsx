import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function PilotInvite() {
  return (
    <section className="pilot" aria-labelledby="pilot-title">
      <div className="wrap">
        <div className="pilot-band">
          <ScrollReveal>
            <div>
              <div className="eyebrow pilot-eyebrow">First pilot: ages 9–12</div>
              <h2 id="pilot-title">Help shape Character with Nature®</h2>
              <p>
                Our first pilot will focus on ages 9–12. We welcome interest from parents and
                educators who would like to explore the programme with children and share practical
                feedback.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="pilot-action">
              <Link to="/pilot" className="btn btn-gold">Find Out About the Pilot</Link>
              <p className="pilot-note">
                Accepted participants return through Pilot Access in the header.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}