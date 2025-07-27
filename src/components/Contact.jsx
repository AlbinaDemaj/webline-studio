import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaEnvelopeOpenText, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_jz6r2bi", // Service ID
        "template_mum5z2s", // Template ID
        formData,
        "67Aaqh9qHY93LiZ8m" // Public key
      )
      .then(
        () => {
          setSuccessMsg("Your message has been sent successfully!");
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          alert("Something went wrong: " + error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-gradient-to-br from-[#eaf4ff] to-[#f6fbff] text-center overflow-hidden"
    >
      {/* SEO META TAGS */}
      <Helmet>
        <title>Contact Us | Webline Studio – Let's Build Your Website</title>
        <meta
          name="description"
          content="Reach out to Webline Studio to start your next website project. Contact us via form, email or phone and let’s build something amazing together."
        />
        <meta
          name="keywords"
          content="Contact Webline Studio, Get a Quote, Request Website, Web Development Contact, Web Agency Kosovo"
        />
        <meta property="og:title" content="Contact Webline Studio" />
        <meta
          property="og:description"
          content="Fill out the contact form or email us to talk about your project. We're excited to hear from you!"
        />
        <meta property="og:image" content="/preview-image.jpg" />
        <link rel="canonical" href="https://webline-studio.com/#contact" />
      </Helmet>

      {/* Background Decor */}
      <div className="absolute -top-24 -left-24 w-[300px] h-[300px] bg-primary/30 blur-3xl rounded-full -z-10"></div>
      <div className="absolute -bottom-24 -right-24 w-[300px] h-[300px] bg-[#277df1]/30 blur-3xl rounded-full -z-10"></div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-darkblue mb-4"
      >
        Let’s Connect & Build Something Great
      </motion.h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-20">
        Fill out the form or reach out to us directly. We’d love to talk about your next project.
      </p>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        {/* INFO */}
        <div className="space-y-10 text-left self-center">
          {[
            {
              icon: <FaEnvelopeOpenText className="text-4xl text-primary mt-1" />,
              title: "Email Us",
              value: "weblinestudio@hotmail.com",
            },
            {
              icon: <FaPhoneAlt className="text-3xl text-primary mt-1" />,
              title: "Call",
              value: "+383 49 119 008",
            },
            {
              icon: <FaMapMarkerAlt className="text-3xl text-primary mt-1" />,
              title: "Location",
              value: "Prizren, Kosovë",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-5">
              {item.icon}
              <div>
                <h4 className="text-lg font-semibold text-darkblue mb-1">{item.title}</h4>
                <p className="text-gray-600">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FORMA */}
        <form
          onSubmit={sendEmail}
          className="w-full space-y-6 bg-white/70 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-gray-200"
        >
          {successMsg && (
            <p className="text-green-600 text-center font-medium">{successMsg}</p>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="How can we help you?"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-darkblue text-white px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
