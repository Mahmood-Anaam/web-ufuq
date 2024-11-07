// src/components/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleProfileMenu = () => setProfileMenuOpen(!isProfileMenuOpen);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".profile-menu") && !target.closest(".mobile-menu")) {
        setProfileMenuOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isLoggedIn = true; // Replace with actual auth state

  return (
    <header
      className={`fixed w-full z-100 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-primary/95 via-accent/95 to-secondary/95 backdrop-blur-sm shadow-lg"
          : "bg-gradient-to-r from-primary via-accent to-secondary"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Title */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/logo/logo.png"
              alt="أفق Logo"
              width={40}
              height={40}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-3xl font-bold text-white mr-2 group-hover:text-gray-100">
              أفق
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {isLoggedIn && (
            <div className="profile-menu relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="focus:outline-none"
                onClick={toggleProfileMenu}
              >
                <Image
                  src="/images/Arab-00.png"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white hover:border-gray-200 transition-all duration-300"
                />
              </motion.button>

              <AnimatePresence>
                {isProfileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-3 w-48 bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden"
                  >
                    <Link
                      href="/profile"
                      className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                    >
                      الملف الشخصي
                    </Link>
                    <button className="block w-full text-right px-4 py-3 hover:bg-gray-50 transition-colors duration-200 text-red-600">
                      تسجيل الخروج
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-white text-accent font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100 hover:text-gray-800 transition-all duration-300">
              المساعدة
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden mobile-menu focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gradient-to-r from-primary via-accent to-secondary"
          >
            <ul className="flex flex-col items-center space-y-4 py-6">
              {isLoggedIn ? (
                <>
                  <motion.li
                    whileHover={{ scale: 1.05 }}
                    className="w-full text-center"
                  >
                    <Link
                      href="/profile"
                      className="block py-2 hover:bg-white/10 transition-colors duration-200"
                    >
                      الملف الشخصي
                    </Link>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.05 }}
                    className="w-full text-center"
                  >
                    <button className="w-full py-2 hover:bg-white/10 transition-colors duration-200 text-red-300">
                      تسجيل الخروج
                    </button>
                  </motion.li>
                </>
              ) : (
                <motion.li whileHover={{ scale: 1.05 }}>
                  <Link
                    href="/signin"
                    className="block py-2 hover:bg-white/10 transition-colors duration-200"
                  >
                    تسجيل الدخول
                  </Link>
                </motion.li>
              )}
              <motion.li whileHover={{ scale: 1.05 }}>
                <Button className="bg-white text-accent font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100 hover:text-gray-800 transition-all duration-300">
                  المساعدة
                </Button>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;