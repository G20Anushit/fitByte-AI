import { GoogleGenerativeAI } from "@google/generative-ai";
require("dotenv").config();

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function getBulletPointAnswer(userQuestion) {
  const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
You are a fitness assistant. Answer the following fitness-related question in **structured JSON** format.

Format:
{
  "question": <original question>,
  "category": <fitness category>,
  "answer": [array of short bullet points within 50 words],
  "motivation": <motivational quote or tip>
  timestamp: "2025-06-24T17:20:03.323Z"  // ISO string
}

Example:
{
  "question": "Suggest a beginner home workout plan",
  "category": "Workout Plan",
  "answer": [
    "Monday: 10 squats, 3 sets",
    "Tuesday: 15 push-ups, 2 sets",
    "Wednesday: 20 jumping jacks, 3 sets"
  ],
  "motivation": "Stay consistent and track your progress."
  timestamp: "2025-06-24T17:20:03.323Z"  // ISO string
}

Now answer this:
Question: ${JSON.stringify(userQuestion)}

Give the response in JSON only. Do not include markdown or code formatting.
`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

// (async () => {
//   const answer = await getBulletPointAnswer("diet plan for weight loss");
//   console.log(answer);
// })();

