"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";
import { DOMAIN } from "@/utils/constants";
import { toast } from "react-toastify";
import Spinner from "@/components/Spinner";

const ForgotPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(`${DOMAIN}/api/users/forgot`, {
        email,
      });

      if (response.status === 200) {
        toast.success("تم إرسال كلمة المرور الجديدة إلى بريدك الإلكتروني.");
      }
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || "فشل في إرسال رابط الاستعادة.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen dark:from-bg-color-dark dark:via-gray-900 dark:to-gray-dark py-12 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md p-8 bg-white dark:bg-gray-dark rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center text-accent mb-6">
          استعادة كلمة المرور
        </h2>
        <p className="text-sm text-body-color dark:text-white text-center mb-4">
          أدخل بريدك الإلكتروني لاستعادة كلمة المرور
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-body-color dark:text-white">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:border-accent"
            />
          </div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-white rounded-md py-2.5"
              // disabled={isLoading}
              disabled
            >
              {isLoading ? <Spinner /> : "استعادة"}
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
