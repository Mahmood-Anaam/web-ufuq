// src/app/level/[id]/page.jsx
"use client";
import React from "react";
import Tabs from "@/components/Common/Tabs";
import { motion } from "framer-motion";
import LearningSection from "@/components/LearningSection";
import TestingSection from "@/components/TestingSection";
import { levelData } from "@/utils/levelData";

const LevelPage = () => {


  const tabNames = ["التعلم", "الاختبار"];

  // تحديد محتوى التبويبات باستخدام المكونات المستقلة
  const tabContent = [
    <LearningSection key="learning"  />,

    <TestingSection key="testing" />,
  ];

  return (
    <div className="h-full min-h-screen bg-gradient-to-b from-secondary via-white to-secondary dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* عنوان المستوى */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-8"
        >
          {levelData.title}
        </motion.h1>

        {/* مكون التبويبات */}
        <Tabs tabs={tabNames} content={tabContent} />
      </div>
    </div>
  );
};

export default LevelPage;