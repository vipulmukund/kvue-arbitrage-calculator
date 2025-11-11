// Vercel Serverless Function to fetch stock prices
// This keeps your API key secure on the server

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Handle OPTIONS request for CORS
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Get ticker from query parameter
    const { ticker } = req.query;
    
    if (!ticker) {
        return res.status(400).json({ error: 'Ticker parameter is required' });
    }

    // Get API key from environment variable
    const API_KEY = process.env.API_KEY;
    
    if (!API_KEY) {
        return res.status(500).json({ error: 'API key not configured on server' });
    }

    try {
        // Fetch data from Financial Modeling Prep API
        const url = `https://financialmodelingprep.com/api/v3/quote/${ticker}?apikey=${API_KEY}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`FMP API returned status ${response.status}`);
        }
        
        const data = await response.json();
        
        // Return the data to the frontend
        return res.status(200).json(data);
        
    } catch (error) {
        console.error('Error fetching stock data:', error);
        return res.status(500).json({ 
            error: 'Failed to fetch stock data',
            details: error.message 
        });
    }
}

