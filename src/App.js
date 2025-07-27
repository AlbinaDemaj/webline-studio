import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main page components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SloganSection from "./components/SloganSection";
import Services from "./components/Services";
import SloganBetweenSections from "./components/SloganBetweenSections";
import Projects from "./components/Projects";
import WhyChooseUs from "./components/WhyChooseUs";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Legal pages for AdSense
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";

function App() {
  return (
    <Router>
      {/* SEO meta tags for the homepage */}
      <Helmet>
        <title>Webline Studio | Custom Websites That Perform & Impress</title>
        <meta
          name="description"
          content="Webline Studio builds modern, fast, and SEO-optimized websites for all types of businesses. We create personalized digital experiences for your customers."
        />
        <meta
          name="keywords"
          content="Webline Studio, Web Development, React Websites, Tailwind CSS, SEO Optimization, UI/UX Design, Custom Web Design"
        />
        <meta property="og:title" content="Webline Studio" />
        <meta
          property="og:description"
          content="Custom web solutions that perform and impress. Build your digital presence with Webline Studio."
        />
        <meta property="og:image" content="/preview-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://webline-studio.com/" />
      </Helmet>

      {/* Global navigation bar */}
      <Navbar />

      {/* Website routes */}
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <SloganSection />
              <Services />
              <SloganBetweenSections />
              <Projects />
              <WhyChooseUs />
              <Blog />
              <Contact />
            </>
          }
        />

        {/* Legal pages required for AdSense */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>

      {/* Global footer */}
      <Footer />
    </Router>
  );
}

export default App;
