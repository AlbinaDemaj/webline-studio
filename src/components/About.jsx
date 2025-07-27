import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  animate,
  useMotionValueEvent,
} from "framer-motion";
import { Helmet } from "react-helmet";
import aboutImage from "../assets/logo.png";

const highlights = [
  { number: 5, label: "Years Experience" },
  { number: 50, label: "Websites Launched" },
  { number: 100, label: "Client Satisfaction", isPercent: true },
];

function AnimatedCounter({ to, isPercent }) {
  const count = useMotionValue(0);
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useMotionValueEvent(count, "change", (latest) => {
    setCurrent(Math.floor(latest));
  });

  useEffect(() => {
    if (inView) {
      animate(count, to, {
        duration: 2,
        ease: "easeOut",
      });
    }
  }, [inView, to, count]);

  return (
    <span ref={ref}>
      {current}
      {isPercent ? "%" : "+"}
    </span>
  );
}

function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-br from-white via-[#f0f9ff] to-white overflow-hidden"
    >
      {/* SEO META per seksionin About */}
      <Helmet>
        <title>About Us | Webline Studio - Your Creative Development Partner</title>
        <meta
          name="description"
          content="Learn more about Webline Studio – a full-stack web development agency crafting responsive, SEO-friendly websites and digital experiences that convert."
        />
        <meta
          name="keywords"
          content="Web Development Agency, Full-Stack Development, Responsive Websites, E-Commerce Solutions, SEO Maintenance, Custom Websites"
        />
        <meta property="og:title" content="About Webline Studio" />
        <meta
          property="og:description"
          content="Discover who we are, what we build, and why clients love working with us. Trusted creative partner in web development."
        />
        <meta property="og:image" content="/preview-image.jpg" />
        <link rel="canonical" href="https://webline-studio.com/#about" />
      </Helmet>

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        {/* TEKSTI */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-darkblue mb-4">
            About Webline Studio
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-6 mx-auto md:mx-0"></div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Webline Studio is a creative web development agency building fast,
            modern, and responsive websites. Whether it’s a portfolio, business
            site, or e-commerce — we bring your vision to life.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            We offer full-stack development, SEO, site maintenance, and ongoing
            support. With a passion for clean design & code, we help brands stand
            out online and grow digitally.
          </p>

          {/* KARTELAT ME ANIMACION */}
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md px-6 py-4 text-center border border-gray-200"
              >
                <h3 className="text-3xl font-bold text-darkblue">
                  <AnimatedCounter to={item.number} isPercent={item.isPercent} />
                </h3>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FOTO */}
        <motion.img
          src={aboutImage}
          alt="Webline Studio logo and team"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md object-contain"
        />
      </div>
    </section>
  );
}

export default About;
