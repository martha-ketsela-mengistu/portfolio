import { useState } from 'react';

const certificateData = [
  {
    id: '10academy',
    title: '10 Academy TRP Program',
    description: 'AI Agent Engineering · AI Evaluation Engineering · Forward Deployed Engineering',
    type: 'pdf',
    file: '/certificates/10_Academy.pdf',
  },
  {
    id: 'kifiya',
    title: 'Kifiya AI Mastery',
    description: 'Machine Learning Engineering · Data Engineering · Financial Analysis',
    type: 'pdf',
    file: '/certificates/Kifiya.pdf',
  },
  {
    id: 'gebeya',
    title: 'Safaricom Talent Cloud Capstone',
    description: 'Gebeya — MediMap Project',
    type: 'image',
    file: '/certificates/Gebeya.png',
  },
];

export default function Certificates() {
  const [expandedId, setExpandedId] = useState(null);

  const toggle = (id) => setExpandedId(prev => (prev === id ? null : id));

  return (
    <div className="certificates-container">
      <div className="certificates-grid">
        {certificateData.map(cert => {
          const isOpen = expandedId === cert.id;
          return (
            <div key={cert.id} className={`certificate-card ${isOpen ? 'certificate-card--open' : ''}`}>
              {/* Card Header — always visible, click to toggle */}
              <button
                className="certificate-card__header"
                onClick={() => toggle(cert.id)}
                aria-expanded={isOpen}
              >
                <div className="certificate-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div className="certificate-card__text">
                  <h3 className="certificate-card__title">{cert.title}</h3>
                  <p className="certificate-card__desc">{cert.description}</p>
                </div>
                <span className={`certificate-card__arrow ${isOpen ? 'certificate-card__arrow--up' : ''}`}>
                  ▾
                </span>
              </button>

              {/* Inline Viewer — expands below when open */}
              {isOpen && (
                <div className="certificate-viewer">
                  {cert.type === 'pdf' ? (
                    <object
                      data={cert.file}
                      type="application/pdf"
                      className="certificate-viewer__pdf"
                      aria-label={cert.title}
                    >
                      <p style={{ padding: '1rem' }}>
                        Your browser doesn't support inline PDFs.{' '}
                        <a href={cert.file} target="_blank" rel="noopener noreferrer">
                          Click here to open it.
                        </a>
                      </p>
                    </object>
                  ) : (
                    <img
                      src={cert.file}
                      alt={cert.title}
                      className="certificate-viewer__img"
                    />
                  )}
                  <div className="certificate-viewer__actions">
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outlined"
                      style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                    >
                      Open in new tab ↗
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
