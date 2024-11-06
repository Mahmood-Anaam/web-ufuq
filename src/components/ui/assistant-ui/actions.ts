"use server";

import { createStreamableValue } from "ai/rsc";
import { model, FormatMessagesPrompt } from "@/lib/ai/allam";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { LangChainAdapter } from "ai";

export async function generate(input: string) {
  const stream = createStreamableValue("");
  let messages = [
    {
      role: "user",
      content: input,
    },
  ];
  const formatmessages = FormatMessagesPrompt(messages);

  (async () => {
    const textStream = await model.stream(formatmessages);

    for await (const delta of textStream) {
      stream.update(delta);
    }

    stream.done();
  })();

  return { output: stream.value };
}
