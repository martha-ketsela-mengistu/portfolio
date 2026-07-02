import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import Certificates from '../components/Certificates';
import projects from '../data/projects.json';

export default function LandingPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="hero" aria-labelledby="hero-title">
        <h1 id="hero-title" className="hero__title">
          Forward Deployed Engineer &amp; Agentic AI Engineer
        </h1>
        <p className="hero__subtitle">
          I design and build agentic systems, data platforms, and API
          infrastructure that make AI work in production.
        </p>
      </section>

      {/* ── Capabilities ──────────────────────────────────── */}
      <section className="section" aria-labelledby="capabilities-title">
        <h2 id="capabilities-title" className="section__heading">What I Build</h2>
        <div className="capabilities">
          <p>
            <span className="capability__label">Multi-agent systems</span> —{' '}
            Orchestrating complex LLM workflows with deterministic reliability
            and memory management.
          </p>
          <p>
            <span className="capability__label">Data platforms</span> —{' '}
            Designing scalable ingestion pipelines and vector store architectures
            for high-performance retrieval.
          </p>
          <p>
            <span className="capability__label">API &amp; Infrastructure</span> —{' '}
            Engineering robust backends that bridge advanced research models with
            enterprise-grade production environments.
          </p>
        </div>
      </section>

      {/* ── Projects ──────────────────────────────────────── */}
      <section className="section" id="projects" aria-labelledby="projects-title">
        <h2 id="projects-title" className="section__heading">Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      {/* ── Certifications ────────────────────────────────── */}
      <section className="section" id="certificates" aria-labelledby="certs-title">
        <h2 id="certs-title" className="section__heading">Certifications</h2>
        <Certificates />
      </section>

      {/* ── Resume Link ───────────────────────────────────── */}
      <div className="resume-link">
        <Link to="/resume" className="btn btn--outlined">View full resume →</Link>
      </div>

      {/* ── Contact ───────────────────────────────────────── */}
      <section className="section" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title" className="section__heading">Let's build something</h2>
        <p style={{ marginBottom: '2rem', color: '#555' }}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
          Fill out the form below or email me directly at <a href="mailto:marthaket30@gmail.com">marthaket30@gmail.com</a>.
        </p>
        <form
          name="contact"
          method="POST"
          action="/thanks"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="form"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Do not fill this out:{' '}
              <input name="bot-field" />
            </label>
          </p>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="form-input"
              autoComplete="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="form-input"
              autoComplete="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="form-textarea"
            />
          </div>
          <div>
            <button type="submit" className="btn btn--outlined">
              Send message
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
