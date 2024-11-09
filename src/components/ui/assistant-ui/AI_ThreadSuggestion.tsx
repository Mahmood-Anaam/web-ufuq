// src/components/ui/assistant-ui/AI_ThreadSuggestion.tsx

import React, {
  FC,
  PropsWithChildren,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { Button } from "@/components/ui/button";
import { ThreadPrimitive } from "@assistant-ui/react";
import { useLastAssistantMessage } from "./LastMessageHook";
import { generate } from "./actions";
import { readStreamableValue } from "ai/rsc";
import { SuggestionsPrompts } from "@/lib/ai/Prompts";

const AI_ThreadSuggestion: FC<PropsWithChildren> = ({ children }) => {
  const lastAssistantMessage = useLastAssistantMessage();
  const [output, setOutput] = useState<string | null>(null);
  const [output2, setOutput2] = useState<string | null>(null);

  const debounceRef = useRef(false);
  const generateSuggestions = useCallback(async (content: string) => {
    if (process.env.NODE_ENV === "development") {
      if (debounceRef.current) return;
      debounceRef.current = true;
      setTimeout(() => {
        debounceRef.current = false;
      }, 0);
    }

    const [response1, response2] = await Promise.all([
      generate((await SuggestionsPrompts.sg1.q1.invoke({content:content})).value),
      generate((await SuggestionsPrompts.sg1.q2.invoke({content:content})).value),
    ]);

    let generatedOutput = "";
    for await (const delta of readStreamableValue(response1.output)) {
      generatedOutput += delta;
    }
    setOutput(generatedOutput);

    let generatedOutput2 = "";
    for await (const delta of readStreamableValue(response2.output)) {
      generatedOutput2 += delta;
    }
    setOutput2(generatedOutput2);
  }, []);

  useEffect(() => {
    const lastMessageContent = lastAssistantMessage?.content;
    generateSuggestions(JSON.stringify(lastMessageContent));
  }, [lastAssistantMessage, generateSuggestions]);

  return (
    <div className="flex w-full space-x-2">
      <ThreadPrimitive.Suggestion
        prompt={output || ""}
        method="replace"
        autoSend
        asChild
      >
        <Button
          variant="outline"
          className="h-auto flex-1 p-2 rounded-md shadow-md text-sm font-medium text-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
          style={{ whiteSpace: "normal", wordWrap: "break-word" }}
        >
          {output || children}
        </Button>
      </ThreadPrimitive.Suggestion>
      <ThreadPrimitive.Suggestion
        prompt={output2 || ""}
        method="replace"
        autoSend
        asChild
      >
        <Button
          variant="outline"
          className="h-auto flex-1 p-2 rounded-md shadow-md text-sm font-medium text-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
          style={{ whiteSpace: "normal", wordWrap: "break-word" }}
        >
          {output2 || children}
        </Button>
      </ThreadPrimitive.Suggestion>
    </div>
  );
};

export default AI_ThreadSuggestion;
