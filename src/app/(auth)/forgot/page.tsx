// src\app\(auth)\forgot\page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ForgotPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-white to-secondary dark:from-bg-color-dark dark:via-gray-900 dark:to-gray-dark py-12 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md p-8 bg-white dark:bg-gray-dark rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center text-accent mb-6">استعادة كلمة المرور</h2>
        <p className="text-sm text-body-color dark:text-white text-center mb-4">
          أدخل بريدك الإلكتروني لاستعادة كلمة المرور
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-body-color dark:text-white">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:border-accent"
            />
          </div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-md py-2.5">
              إرسال رابط الاستعادة
            </Button>
          </motion.div>
        </form>
        <div className="mt-4 text-center">
          <Link href="/signin" className="text-sm text-accent underline">
            العودة إلى تسجيل الدخول
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPage;
