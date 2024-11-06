import { LangChainAdapter} from "ai";
import { model,FormatMessagesPrompt } from "@/lib/ai/allam";
import { SystemPrompts } from "@/lib/ai/Prompts";

export async function POST(req: Request) {
  let { messages } = await req.json();
    messages=[{
      role:"system",
      content:SystemPrompts.sys_ar_1,
    },...messages];
  const formatmessages = FormatMessagesPrompt(messages);
  const stream = await model.stream(formatmessages);
  
  return LangChainAdapter.toDataStreamResponse(stream);
}