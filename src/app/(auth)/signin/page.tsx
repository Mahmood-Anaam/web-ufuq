"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { DOMAIN } from "@/utils/constants";
import { toast } from "react-toastify";
import Spinner from "@/components/Spinner";

const SigninPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(`${DOMAIN}/api/users/signin`, {
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200) {
        toast.success("Login successful!");
        router.replace("/");
        router.refresh();
      }
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || "Login failed.";
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
          تسجيل الدخول
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-body-color dark:text-white">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-body-color dark:text-white">
              كلمة المرور
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:border-accent"
            />
          </div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-white rounded-md py-2.5"
              disabled={isLoading}
            >
              {isLoading ? <Spinner /> : "دخول"}
            </Button>
          </motion.div>
        </form>
        <div className="mt-4 text-center">
          <Link href="/forgot" className="text-sm text-accent underline">
            هل نسيت كلمة المرور؟
          </Link>
        </div>
        <div className="mt-4 text-center text-sm text-body-color dark:text-white">
          لا تملك حسابًا؟{" "}
          <Link href="/signup" className="text-accent font-semibold">
            أنشئ حسابك
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default SigninPage;
