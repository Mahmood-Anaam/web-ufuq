// src/app/(main)/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";



const HomePage: React.FC = () => {

  return (
    <>
     <ScrollUp/>
     <Hero />

    
    
    </>

  );


};



export default HomePage;







// const HomePage: React.FC = () => {
//   const router = useRouter();
//   return (




//     <div className="min-h-screen bg-gradient-to-b from-primary via-white to-secondary dark:from-bg-color-dark dark:via-gray-900 dark:to-gray-dark py-12 flex flex-col justify-between">
//       {/* Hero Section */}
//       <motion.section
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         className="container mx-auto text-center"
//       >
//         <h2 className="text-5xl  text-gray-800 dark:text-white mb-4">
//           رحلة تعليمية تفاعلية
//         </h2>
//         <p className="text-xl text-body-color dark:text-white max-w-2xl mx-auto mb-8">
//           استمتع مع طفلك برحلة تعليمية عبر الزمن، يتعلم خلالها من أبرز الأدباء
//           والشعراء العرب بطريقة تفاعلية وممتعة.
//         </p>
//         <motion.div whileHover={{ scale: 1.05 }}>
//           <Button
//             className="bg-accent hover:bg-accent/90 text-white py-3 px-8 rounded-lg"
//             onClick={() => {
//               router.push("/level");
//             }}
//           >
//             ابدأ التعلم الآن
//           </Button>
//         </motion.div>
//       </motion.section>

//       {/* Feature Sections */}
//       <section className="container mx-auto mt-16 grid gap-12 lg:grid-cols-3 md:grid-cols-2">
//         {/* Interactive Simulation */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="bg-white dark:bg-gray-dark p-6 rounded-2xl shadow-lg"
//         >
//           <h3 className="text-2xl font-bold text-accent mb-4">
//             تفاعل مع الشخصيات الأدبية
//           </h3>
//           <p className="text-body-color dark:text-white">
//             تحدث مع شعراء ومفكرين عرب عبر الزمن، تعلم منهم واستمتع برؤية العالم
//             من خلال عيونهم.
//           </p>
//         </motion.div>

//         {/* Educational Progress */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="bg-white dark:bg-gray-dark p-6 rounded-2xl shadow-lg"
//         >
//           <h3 className="text-2xl font-bold text-accent mb-4">
//             التقدم عبر المستويات
//           </h3>
//           <p className="text-body-color dark:text-white">
//             يخوض طفلك تجربة تعليمية متعددة المستويات، يبدأ من الأساسيات وصولًا
//             إلى إتقان اللغة مع مرور الوقت.
//           </p>
//         </motion.div>

//         {/* Suggestion Interaction */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="bg-white dark:bg-gray-dark p-6 rounded-2xl shadow-lg"
//         >
//           <h3 className="text-2xl font-bold text-accent mb-4">
//             اقتراحات تفاعلية
//           </h3>
//           <p className="text-body-color dark:text-white">
//             يقدم التطبيق اقتراحات وأسئلة ذكية تساعد طفلك على استكشاف الموضوعات
//             بطريقة شيقة، مما يعزز تجربته التعليمية.
//           </p>
//         </motion.div>
//       </section>

//       {/* Footer Section */}
//       {/* <footer className="container mx-auto mt-16 text-center text-body-color dark:text-white py-4 border-t border-gray-200 dark:border-gray-700">
//         <p>&copy; {new Date().getFullYear()} أفق. جميع الحقوق محفوظة.</p>
//         <nav className="mt-2">
//           <Link href="/privacy" className="mx-2 text-accent hover:underline">
//             سياسة الخصوصية
//           </Link>
//           <Link href="/terms" className="mx-2 text-accent hover:underline">
//             الشروط والأحكام
//           </Link>
//         </nav>
//       </footer> */}
//     </div>
//   );
// };

// export default HomePage;
