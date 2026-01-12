
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getExpertAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "You are an expert technical advisor for industrial bronze components. You provide precise, professional, and helpful advice on pipe fittings, valves, and metal durability. Your tone is professional and expert. Keep responses relatively concise but thorough.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my technical knowledge base right now. Please try again in a moment.";
  }
};
