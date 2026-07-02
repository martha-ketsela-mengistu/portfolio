import { Link } from 'react-router-dom';

export default function ThankYouPage() {
  return (
    <div className="thanks-content">
      <h1>Thanks for reaching out.</h1>
      <p>
        I'll get back to you within 48 hours. In the meantime, you can also
        reach me directly by <a href="mailto:marthaket30@gmail.com">email</a>.
      </p>
      <Link to="/" className="btn btn--primary" style={{ marginTop: '1rem' }}>
        Return to Dashboard
      </Link>
    </div>
  );
}
