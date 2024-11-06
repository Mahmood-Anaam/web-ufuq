import { WatsonxLLM } from "@langchain/community/llms/ibm";

export const props = {
  decoding_method: "greedy", //"sample",
  max_new_tokens: 900,
  min_new_tokens: 0,
  temperature: 0.0,
  repetition_penalty:1.5,
};

export const model = new WatsonxLLM({
  version: "2023-05-29",
  watsonxAIAuthType: "iam",
  watsonxAIApikey: process.env.WATSONX_APIKEY,
  projectId: process.env.WATSONX_PROJECT_ID,
  serviceUrl: process.env.WATSONX_URL as string,
  model: process.env.MODEL_ID,
  ...props,
});

export const FormatMessagesPrompt = (messages:any) => {
  const startPrompt = `<s>[INST] `;
  const endPrompt = ` [/INST]`;
  const conversation = messages.map(({ content, role }:any, index:any) => {
    if (role === "user") {
      return content.trim();
    } else if (role === "assistant") {
      return ` [/INST] ${content}</s><s>[INST] `;
    } else if (role === "function") {
      throw new Error("Llama 2 does not support function calls.");
    } else if (role === "system" && index === 0) {
      return `<<SYS>>\n${content}\n<</SYS>>\n\n`;
    } else {
      throw new Error(`Invalid message role: ${role}`);
    }
  });

  return startPrompt + conversation.join("") + endPrompt;
};
