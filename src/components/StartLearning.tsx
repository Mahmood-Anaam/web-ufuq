// src/components/LearningSimulation.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const LearningSimulation: React.FC = () => {
  return (
    <section className="container mx-auto text-center py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto bg-gradient-to-r from-primary to-secondary dark:from-bg-color-dark dark:to-gray-dark p-10 rounded-3xl shadow-lg"
      >
        <h2 className="text-4xl font-bold text-accent mb-6">التعلم والمحاكاة</h2>
        <p className="text-lg text-body-color dark:text-white mb-8">
          استمتع بتجربة تفاعلية مع شخصيات أدبية من التاريخ العربي، مثل الشاعر أحمد شوقي ونزار قباني. تعلم وتفاعل واكتسب مهارات جديدة في اللغة العربية الأصلية.
        </p>

        {/* شخصيات محاكاة */}
        <div className="flex justify-center gap-8 mb-10">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-center"
          >
            <Image src="/characters/ahmed-shawqi.png" alt="أحمد شوقي" width={80} height={80} />
            <p className="mt-4 text-accent font-semibold">أحمد شوقي</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-center"
          >
            <Image src="/characters/nizar-qabbani.png" alt="نزار قباني" width={80} height={80} />
            <p className="mt-4 text-accent font-semibold">نزار قباني</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-center"
          >
            <Image src="/characters/badr-shakir.png" alt="بدر شاكر السياب" width={80} height={80} />
            <p className="mt-4 text-accent font-semibold">بدر شاكر السياب</p>
          </motion.div>
        </div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link href="/levels">
            <Button className="bg-accent hover:bg-accent/90 text-white py-3 px-8 rounded-full text-xl">
              ابدأ المحاكاة
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LearningSimulation;
