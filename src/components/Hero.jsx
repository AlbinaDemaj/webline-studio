import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import GetQuoteModal from "./GetQuoteModal";

const keywords = [
  "Custom Web Design",
  "Responsive Layouts",
  "UI/UX Prototyping",
  "SEO Optimization",
  "Website Maintenance",
  "Fast Hosting",
  "E-Commerce Solutions",
  "Performance Audit",
];

function Hero() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 bg-gradient-to-br from-[#5ce1e6] via-white to-[#277df1] overflow-hidden text-center"
    >
      {/* SEO Meta Tags për këtë seksion */}
      <Helmet>
        <title>Webline Studio | Creative Web Design & SEO Agency</title>
        <meta
          name="description"
          content="We create modern, SEO-optimized websites that impress and perform. Work with Webline Studio to elevate your online presence today!"
        />
        <meta
          name="keywords"
          content="Web Design, SEO Optimization, Responsive Websites, Webline Studio, React Web Developer, Tailwind CSS, UI UX Design"
        />
        <meta property="og:title" content="Webline Studio" />
        <meta
          property="og:description"
          content="Build your brand online with custom websites, SEO services, and UI/UX design. Work with Webline Studio."
        />
        <meta property="og:image" content="/preview-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webline-studio.com/" />
      </Helmet>

      {/* TITULLI KRYESOR */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-darkblue leading-tight max-w-3xl"
      >
        We Build{" "}
        <span className="text-primary">Web Experiences</span> That Perform & Impress
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg text-gray-700 max-w-2xl mt-6"
      >
        Webline Studio is your creative partner for professional websites, SEO,
        and seamless user experiences. Let us bring your brand to life.
      </motion.p>

      <motion.button
        onClick={() => setIsQuoteOpen(true)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-8 inline-block px-6 py-3 bg-primary hover:bg-darkblue text-white rounded-full font-medium shadow-md transition duration-300"
      >
        Let’s Work Together 🚀
      </motion.button>

      {/* SLIDER ME TAG KEYWORDS */}
      <div className="absolute bottom-10 w-full overflow-hidden">
        <div className="flex animate-slide whitespace-nowrap text-darkblue font-semibold text-sm gap-8 px-10">
          {[...keywords, ...keywords].map((word, i) => (
            <span
              key={i}
              className="bg-white/60 px-4 py-2 rounded-full shadow-md backdrop-blur-md border border-white/40"
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* ANIMACIONI I SLIDERIT */}
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-slide {
            animation: slide 30s linear infinite;
          }
        `}
      </style>

      {/* MODALI */}
      <GetQuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </section>
  );
}

export default Hero;
