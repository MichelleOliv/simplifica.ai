import express from 'express';
import adaptationService from '../services/adaptationService.js';

const router = express.Router();

router.post('/adapt', async (req, res) => {
    try {
        console.log('Received request body:', req.body);
        const { original_text, user_observation } = req.body;

        if (!original_text) {
            return res.status(400).json({ 
                error: 'Original text is required' 
            });
        }

        // console.log('Calling adaptation service with:', { original_text, user_observation });
        const adaptedText = await adaptationService.adaptText(
            original_text, 
            user_observation
        );

        res.json({ adapted_text: adaptedText });
    } catch (error) {
        console.error('Error in adaptation route:', error);
        console.error('Error details:', {
            message: error.message,
            stack: error.stack,
            name: error.name
        });
        res.status(500).json({ 
            error: 'Internal server error during text adaptation',
            details: error.message
        });
    }
});

export default router;