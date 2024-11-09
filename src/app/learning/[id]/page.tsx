// src/app/learning/[id]/page.tsx

"use client";

import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";

import LearningSection from "@/components/Learning/LearningSection";
import TestingSection from "@/components/Learning/TestingSection";
import Tabs from "@/components/Learning/Tabs";
import { MyRuntimeProvider } from "@/app/MyRuntimeProvider";
import { Thread } from "@/components/ui/assistant-ui/thread";
// import {Thread,AssistantModal} from "@assistant-ui/react";

const LearningPage = () => {
  return (
    <MyRuntimeProvider>
      <Breadcrumb
        pageName="Learning Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <section
        id="Learning"
        className="overflow-hidden py-16 md:py-20 lg:py-28"
      >
        <div className="h-dvh mx-auto shadow-sm dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]" style={{width:"80%"}}>
          {/* <Thread /> */}
          <LearningSection />
        </div>
      </section>
    </MyRuntimeProvider>
  );
};

export default LearningPage;
