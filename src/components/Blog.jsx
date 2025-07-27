import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const articles = [
  {
    id: 1,
    title: "Why Every Business Needs a Website in 2025",
    excerpt:
      "In today’s digital age, a website isn’t a luxury — it’s a necessity. Discover why having an online presence is crucial for growth.",
    content:
      "A website serves as the digital front door to your business. It builds credibility, allows you to be found on Google, and provides a way for customers to learn about your services 24/7. Without one, you're invisible to potential clients online.",
  },
  {
    id: 2,
    title: "Top 5 SEO Tips for Small Business Websites",
    excerpt:
      "Boost your visibility on Google with these easy and effective SEO practices you can apply today.",
    content:
      "1. Use relevant keywords\n2. Optimize meta tags\n3. Create high-quality content\n4. Improve page speed\n5. Get backlinks. SEO is a long-term investment, but consistent efforts can bring powerful organic traffic.",
  },
  {
    id: 3,
    title: "Web Design Trends in 2025: What’s Hot and What’s Not",
    excerpt:
      "From minimal layouts to 3D animations, explore what’s shaping modern web design this year.",
    content:
      "In 2025, design trends include dark mode, brutalist aesthetics, glassmorphism, 3D interactive elements, and micro animations. Avoid outdated layouts, overly complex navigation, and heavy pages.",
  },
];

function Blog() {
  const [expandedArticleId, setExpandedArticleId] = useState(null);

  const toggleArticle = (id) => {
    setExpandedArticleId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-[#1743c0] mb-12">
        Insights & Tips
      </h2>

      <div className="space-y-10">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-[#f7fbff] border border-[#dbeafe] rounded-2xl shadow-sm p-6 md:p-8 transition-all duration-300 hover:shadow-md"
          >
            <h3 className="text-2xl font-semibold text-[#277df1] mb-3">
              {article.title}
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">{article.excerpt}</p>

            <button
              onClick={() => toggleArticle(article.id)}
              className="flex items-center gap-1 text-sm font-medium text-white bg-[#277df1] hover:bg-[#1743c0] px-4 py-2 rounded-full transition"
            >
              {expandedArticleId === article.id ? "Show less" : "Read more"}
              {expandedArticleId === article.id ? (
                <FiChevronUp className="mt-0.5" />
              ) : (
                <FiChevronDown className="mt-0.5" />
              )}
            </button>

            <AnimatePresence initial={false}>
              {expandedArticleId === article.id && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden mt-6 text-gray-800 text-base leading-relaxed whitespace-pre-line bg-white border border-[#cbd5e1] rounded-xl shadow-inner p-5"
                >
                  {article.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
