import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] via-[#101828] to-[#0f172a] text-white pt-20 px-6 pb-10 relative overflow-hidden">
      {/* SEO Helmet Tags */}
      <Helmet>
        <title>Webline Studio | Creative Web Solutions Agency</title>
        <meta
          name="description"
          content="Webline Studio is a creative web design and development agency offering fast, responsive websites, SEO services, and full-stack solutions for modern brands."
        />
        <meta property="og:title" content="Webline Studio – Full-Stack Web Agency" />
        <meta
          property="og:description"
          content="Explore our services, portfolio, and get in touch with Webline Studio – your partner in digital growth."
        />
        <meta property="og:image" content="/preview-image.jpg" />
        <link rel="canonical" href="https://webline-studio.com/" />
      </Helmet>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-700 pb-10">
        {/* Logo & Brand */}
        <div>
          <img src={logo} alt="Webline Studio logo" className="w-36 mb-4" />
          <p className="text-gray-400 text-sm leading-relaxed">
            At Webline Studio, we craft digital experiences that are fast, modern, and tailored for success.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#about" className="hover:text-primary transition">About</a></li>
            <li><a href="#services" className="hover:text-primary transition">Services</a></li>
            <li><a href="#projects" className="hover:text-primary transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
            <li><Link to="/privacy-policy" className="hover:text-primary transition">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-primary transition">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Contact</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Email: <a href="mailto:weblinestudio@hotmail.com" className="hover:text-primary">weblinestudio@hotmail.com</a></li>
            <li>Phone: <a href="tel:+38349119008" className="hover:text-primary">+383 49 119 008</a></li>
            <li>Location: Prizren, Kosovo</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/webline.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/80 hover:bg-primary p-2 rounded-full transition transform hover:scale-110 shadow-md"
            >
              <FaInstagram className="text-xl text-white" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61578304891972"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/80 hover:bg-primary p-2 rounded-full transition transform hover:scale-110 shadow-md"
            >
              <FaFacebookF className="text-xl text-white" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/80 hover:bg-primary p-2 rounded-full transition transform hover:scale-110 shadow-md"
            >
              <FaLinkedinIn className="text-xl text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <p className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Webline Studio. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
