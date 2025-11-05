import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import adaptationRoutes from './routes/adaptationRoutes.js';

// Carrega as variáveis de ambiente
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = join(__dirname, '..', '.env');

console.log('Tentando carregar .env do caminho:', envPath);
dotenv.config({ path: envPath });

// Log das variáveis de ambiente (sem mostrar a chave completa por segurança)
console.log('Variáveis de ambiente carregadas:', {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY ? 'Definida' : 'Não definida',
    GEMINI_MODEL: process.env.GEMINI_MODEL,
    PORT: process.env.PORT
});

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173', // URL do frontend Vite
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Middleware para logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// Rotas
app.use('/api/adaptor', adaptationRoutes);

// Rota de teste
app.get('/', (req, res) => {
    res.json({ message: 'Simplifica.ai API is running' });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});