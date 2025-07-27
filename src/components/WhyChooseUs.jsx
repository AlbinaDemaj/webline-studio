import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaRocket,
  FaMobileAlt,
  FaCode,
  FaSearch,
  FaHandshake,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaCheckCircle className="text-primary text-3xl mb-4" />,
    title: "Custom Solutions",
    description:
      "Tailored websites that align perfectly with your brand and business goals.",
  },
  {
    icon: <FaMobileAlt className="text-primary text-3xl mb-4" />,
    title: "Fast & Responsive",
    description:
      "Blazing speed and flawless responsiveness across all devices.",
  },
  {
    icon: <FaCode className="text-primary text-3xl mb-4" />,
    title: "Modern Tech",
    description:
      "Built with React, Tailwind, Node.js — future-proof technology stack.",
  },
  {
    icon: <FaRocket className="text-primary text-3xl mb-4" />,
    title: "Continuous Support",
    description:
      "Long-term maintenance, performance tuning, and upgrades included.",
  },
  {
    icon: <FaSearch className="text-primary text-3xl mb-4" />,
    title: "SEO-Ready",
    description:
      "Optimized to climb Google rankings and reach your target audience.",
  },
  {
    icon: <FaHandshake className="text-primary text-3xl mb-4" />,
    title: "Client-First",
    description:
      "We prioritize transparency, communication, and collaboration.",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative py-24 px-6 bg-gradient-to-br from-[#f0f8ff] to-[#e4ecff] overflow-hidden"
    >
      {/* SEO TAGS */}
      <Helmet>
        <title>Why Choose Us | Webline Studio – Your Trusted Web Partner</title>
        <meta
          name="description"
          content="Webline Studio offers custom solutions, responsive design, SEO-ready builds, and full support. Discover why we're the right choice for your website."
        />
        <meta
          name="keywords"
          content="Why choose us, Web Agency, Full Stack Web Studio, React Tailwind SEO, Website Support, Modern Web Solutions, Best web development agency"
        />
        <meta property="og:title" content="Why Choose Webline Studio" />
        <meta
          property="og:description"
          content="See what makes Webline Studio different – from modern tech stack to long-term support and client-first approach."
        />
        <meta property="og:image" content="/preview-image.jpg" />
        <link rel="canonical" href="https://webline-studio.com/#why-us" />
      </Helmet>

      {/* Dekorim sfondi */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#277df1]/10 blur-3xl rounded-full -z-10"></div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-darkblue text-center mb-6"
      >
        Why Choose <span className="text-primary">Webline Studio</span>
      </motion.h2>
      <p className="text-gray-600 text-lg text-center max-w-2xl mx-auto mb-16">
        Explore the values and process that set us apart as a creative, trustworthy and tech-forward agency.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-2xl hover:border-primary transition-all duration-300 text-center"
          >
            <div className="group-hover:scale-110 transition-transform duration-300">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-darkblue mt-4 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
