import { ThreadAssistantMessage, useThread } from "@assistant-ui/react";
import {FormatMessagesPrompt } from "@/lib/ai/allam";


export const useLastAssistantMessage = () => {
  return useThread(({ messages }) => {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i]?.role === "assistant") {
        return messages[i]! as ThreadAssistantMessage;
      }
    }
    return null;
  });
};
