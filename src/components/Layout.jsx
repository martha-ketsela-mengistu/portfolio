import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';

export default function Layout({ children }) {
  const location = useLocation();
  const isResume = location.pathname === '/resume';

  // Function to handle smooth scrolling on the Landing Page
  const handleScroll = (e, targetId) => {
    if (location.pathname !== '/') return; // Only prevent default if on home page
    
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="layout">
      {/* Global Banner */}
      <div className="layout__banner">
        <img 
          src="/banner.png" 
          alt="Martha Ketsela Mengistu - Forward Deployed Engineer & AI Agentic Engineer" 
          className="layout__banner-image"
        />
      </div>

      {/* Global Navigation */}
      <nav className="layout__nav">
        <div className="layout__nav-inner">
          <div className="layout__nav-left">
            {isResume ? (
              <Link to="/" className="nav-link">← Back</Link>
            ) : (
              <span className="nav-brand">Martha Ketsela Mengistu</span>
            )}
          </div>

          <div className="layout__nav-center">
            <a href="mailto:marthaket30@gmail.com" className="nav-icon-link" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            <a href="https://github.com/martha-ketsela-mengistu" target="_blank" rel="noopener noreferrer" className="nav-icon-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/martha-ketsela-mengistu/" target="_blank" rel="noopener noreferrer" className="nav-icon-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
          
          <div className="layout__nav-right">
            {isResume ? (
              <>
                <a href="#experience" className="nav-link">Experience</a>
                <a href="#education" className="nav-link">Education</a>
                <a href="#certifications" className="nav-link">Certificates</a>
              </>
            ) : (
              <>
                <Link to="/#projects" className="nav-link" onClick={(e) => handleScroll(e, 'projects')}>Projects</Link>
                <Link to="/resume" className="nav-link">Resume</Link>
                <Link to="/#contact" className="nav-link" onClick={(e) => handleScroll(e, 'contact')}>Contact</Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Background & Content Wrapper */}
      <div className="layout__body">
        <div className="layout__content-wrapper">
          <main className="layout__main">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
