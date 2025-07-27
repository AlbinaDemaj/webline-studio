import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  FaCode,
  FaTools,
  FaSearch,
  FaPaintBrush,
  FaShoppingCart,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    title: "Website Development",
    icon: <FaCode className="text-4xl text-primary z-10" />,
    description:
      "We build fast, responsive, and visually appealing websites using modern technologies.",
  },
  {
    title: "Website Maintenance",
    icon: <FaTools className="text-4xl text-primary z-10" />,
    description:
      "Ongoing updates, security, bug fixes, and performance monitoring for your website.",
  },
  {
    title: "SEO Optimization",
    icon: <FaSearch className="text-4xl text-primary z-10" />,
    description:
      "We improve your website’s visibility on Google with smart SEO strategies.",
  },
  {
    title: "Landing Pages",
    icon: <FaRocket className="text-4xl text-primary z-10" />,
    description:
      "High-converting landing pages for your products, services, or campaigns.",
  },
  {
    title: "E-Commerce Solutions",
    icon: <FaShoppingCart className="text-4xl text-primary z-10" />,
    description:
      "Online stores built with performance and customer experience in mind.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush className="text-4xl text-primary z-10" />,
    description:
      "Clean, user-friendly interfaces that look great on all devices.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6 bg-gray-50 text-center flex flex-col items-center"
    >
      {/* SEO Meta Tags për seksionin Services */}
      <Helmet>
        <title>Our Services | Web Development, SEO, UI/UX & E-Commerce</title>
        <meta
          name="description"
          content="Discover our web services: custom website development, SEO optimization, landing pages, e-commerce, and modern UI/UX design. Tailored for your brand."
        />
        <meta
          name="keywords"
          content="Website Development, SEO Services, UI UX Design, E-Commerce Solutions, Web Maintenance, Landing Pages, React Developer"
        />
        <meta property="og:title" content="Services - Webline Studio" />
        <meta
          property="og:description"
          content="Explore our services to build fast, responsive, and high-performing websites that convert visitors into clients."
        />
        <meta property="og:image" content="/preview-image.jpg" />
        <link rel="canonical" href="https://webline-studio.com/#services" />
      </Helmet>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm uppercase tracking-widest text-primary font-semibold mb-3"
      >
        What We Offer
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-darkblue mb-12"
      >
        Our Services
      </motion.h2>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative group bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-left overflow-hidden"
          >
            <div className="relative mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-primary/10">
              <div className="absolute w-20 h-20 bg-primary/10 blur-xl rounded-full z-0 animate-pulse"></div>
              {service.icon}
            </div>

            <h3 className="text-xl font-semibold text-darkblue mb-2 z-10 relative">
              {service.title}
            </h3>
            <p className="text-gray-600 z-10 relative">{service.description}</p>

            <div className="absolute bottom-2 right-3 text-gray-200 text-6xl opacity-10 pointer-events-none group-hover:opacity-20 transition">
              {service.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
