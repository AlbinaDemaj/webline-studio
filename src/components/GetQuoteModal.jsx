import { useState } from "react";
import emailjs from "emailjs-com";

export default function GetQuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    service: "",
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
        "service_jz6r2bi",        // ✅ ID e shërbimit
        "template_mum5z2s",       // ✅ Template ID e saktë
        formData,
        "67Aaqh9qHY93LiZ8m"       // ✅ Public key (nga EmailJS account)
      )
      .then(
        () => {
          setSuccessMsg("Your request was sent successfully!");
          setFormData({
            user_name: "",
            user_email: "",
            service: "",
            message: "",
          });
        },
        (error) => {
          alert("Something went wrong: " + error.text);
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl p-8 md:p-10 animate-fadeIn scale-95">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl transition"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-3xl font-extrabold text-center text-[#1743c0] mb-6">
          Get a Free Quote
        </h2>

        {successMsg && (
          <p className="text-green-600 text-center mb-4 font-medium">
            {successMsg}
          </p>
        )}

        <form onSubmit={sendEmail} className="space-y-5">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            value={formData.user_name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-[#277df1] focus:outline-none"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            value={formData.user_email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-[#277df1] focus:outline-none"
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-[#277df1] focus:outline-none"
          >
            <option value="">Choose a service</option>
            <option value="Web Design">Web Design</option>
            <option value="E-Commerce Website">E-Commerce Website</option>
            <option value="SEO Optimization">SEO Optimization</option>
            <option value="Website Maintenance">Website Maintenance</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Tell us about your project..."
            required
            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-[#277df1] focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-[#277df1] to-[#1743c0] text-white font-semibold rounded-xl hover:shadow-lg hover:brightness-110 transition-all duration-300"
          >
            Send Request 🚀
          </button>
        </form>
      </div>
    </div>
  );
}
