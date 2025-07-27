import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

function SloganSection() {
  return (
    <section
      className="py-28 px-6 text-center relative overflow-hidden"
      style={{ backgroundColor: "#eaf6ff" }}
    >
      {/* SEO Tags */}
      <Helmet>
        <title>We Craft Digital Experiences | Webline Studio</title>
        <meta
          name="description"
          content="At Webline Studio, we don't just build websites. We design scalable, strategic digital experiences that grow with your brand."
        />
        <meta
          name="keywords"
          content="Digital Experiences, Creative Web Design, Website Strategy, Webline Studio, Brand Growth Online"
        />
        <meta property="og:title" content="Webline Studio – Digital Experiences" />
        <meta
          property="og:description"
          content="We blend strategy, design, and technology to build digital experiences that perform and evolve with your brand."
        />
        <meta property="og:image" content="/preview-image.jpg" />
        <link rel="canonical" href="https://webline-studio.com/#slogan" />
      </Helmet>

      {/* Shapes e sfondit për stil dinamik */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 -right-20 w-[300px] h-[300px] bg-[#277df1]/10 rounded-full blur-3xl z-0"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-extrabold text-darkblue relative z-10 max-w-4xl mx-auto leading-snug"
      >
        We don’t just build websites — <br className="hidden md:block" />
        <span className="text-primary">We craft digital experiences</span>
        <br /> that grow with your brand.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-gray-600 mt-6 relative z-10 max-w-xl mx-auto"
      >
        At Webline Studio, we blend strategy, design, and technology to create websites that inspire and perform.
      </motion.p>
    </section>
  );
}

export default SloganSection;
