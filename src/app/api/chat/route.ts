
import { model,FormatMessagesPrompt } from "@/lib/ai/allam";
import { SystemPrompts } from "@/lib/ai/Prompts";
import { LangChainAdapter, Message,StreamData } from 'ai';
import { AIMessage, HumanMessage } from '@langchain/core/messages';


export const maxDuration = 30;

export async function POST(req: Request) {

  const { messages }: { messages: Message[] } = await req.json();
  const  newmessages=[{
      role:"system",
      content:SystemPrompts.sys_ar_1,
    },...messages];
  const formatmessages = FormatMessagesPrompt(newmessages);

  const stream = await model.stream(formatmessages);
  

  const data = new StreamData();
  data.append({ test: 'value' });

  return LangChainAdapter.toDataStreamResponse(stream, {
    data,
    callbacks: {
      onFinal() {
        data.close();
      },
    },
  });
}