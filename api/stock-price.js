// Vercel Serverless Function to fetch stock prices
// Uses Yahoo Finance API (free, no API key needed)

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

    try {
        // Fetch data from Yahoo Finance API (free, no key needed)
        const url = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1d&range=1d`;
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        
        if (!response.ok) {
            throw new Error(`Yahoo Finance API returned status ${response.status}`);
        }
        
        const data = await response.json();
        
        // Extract the price and convert to FMP-like format for compatibility
        const price = data.chart?.result?.[0]?.meta?.regularMarketPrice;
        
        if (!price) {
            throw new Error('Unable to extract price from API response');
        }
        
        // Return in FMP-compatible format
        return res.status(200).json([{ price: price }]);
        
    } catch (error) {
        console.error('Error fetching stock data:', error);
        return res.status(500).json({ 
            error: 'Failed to fetch stock data',
            details: error.message 
        });
    }
}

