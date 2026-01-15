import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { MENU_ITEMS } from "../constants";

// Prepare context for the AI
const menuContext = MENU_ITEMS.map(item => 
  `- ${item.name} (${item.category}): €${item.price}. ${item.description}. ${item.isVegetarian ? '[Vegetariano]' : ''} ${item.isGlutenFree ? '[Senza Glutine]' : ''} ${item.isSpicy ? '[Piccante]' : ''}`
).join('\n');

const SYSTEM_INSTRUCTION = `
Sei un esperto cameriere virtuale e sommelier del ristorante "Sir Jasper's".
Il tuo compito è aiutare i clienti a conoscere i piatti dal menu, suggerire abbinamenti di vini e rispondere a domande sugli ingredienti.

Ecco il menu del ristorante:
${menuContext}

Regole:
1. Rispondi sempre in Italiano in modo cortese, professionale ma accogliente.
2. Usa le informazioni del menu fornito per dare consigli precisi.
3. Se un cliente ha restrizioni alimentari (es. celiachia, vegetariano), suggerisci solo piatti adatti.
4. Sii conciso. Non fare liste lunghissime se non richieste.
5. Se ti chiedono un piatto che non è nel menu, scusati gentilmente e proponi un'alternativa simile presente nel menu.
6. Per i vini, proponi sempre l'abbinamento migliore basato sui piatti scelti o sui gusti del cliente.
`;

let chatInstance: Chat | null = null;

export const getGeminiChat = (): Chat => {
  if (chatInstance) return chatInstance;

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatInstance = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });

  return chatInstance;
};

export const sendMessageToGemini = async (message: string): Promise<AsyncIterable<GenerateContentResponse>> => {
  const chat = getGeminiChat();
  return await chat.sendMessageStream({ message });
};