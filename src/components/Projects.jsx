import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

// Importo fotot
import Dermacare from "../assets/img/Dermacare.png";
import CozyHouse from "../assets/img/CozyHouse.png";
import Restaur from "../assets/img/Restaur.png";
import RioRelax from "../assets/img/RioRelax.png";
import Mixtas from "../assets/img/Mixtas.png";
import TastyBite from "../assets/img/TastyBite.png";
import Glowly from "../assets/img/Glowly.png";
import Hotel from "../assets/img/Hotel.png";
import CoffeeShop from "../assets/img/coffe-shop.png";

// Lista e projekteve
const projects = [
  {
    name: "DERMACARE",
    url: "https://albinademaj.github.io/DERMACARE/",
    image: Dermacare,
    description:
      "A soft and elegant skincare website focused on beauty and wellness. Clean UI and gentle tones create a relaxing user experience.",
  },
  {
    name: "CozyHouse",
    url: "https://albinademaj.github.io/CozyHouse/",
    image: CozyHouse,
    description:
      "A stylish real estate landing page that showcases cozy apartments and modern living spaces, designed for property listings.",
  },
  {
    name: "Restaur",
    url: "https://albinademaj.github.io/RESTAUR/",
    image: Restaur,
    description:
      "A vibrant and modern restaurant website with a mouth-watering design and an intuitive layout for menu, bookings, and offers.",
  },
  {
    name: "RioRelax",
    url: "https://albinademaj.github.io/RioRelax/",
    image: RioRelax,
    description:
      "A calm and welcoming spa and massage center website that promotes relaxation through its design and service highlights.",
  },
  {
    name: "Mixtas",
    url: "https://albinademaj.github.io/Mixtas/",
    image: Mixtas,
    description:
      "A creative and colorful fashion store homepage with dynamic elements and a playful layout tailored for a young audience.",
  },
  {
    name: "TastyBite",
    url: "https://albinademaj.github.io/TastyBite/",
    image: TastyBite,
    description:
      "A fresh and delicious-looking food delivery website designed to highlight meals, categories, and a simple ordering experience.",
  },
  {
    name: "Glowly",
    url: "https://beamish-pegasus-6227a7.netlify.app/",
    image: Glowly,
    description:
      "An animated skincare brand page with smooth transitions, product highlights, and a modern aesthetic for a younger audience.",
  },
  {
    name: "Hotel Management System",
    url: "https://relaxhotel.infinityfreeapp.com/?i=1",
    image: Hotel,
    description:
      "A full hotel management web app with dynamic room listings, booking flow, admin dashboard, and user review integration.",
  },
  {
    name: "Coffee Shop",
    url: "https://startling-entremet-906389.netlify.app/",
    image: CoffeeShop,
    description:
      "A cozy and inviting homepage for a coffee shop featuring menu previews, gallery sections, and smooth navigation design.",
  },
];

function ProjectsShowcase() {
  return (
    <section id="projects" className="bg-[#f3f8ff] py-24 px-6">
      {/* SEO META TAGS */}
      <Helmet>
        <title>Projects | Web Design & Development Portfolio - Webline Studio</title>
        <meta
          name="description"
          content="Explore our portfolio of websites crafted with React, Tailwind CSS, and modern design. From e-commerce to hospitality and skincare industries."
        />
        <meta
          name="keywords"
          content="React Projects, Web Design Portfolio, Tailwind CSS, Skincare Website, Restaurant Website, E-Commerce, Hotel System"
        />
        <meta property="og:title" content="Webline Studio Projects" />
        <meta
          property="og:description"
          content="Discover the real websites we’ve built for beauty, hospitality, food, real estate, and more."
        />
        <meta property="og:image" content="/preview-image.jpg" />
        <link rel="canonical" href="https://webline-studio.com/#projects" />
      </Helmet>

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-darkblue">
          Our Web Projects
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Real results, real creativity. Here's a glimpse of what we've built.
        </p>
      </div>

      <div className="space-y-24 max-w-6xl mx-auto">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col-reverse md:flex-row ${
                isEven ? "" : "md:flex-row-reverse"
              } items-center gap-12`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  className="rounded-2xl shadow-xl w-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl font-semibold text-darkblue mb-4">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-darkblue text-white px-6 py-3 rounded-full font-medium transition"
                >
                  View Live <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsShowcase;
