# Kvue-arbitrage-calculator
KVUE/KMB Arbitrage Calculator - Auto-updating stock price analyzer

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vipulmukund/Kvue-arbitrage-calculator)

### Deployment Steps:

1. **Click the "Deploy" button above** OR follow manual steps below

2. **Manual Deployment:**
   ```bash
   # Install Vercel CLI
   npm install -g vercel
   
   # Deploy from project directory
   cd /path/to/Kvue-arbitrage-calculator
   vercel
   ```

3. **Add Environment Variable:**
   - After deployment, go to your [Vercel Dashboard](https://vercel.com/dashboard)
   - Select your project
   - Go to **Settings** → **Environment Variables**
   - Add:
     - **Name:** `API_KEY`
     - **Value:** Your Financial Modeling Prep API key
     - **Environments:** Production, Preview, Development (select all)
   - Click **Save**
   - **Redeploy** the project for changes to take effect

4. **Get a Free API Key:**
   - Visit [Financial Modeling Prep](https://financialmodelingprep.com/developer/docs/)
   - Sign up for a free account
   - Copy your API key

---

## 🏗️ Architecture

This project uses **Vercel Serverless Functions** to keep your API key secure:

- **Frontend:** `index.html` - Static HTML/JavaScript
- **Backend:** `/api/stock-price.js` - Serverless function that fetches stock data
- **Security:** API key is stored securely in Vercel environment variables (never exposed to users)

```
User → index.html → /api/stock-price → Financial Modeling Prep API
                         ↑
                    API_KEY (secure)
```

---

## 💻 Local Development

### Option 1: Test with Vercel Dev (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Create a local .env file
echo "API_KEY=your_api_key_here" > .env

# Run local development server
vercel dev

# Open http://localhost:3000
```

### Option 2: Simple Local Testing
For quick testing without the API functionality:
```bash
# Just open the HTML file
open index.html

# Or use a simple server
python3 -m http.server 8000
```
Note: API calls won't work locally without Vercel Dev or a backend server.

---

## 📊 How It Works

The calculator:
- Fetches real-time stock prices for **KVUE** (Kenvue) and **KMB** (Kimberly-Clark)
- Calculates the deal implied value based on merger terms:
  - Cash component: $3.50
  - Exchange ratio: 0.14625 KMB shares per KVUE share
- Shows the arbitrage spread percentage
- Auto-refreshes every 15 minutes

---

## 🔧 Project Structure

```
Kvue-arbitrage-calculator/
├── index.html              # Main frontend application
├── api/
│   └── stock-price.js     # Serverless function for fetching stock data
├── vercel.json            # Vercel configuration
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

---

## 🛠️ Tech Stack

- **Frontend:** Vanilla HTML, CSS, JavaScript
- **Backend:** Node.js (Vercel Serverless Functions)
- **Hosting:** Vercel
- **API:** Financial Modeling Prep

---

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `API_KEY` | Financial Modeling Prep API key | Yes |

---

## 🐛 Troubleshooting

### "Error fetching data" in the app
- Check that you've added the `API_KEY` environment variable in Vercel
- Make sure you've redeployed after adding the environment variable
- Verify your API key is valid at [FMP Dashboard](https://financialmodelingprep.com/developer/docs/)

### Local development not working
- Use `vercel dev` instead of opening the HTML file directly
- Create a `.env` file with your `API_KEY`

---

## 📄 License

MIT License - Feel free to use and modify!
