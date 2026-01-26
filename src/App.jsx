import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./components/Footer";
import TermsConditions from "./components/Term";
import Home from "./page/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import GDPRBanner from "./components/GDPRBanner";
import Service from "./page/Service";
import ScrollToHash from "../src/components/ScrollToHash"
function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Router>
       <ScrollToHash />
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/service" element={<Service />} />
      </Routes>

      <Footer />
      <GDPRBanner />
    </Router>
  );
}

export default App;
