import React from "react";
import { motion } from "framer-motion";

function TermsAndConditions() {
  return (
    <motion.section
      className="px-6 py-20 max-w-4xl mx-auto text-gray-800"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-darkblue mb-4">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Please read our terms carefully before using Webline Studio’s website.
        </p>
      </div>

      <div className="space-y-10 text-gray-700">
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-primary">
            Use of Website
          </h2>
          <p>
            All materials provided are for informational purposes only. You are not permitted to copy, reuse, or sell our content or designs without our written permission.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-primary">
            Intellectual Property
          </h2>
          <p>
            All visuals, logos, and textual content belong to Webline Studio unless explicitly stated otherwise.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-primary">
            Changes to Terms
          </h2>
          <p>
            We reserve the right to update or modify these terms at any time. Changes take effect immediately upon posting on this page.
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-500 text-center mt-16">
        Last updated: July 2025
      </p>
    </motion.section>
  );
}

export default TermsAndConditions;
