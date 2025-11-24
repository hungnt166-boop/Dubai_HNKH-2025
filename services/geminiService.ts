import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { TRIP_CONTEXT } from '../constants';

let chatSession: Chat | null = null;

export const initializeGemini = (): Chat | null => {
  if (chatSession) return chatSession;
  
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY not found in environment variables");
    return null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: TRIP_CONTEXT,
        temperature: 0.7,
        topK: 40,
        maxOutputTokens: 1000,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize Gemini chat:", error);
    return null;
  }
};

export const sendMessageToGemini = async (
  message: string,
  onChunk: (text: string) => void
): Promise<string> => {
  const chat = initializeGemini();
  if (!chat) {
    return "Xin lỗi, hệ thống AI chưa được cấu hình (Thiếu API Key).";
  }

  try {
    const resultStream = await chat.sendMessageStream({ message });
    
    let fullText = "";
    for await (const chunk of resultStream) {
       const responseChunk = chunk as GenerateContentResponse;
       const text = responseChunk.text || "";
       fullText += text;
       onChunk(fullText); 
    }
    return fullText;

  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Xin lỗi, tôi đang gặp sự cố kết nối. Vui lòng thử lại sau.";
  }
};