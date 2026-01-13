require('dotenv').config();
const axios = require('axios');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const apiClient = require('./apiClient');

app.get('/api/fun-fact', async (req, res) => {
    try {
        const response = await apiClient.get('/facts/random');
        const randomFactData = response.data;
        // Transform the data
        const randomFact = randomFactData.map(data => ({
            fact: data.text
        }));

        res.json(randomFact);
    } catch (error) {
        if (error.response) {
            console.error('API Error:', error.response.status, error.response.data);
            res.status(error.response.status).json({ message: 'Error fetching data from external API.' });
        } else {
            console.error('Network Error:', error.message);
            res.status(500).json({ message: 'A network error occurred,' });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});