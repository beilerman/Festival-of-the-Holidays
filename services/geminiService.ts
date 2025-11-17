
import { GoogleGenAI } from "@google/genai";
import { Kitchen } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This is a fallback for development environments where the key might not be set.
  // In the target runtime, process.env.API_KEY is expected to be available.
  console.warn("API_KEY is not set. Gemini features will be disabled.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const getMealSuggestion = async (
  userInput: string,
  menuData: Kitchen[]
): Promise<string> => {
  if (!API_KEY) {
    return Promise.reject(new Error("API key is not configured."));
  }

  const model = 'gemini-2.5-flash';

  const systemInstruction = `You are a helpful and knowledgeable nutrition assistant for individuals with diabetes visiting the EPCOT Festival of the Holidays. Your goal is to help them plan meals based on their dietary needs, specifically their carbohydrate budget. You must only use the provided JSON menu data to make your suggestions. Do not invent any food items. When you make a suggestion, list the item name, its kitchen, and its carbohydrate count. Be friendly and encouraging, and always format your response using markdown.`;

  const prompt = `
    User Request: "${userInput}"
    ---
    JSON Menu Data:
    ${JSON.stringify(menuData, null, 2)}
  `;

  try {
    // FIX: Moved the system instruction to the `config` object to align with Gemini API best practices.
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get suggestions from the AI. Please try again.");
  }
};
