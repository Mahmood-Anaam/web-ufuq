// src/components/ui/assistant-ui/thread.tsx

"use client";

import {
  ComposerPrimitive,
  MessagePrimitive,
  ThreadPrimitive,
} from "@assistant-ui/react";
import React, { FC } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { cn } from "@/utils/utils";
import { SendHorizontalIcon } from "lucide-react";
import AI_ThreadSuggestion from "./AI_ThreadSuggestion";
import ThreadSuggestion from "./ThreadSuggestion";

export const Thread: FC = () => {
  return (
    <TooltipProvider>
      <ThreadPrimitive.Root className="bg-gradient-to-b from-primary via-white to-secondary dark:from-bg-color-dark dark:via-gray-900 dark:to-gray-dark h-full rounded-2xl shadow-lg p-6">
        <ThreadPrimitive.Viewport className="flex h-full flex-col items-center overflow-y-auto scroll-smooth px-4 pt-6 space-y-4">
          <ThreadWelcome />
          <ThreadPrimitive.Messages
            components={{
              UserMessage,
              AssistantMessage,
            }}
          />
          <div className="sticky bottom-0 mt-4 flex w-full max-w-2xl flex-grow flex-col items-center justify-end rounded-t-lg pb-4">
            <ThreadPrimitive.If empty={false}>
              <div className="mb-4 w-full px-4">
                <div className="flex flex-wrap justify-center gap-2">
                  <ThreadPrimitive.If running={false}>
                    <AI_ThreadSuggestion />
                  </ThreadPrimitive.If>
                </div>
              </div>
            </ThreadPrimitive.If>
            <Composer />
          </div>
        </ThreadPrimitive.Viewport>
      </ThreadPrimitive.Root>
    </TooltipProvider>
  );
};

const ThreadWelcome: FC = () => {
  return (
    <div className="flex w-full max-w-2xl flex-col items-center px-4 py-6">
      <ThreadPrimitive.Empty>
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent text-center">
          مرحبًا بك في أفق!
        </h1>
        <p className="mt-2 text-center text-body-color dark:text-gray-300 text-lg">
          تفاعل مع الشخصيات الأدبية العربية واستمتع بالتعلم!
        </p>
      </ThreadPrimitive.Empty>
    </div>
  );
};

const Composer: FC = () => {
  return (
    <ComposerPrimitive.Root className="relative flex w-full items-end rounded-full border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 p-3 transition-shadow focus-within:shadow-lg">
      <ComposerPrimitive.Input
        autoFocus
        placeholder="اكتب سؤالك هنا..."
        rows={1}
        className="placeholder:text-gray-400 flex-1 resize-none bg-transparent p-2 pr-12 text-sm outline-none rounded-full"
      />
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
  );
};

const UserMessage: FC = () => {
  return (
    <MessagePrimitive.Root className="my-4 grid w-full max-w-2xl grid-cols-[minmax(72px,1fr)_auto] gap-y-2">
      <div className="bg-blue-100 text-blue-900 col-start-2 max-w-xl break-words rounded-2xl px-4 py-3 shadow-md">
        <MessagePrimitive.Content />
        
      </div>
    </MessagePrimitive.Root>
  );
};

const AssistantMessage: FC = () => {
  return (
    <MessagePrimitive.Root className="relative my-4 grid w-full max-w-2xl grid-cols-[auto_1fr] gap-4">
      <Avatar className="col-start-1 row-span-full row-start-1 shadow-lg">
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
      <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 col-start-2 max-w-xl break-words rounded-2xl px-4 py-3 shadow-md">
        <MessagePrimitive.Content />
      </div>
    </MessagePrimitive.Root>
  );
};
