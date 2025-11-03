import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = join(__dirname, '..', '.env');

console.log('Caminho do .env:', envPath);
const result = dotenv.config({ path: envPath });

if (result.error) {
    console.error('Erro ao carregar .env:', result.error);
} else {
    console.log('Arquivo .env carregado com sucesso');
}

console.log('Variáveis de ambiente:', {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY ? 'Definida (primeiros 10 caracteres: ' + process.env.GEMINI_API_KEY.substring(0, 10) + '...)' : 'Não definida',
    GEMINI_MODEL: process.env.GEMINI_MODEL,
    PORT: process.env.PORT
});