import { GoogleGenerativeAI } from '@google/generative-ai';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carrega as variáveis de ambiente
const envPath = path.join(__dirname, '..', '..', '.env');
dotenv.config({ path: envPath });

class AdaptationService {
    constructor() {
        console.log('Iniciando construção do AdaptationService');
        
        // Verificar e logar status da API key
        const apiKey = process.env.GEMINI_API_KEY;
        console.log('Status da API Key:', apiKey ? 'Presente' : 'Ausente');
        
        if (!apiKey) {
            console.error('GEMINI_API_KEY não encontrada nas variáveis de ambiente');
            throw new Error('GEMINI_API_KEY não está definida nas variáveis de ambiente');
        }

        // Inicializar o cliente Gemini
        try {
            console.log('Inicializando serviço com modelo:', process.env.GEMINI_MODEL || "gemini-2.5-flash");
            this.genAI = new GoogleGenerativeAI(apiKey);
            this.model = this.genAI.getGenerativeModel({ 
                model: process.env.GEMINI_MODEL || "gemini-2.5-flash"
            });
            console.log('Serviço Gemini inicializado com sucesso');
        } catch (error) {
            console.error('Erro ao inicializar o serviço Gemini:', error);
            throw error;
        }
    }

    async loadSystemPrompt() {
        const promptPath = path.join(__dirname, '..', 'prompts', 'system_prompt.md');
        try {
            return await fs.readFile(promptPath, 'utf-8');
        } catch (error) {
            console.error('Error loading system prompt:', error);
            throw new Error('Failed to load system prompt');
        }
    }

    async adaptText(inputText, userObservation = "") {
        try {
            const systemInstruction = await this.loadSystemPrompt();
            const userPrompt = `Observação do usuário: ${userObservation}\n\n` +
                             `Texto a adaptar:\n${inputText}`;

            const result = await this.model.generateContent({
                contents: [
                    { role: "model", parts: [{ text: systemInstruction }] },
                    { role: "user", parts: [{ text: userPrompt }] }
                ],
                generationConfig: { temperature: 0.3 },
            });

            const response = await result.response;
            
            // Retorna o texto diretamente da API sem manipulação
            console.log('Texto processado com sucesso');
            return response.text();
        } catch (error) {
            console.error('Error adapting text:', error);
            throw new Error('Failed to adapt text');
        }
    }
}

export default new AdaptationService();