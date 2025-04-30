import * as dotenv from "dotenv";
dotenv.config();

console.log(process.env.OPENAI_API_KEY);

import OpenAI from "openai";

export async function aiAnalysis(userMessage) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `only say yes or no, should follow up for mkt service sale? ${userMessage}`,
      },
    ],
  });

  gptAnswer = response.choices[0].message.content;

  return gptAnswer;
}
// aiAnalysis();
