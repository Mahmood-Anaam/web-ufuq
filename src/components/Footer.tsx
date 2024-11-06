// src/components/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto text-center text-body-color dark:text-white py-4 mt-16 border-t border-gray-200 dark:border-gray-700"
    >
      <p>&copy; {new Date().getFullYear()} أفق. جميع الحقوق محفوظة.</p>
      <nav className="mt-2 space-x-4">
        <Link href="/privacy" className="text-accent hover:underline">
          سياسة الخصوصية
        </Link>
        <Link href="/terms" className="text-accent hover:underline">
          الشروط والأحكام
        </Link>
      </nav>
    </motion.footer>
  );
};

export default Footer;
