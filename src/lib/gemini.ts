import { GoogleGenerativeAI } from "@google/generative-ai";
import { Message } from "@/types";
import { getFallbackAnalysis } from "./mockData";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(API_KEY);

const MODEL_NAME = "gemini-1.5-flash";

export const analyzeHealthData = async (
   text: string,
   imageBase64?: string
): Promise<string> => {
   try {
      const model = genAI.getGenerativeModel({ model: MODEL_NAME });

      const prompt = `You are an AI Health Assistant. Analyze the following health query or symptoms and provide a detailed, comprehensive health report.

Include:
- What the symptoms might indicate
- Possible causes or conditions
- Severity/urgency level
- Detailed recommendations and next steps  
- Any relevant medical advice
- Important disclaimers

Be thorough and informative, like a professional medical consultation summary.

User Query: ${text}`;

      const parts: any[] = [{ text: prompt }];

      if (imageBase64) {
         const base64Data = imageBase64.split(',')[1] || imageBase64;
         parts.push({
            inlineData: {
               mimeType: "image/jpeg",
               data: base64Data
            }
         });
      }

      const result = await model.generateContent(parts);
      const response = await result.response;
      return response.text();

   } catch (error) {
      console.error("Gemini API Error Details:", error);
      console.log("API Key present:", !!API_KEY);
      return getFallbackAnalysis(text);
   }
};

export const chatWithDoctor = async (
   history: Message[],
   newMessage: string
): Promise<string> => {
   try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const validHistory = history.filter(msg => msg.role === 'user' || msg.role === 'model');
      const firstUserIndex = validHistory.findIndex(msg => msg.role === 'user');

      let chatHistory: any[] = [];
      if (firstUserIndex !== -1) {
         chatHistory = validHistory.slice(firstUserIndex).map(msg => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }]
         }));
      }

      const chat = model.startChat({
         history: chatHistory,
      });

      const result = await chat.sendMessage(newMessage);
      const response = await result.response;
      return response.text();
   } catch (error) {
      console.error("Error in chat:", error);
      return "I'm having trouble connecting to the AI service. Please try again.";
   }
};
