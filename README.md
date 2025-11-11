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

3. **That's it!** No API keys or environment variables needed.
   - The app uses Yahoo Finance API (free, no authentication required)
   - Just deploy and it works immediately

---

## 🏗️ Architecture

This project uses **Vercel Serverless Functions** for optimal performance:

- **Frontend:** `index.html` - Static HTML/JavaScript
- **Backend:** `/api/stock-price.js` - Serverless function that fetches stock data
- **Data Source:** Yahoo Finance API (free, no authentication needed)

```
User → index.html → /api/stock-price → Yahoo Finance API
                         (serverless)
```

---

## 💻 Local Development

### Option 1: Direct File Open (Easiest)
```bash
# Just open the HTML file in your browser
open index.html

# Or double-click index.html in Finder
```

### Option 2: Local Server
```bash
# Using Python
python3 -m http.server 8000
# Then visit http://localhost:8000

# Or using Node.js
npx serve
```

### Option 3: Vercel Dev (Most Similar to Production)
```bash
# Install Vercel CLI
npm install -g vercel

# Run local development server
vercel dev

# Open http://localhost:3000
```

All options work! No API keys or setup needed.

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
- **API:** Yahoo Finance (free, no authentication)

---

## 🐛 Troubleshooting

### "Error fetching data" in the app
- Refresh the page
- Check browser console for detailed errors (F12 or Cmd+Option+J)
- Verify you have internet connection
- Yahoo Finance API may occasionally be rate-limited

### CORS errors in local development
- Open the HTML file directly (double-click) instead of using a local server
- Or use `vercel dev` which handles CORS properly

---

## 📄 License

MIT License - Feel free to use and modify!
