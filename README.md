# Kvue-arbitrage-calculator
kvue kmb arb calculator

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/YOUR-USERNAME/Kvue-arbitrage-calculator.git
cd Kvue-arbitrage-calculator
```

### 2. Configure your API key
```bash
# Copy the example config file
cp config.example.js config.js

# Edit config.js and add your Financial Modeling Prep API key
# Get your free API key at: https://financialmodelingprep.com/developer/docs/
```

### 3. Run locally
Simply open `index.html` in your browser or use a local server:
```bash
# Option 1: Direct open
open index.html

# Option 2: Python server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### 4. Deploy to GitHub Pages
The `config.js` file is gitignored for security. For GitHub Pages deployment, you have two options:

**Option A: Use GitHub Secrets (Recommended)**
- Store your API key in GitHub repository secrets
- Use GitHub Actions to inject it during deployment

**Option B: Manual config.js upload**
- After enabling GitHub Pages, manually upload `config.js` to your repo
- ⚠️ Warning: This will expose your API key publicly

## How It Works
- Fetches real-time KVUE and KMB stock prices
- Calculates arbitrage spread based on merger terms
- Auto-refreshes every 15 minutes
