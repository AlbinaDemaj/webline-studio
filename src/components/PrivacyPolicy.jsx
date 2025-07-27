import React from "react";
import { motion } from "framer-motion";

function PrivacyPolicy() {
  return (
    <motion.section
      className="px-6 py-20 max-w-4xl mx-auto text-gray-800"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-darkblue mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Your privacy matters to us. Learn how we handle and protect your data at Webline Studio.
        </p>
      </div>

      <div className="space-y-10 text-gray-700">
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-primary">
            Information We Collect
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Your name and email when you contact us</li>
            <li>Device and browser data for performance analytics</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-primary">
            How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>To improve our website, services, and performance</li>
            <li>To communicate with you and respond to requests</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-primary">
            Data Security
          </h2>
          <p>
            We use secure systems to protect your information and we never share your data with any third-party service or platform.
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-500 text-center mt-16">
        Last updated: July 2025
      </p>
    </motion.section>
  );
}

export default PrivacyPolicy;
