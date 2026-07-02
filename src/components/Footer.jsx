export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__brand">PORTFOLIO — {currentYear}</p>
        <nav className="footer__links" aria-label="Social links">
          <a href="https://github.com/martha-ketsela-mengistu" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/martha-ketsela-mengistu/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:marthaket30@gmail.com">Email</a>
        </nav>
        <p className="footer__copyright">
          © {currentYear} Portfolio. Located in Addis Ababa, Ethiopia.
        </p>
      </div>
    </footer>
  );
}
