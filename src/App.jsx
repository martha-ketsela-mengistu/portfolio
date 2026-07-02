import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import ResumePage from './pages/ResumePage';
import ThankYouPage from './pages/ThankYouPage';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/thanks" element={<ThankYouPage />} />
        </Routes>
      </Layout>
    </>
  );
}
