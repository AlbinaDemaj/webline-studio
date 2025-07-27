import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import GetQuoteModal from "./GetQuoteModal"; // adjust path if needed

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -40% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleNavigation = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white/10"
        } backdrop-blur-lg`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-[#1743c0] to-[#277df1] text-transparent bg-clip-text"
          >
            Webline Studio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`relative group text-gray-800 transition duration-300 ${
                  activeSection === item.id ? "text-[#277df1] font-semibold" : "hover:text-[#277df1]"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#277df1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    activeSection === item.id ? "scale-x-100" : ""
                  }`}
                ></span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="relative inline-block px-6 py-2 text-white font-medium rounded-full transition overflow-hidden bg-[#277df1] hover:bg-[#1743c0]"
            >
              <span className="relative z-10">Get a Quote →</span>
              <span className="absolute inset-0 bg-white opacity-10 blur-md rounded-full animate-pulse"></span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className={`md:hidden text-2xl text-[#1743c0] transition-transform duration-300 ${
              menuOpen ? "rotate-90" : ""
            }`}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white px-6 py-4 shadow-md transition-all duration-300">
            <nav className="flex flex-col gap-4 text-sm font-medium">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    handleNavigation(item.id);
                    setMenuOpen(false);
                  }}
                  className={`transition text-left ${
                    activeSection === item.id
                      ? "text-[#277df1] font-semibold"
                      : "text-gray-700 hover:text-[#277df1]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsQuoteOpen(true);
                  setMenuOpen(false);
                }}
                className="bg-[#277df1] hover:bg-[#1743c0] text-white px-4 py-2 rounded-full text-center transition"
              >
                Get a Quote
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Modal */}
      <GetQuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}

export default Navbar;
