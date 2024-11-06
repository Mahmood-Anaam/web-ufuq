// src/components/Header.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="container mx-auto px-6 py-4 flex justify-between items-center bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl shadow-lg">
      <div className="flex items-center space-x-3">
        <Image src="/logo/logo.png" alt="أفق Logo" width={40} height={40} />
        <h1 className="text-3xl font-bold text-white">أفق</h1>
      </div>
      <nav className="flex items-center space-x-6">
        <Link href="/signin" className="text-white hover:text-gray-200 text-lg mx-4">
          تسجيل الدخول
        </Link>
        <Link href="/signup" className="text-white hover:text-gray-200 text-lg mx-4">
          إنشاء حساب
        </Link>
        <Button className="bg-white text-accent font-semibold py-2 px-5 rounded-full shadow-md hover:bg-gray-100 hover:text-gray-800 transition duration-200 ease-in-out">
          المساعدة
        </Button>
      </nav>
    </header>
  );
};

export default Header;
