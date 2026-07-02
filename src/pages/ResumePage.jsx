import { Link } from 'react-router-dom';
import Certificates from '../components/Certificates';

export default function ResumePage() {
  return (
    <>
      {/* ── Header ────────────────────────────────────────── */}
      <div className="resume-header">
        <h1>Resume</h1>
        <a
          href="/CV.pdf"
          download
          className="btn btn--outlined"
          aria-label="Download Resume PDF"
        >
          Download PDF
        </a>
      </div>

      {/* ── Summary ───────────────────────────────────────── */}
      <section className="resume-section" aria-labelledby="summary-title">
        <h2 id="summary-title" className="resume-section__title">Summary</h2>
        <p>
          IT professional at Bunna Bank with a background in DevSecOps, identity
          and access management, and AI engineering. I build secure pipelines,
          integrate enterprise systems, and apply machine learning to real-world
          problems. Graduate of 10 Academy's AI Agent Engineering and Kifiya AI
          Mastery programs.
        </p>
      </section>

      {/* ── Technical Skills ──────────────────────────────── */}
      <section className="resume-section" aria-labelledby="skills-title">
        <h2 id="skills-title" className="resume-section__title">Technical Skills</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p><strong>AI &amp; Machine Learning:</strong> LLMs, Agentic Workflows, RAG, XGBoost, Scikit-learn, TensorFlow</p>
          <p><strong>Data Engineering &amp; Platforms:</strong> PostgreSQL, MongoDB, dbt, Dagster, Kafka, Elasticsearch, Tableau</p>
          <p><strong>Security &amp; DevSecOps:</strong> WSO2IS, OAuth, SAML, SonarQube, OWASP ZAP, Docker, GitLab CI/CD</p>
          <p><strong>Software Engineering:</strong> Python, Java (Spring Boot), JavaScript (React), FastAPI</p>
        </div>
      </section>

      {/* ── Experience ────────────────────────────────────── */}
      <section
        className="resume-section"
        id="experience"
        aria-labelledby="experience-title"
      >
        <h2 id="experience-title" className="resume-section__title">Experience</h2>

        {/* Bunna Bank — Current */}
        <div className="exp-item">
          <div className="exp-item__header">
            <h3>Bunna Bank</h3>
            <span className="exp-item__date">June 2026 – Present</span>
          </div>
          <p className="exp-item__role">Digital Connectivity and Platform Officer</p>
          <ul className="exp-item__bullets">
            <li>Integrating applications with third-party services using Spring Boot and Kafka.</li>
            <li>Automating build, Dockerize, test, and push workflows to the container registry via GitLab CI/CD.</li>
          </ul>
        </div>

        {/* Bunna Bank — Security */}
        <div className="exp-item">
          <div className="exp-item__header">
            <h3>Bunna Bank</h3>
            <span className="exp-item__date">April 2024 – June 2026</span>
          </div>
          <p className="exp-item__role">Junior IT Officer — Security &amp; DevSecOps</p>
          <ul className="exp-item__bullets">
            <li>Managed Identity and Access Management using WSO2IS with OAuth and SAML protocols.</li>
            <li>Built and maintained DevSecOps pipelines integrating SonarQube and OWASP ZAP for automated security testing.</li>
            <li>Deployed and configured the Elastic Stack (Filebeat, Logstash, Elasticsearch, Kibana) for centralized log monitoring.</li>
            <li>Conducted user access reviews in Odoo and built compliance dashboards using Grafana and Superset.</li>
          </ul>
        </div>

        {/* InterTecHub */}
        <div className="exp-item">
          <div className="exp-item__header">
            <h3>InterTecHub</h3>
            <span className="exp-item__date">November 2024 – May 2025</span>
          </div>
          <p className="exp-item__role">Data Scientist Intern</p>
          <ul className="exp-item__bullets">
            <li>Built end-to-end data pipeline and Tableau dashboard for e-commerce sales analysis.</li>
            <li>Developed HR attrition predictive model using Logistic Regression, Random Forest, and Decision Tree.</li>
          </ul>
        </div>

        {/* Software Engineer */}
        <div className="exp-item">
          <div className="exp-item__header">
            <h3>Hisense TransTech</h3>
            <span className="exp-item__date">August 2023 – April 2024</span>
          </div>
          <p className="exp-item__role">Software Engineer</p>
          <ul className="exp-item__bullets">
            <li>Supported software implementation, documentation, and ICT knowledge training delivery.</li>
          </ul>
        </div>
      </section>

      {/* ── Education ─────────────────────────────────────── */}
      <section
        className="resume-section"
        id="education"
        aria-labelledby="education-title"
      >
        <h2 id="education-title" className="resume-section__title">Education</h2>

        <div className="edu-item">
          <div className="edu-item__header">
            <h3>10 Academy</h3>
            <span className="edu-item__date">February 2026 – May 2026</span>
          </div>
          <p className="edu-item__detail">
            AI Agent Engineering · AI Evaluation Engineering · Forward Deployed Engineering
          </p>
        </div>

        <div className="edu-item">
          <div className="edu-item__header">
            <h3>10 Academy</h3>
            <span className="edu-item__date">May 2025 – August 2025</span>
          </div>
          <p className="edu-item__detail">
            Kifiya AI Mastery — Machine Learning Engineering · Data Engineering · Financial Analysis
          </p>
        </div>

        <div className="edu-item">
          <div className="edu-item__header">
            <h3>Addis Ababa University</h3>
            <span className="edu-item__date">October 2019 – July 2023</span>
          </div>
          <p className="edu-item__detail">BSc Computer Science</p>
        </div>
      </section>

      {/* ── Certifications ────────────────────────────────── */}
      <section className="resume-section" id="certifications" aria-labelledby="certs-title">
        <h2 id="certs-title" className="resume-section__title">Certifications</h2>
        <Certificates />
      </section>
      
      {/* ── Bottom Back Link ──────────────────────────────── */}
      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <Link to="/" className="btn btn--outlined">← Back to home</Link>
      </div>
    </>
  );
}
