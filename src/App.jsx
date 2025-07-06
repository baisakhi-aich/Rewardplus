import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Price from './Component/Price/Price';
import Home from './Component/Home/Home';
import Steps from './Component/Steps/Steps';
import Vdopage from './Component/Vdopage/Vdopage';
import Download from './Component/Download/Download';
import PrivacyPolicy from './Component/PrivacyPolicy/PrivacyPolicy';
import Contact from './Component/Footer/Contact/Contact';
import Terms from './Component/Footer/Terms/Terms';
import Whyreward from './Component/Whyreward/Whyreward';
import AboutUs from './Component/About/About';

const AppContent = () => {
  const location = useLocation();

  // Define routes where Header/Footer should NOT appear
  const noHeaderFooterPaths = ['/contact'];

  const hideHeaderFooter = noHeaderFooterPaths.includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Whyreward/>
              <Steps />
              <Vdopage />
              <Price />
            </>
          }
        />
        <Route path="/download" element={<Download />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<Terms />} />
        <Route path="/about" element={<AboutUs/>} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
