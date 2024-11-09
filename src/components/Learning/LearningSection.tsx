"use client";
import React, { FC, ReactNode } from "react";
import {
  ComposerPrimitive,
  Thread,
  ThreadPrimitive,
} from "@assistant-ui/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";
import { SendHorizontalIcon } from "lucide-react";
import AI_ThreadSuggestion from "../ui/assistant-ui/AI_ThreadSuggestion";

// Composer component with input field and send button
const Composer: FC = () => (
  <>
    {/* Display suggestions when there is a message */}
    <ThreadPrimitive.If empty={false}>
      <div className="mb-4 w-full px-4">
        <div className="flex flex-wrap justify-center gap-2">
          <ThreadPrimitive.If running={false}>
            <AI_ThreadSuggestion />
          </ThreadPrimitive.If>
        </div>
      </div>
    </ThreadPrimitive.If>

    {/* Input field with send button */}
    <ComposerPrimitive.Root className="relative flex w-full items-end rounded-full border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 p-3 transition-shadow focus-within:shadow-lg">
      <ComposerPrimitive.Input
        autoFocus
        placeholder="اكتب سؤالك هنا..."
        rows={1}
        className="placeholder:text-gray-400 flex-1 resize-none bg-transparent p-2 pr-12 text-sm outline-none rounded-full"
      />
      {/* Tooltip for send button */}
      <Tooltip>
        <ComposerPrimitive.Send asChild>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="absolute bottom-0 right-0 m-2 p-2 bg-accent text-white rounded-full hover:bg-accent/90 transition-all shadow-lg"
            >
              <SendHorizontalIcon />
              <span className="sr-only">إرسال</span>
            </Button>
          </TooltipTrigger>
        </ComposerPrimitive.Send>
        <TooltipContent side="bottom">إرسال</TooltipContent>
      </Tooltip>
    </ComposerPrimitive.Root>
  </>
);

// Main Learning Section with tooltip support and thread configuration
const LearningSection = () => {
  return (
    <TooltipProvider>
      <Thread
        assistantMessage={{
          allowFeedbackPositive: true,
          allowFeedbackNegative: true,
          allowCopy: true,
          allowReload: true,
          allowSpeak: true,
        }}
        welcome={{ message: "", suggestions: [] }}
        userMessage={{
          allowEdit: true,
        }}
        branchPicker={{
          allowBranchPicker: true,
        }}
        composer={{
          allowAttachments: false,
        }}
        components={{
          Composer,
        }}
        strings={{
          thread: {
            scrollToBottom: {
              tooltip: "مرر إلى الأسفل",
            },
          },
          assistantMessage: {
            reload: {
              tooltip: "إعادة التحميل",
            },
            copy: {
              tooltip: "نسخ المحتوى",
            },
            feedback: {
              positive: {
                tooltip: "أعجبني",
              },
              negative: {
                tooltip: "لم يعجبني",
              },
            },
          },
          editComposer: {
            send: { label: "إرسال" },
            cancel: { label: "إلغاء" },
          },
          composer: {
            send: {
              tooltip: "إرسال",
            },
            cancel: {
              tooltip: "إلغاء",
            },
            input: {
              placeholder: "اكتب سؤالك هنا...",
            },
          },
          branchPicker: {
            next: {
              tooltip: "التالي",
            },
            previous: {
              tooltip: "السابق",
            },
          },
        }}
      />
    </TooltipProvider>
  );
};

export default LearningSection;
