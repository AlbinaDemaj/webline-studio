import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

function SloganBetweenSections() {
  return (
    <section
      className="py-20 px-6 text-center"
      style={{ backgroundColor: "#f0f6ff" }}
    >
      {/* SEO Helmet Tags */}
      <Helmet>
        <title>From Strategy to Success | Webline Studio</title>
        <meta
          name="description"
          content="We help transform your vision into interactive digital experiences, guiding every step from strategy to success."
        />
        <meta
          name="keywords"
          content="Strategy to Success, Digital Transformation, Interactive Web Experiences, Idea to Product, Webline Studio"
        />
        <meta property="og:title" content="Webline Studio – Strategy to Success" />
        <meta
          property="og:description"
          content="Turning ideas into web products through strategy, design and development. Partner with Webline Studio."
        />
        <meta property="og:image" content="/preview-image.jpg" />
        <link rel="canonical" href="https://webline-studio.com/#strategy" />
      </Helmet>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl md:text-4xl font-semibold text-darkblue max-w-4xl mx-auto leading-relaxed"
      >
        From <span className="text-primary font-bold">strategy</span> to{" "}
        <span className="text-primary font-bold">success</span> — we turn ideas into
        interactive digital experiences.
      </motion.h2>
    </section>
  );
}

export default SloganBetweenSections;
