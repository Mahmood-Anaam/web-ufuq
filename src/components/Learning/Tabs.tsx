// src\components\Learning\Tabs.tsx
"use client";
import React, { useState } from "react";
const Tabs = ({ tabs, initialTab=0, content }:any) => {

  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div className="w-full">
      <div className="flex space-x-2 bg-white dark:bg-gray-800 p-1 rounded-xl shadow-xl mb-4">
        {tabs.map((tab:any, index:any) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`w-full py-3 rounded-lg text-sm font-bold transition-all duration-200 ${
              activeTab === index
                ? "bg-accent text-white shadow"
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-accent"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* محتوى التبويب النشط */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl">
        {content[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;