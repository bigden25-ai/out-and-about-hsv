QUICK REFERENCE - Backend API Migration
========================================

📦 FILES TO ADD
---------------
netlify.toml                    → Project root
netlify/functions/search.mjs    → Create directory structure

🔄 CODE CHANGES IN index.html
------------------------------

REMOVE:
const API_KEY = 'AIzaSyC...';

REPLACE:
fetch(`https://maps.googleapis.com/maps/api/place/...?key=${API_KEY}`)

WITH:
fetch('/.netlify/functions/search', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    location: '34.7304,-86.5861',
    radius: 8000,
    priceLevel: yourPriceVar,
    keyword: yourKeywordVar,
    openNow: true
  })
})

🔐 NETLIFY SETUP
----------------
Site Settings → Environment variables → Add variable

Name:  GOOGLE_PLACES_API_KEY
Value: [Your API key]
Scope: ✅ Functions (must be checked!)

🧪 TEST LOCALLY
---------------
npm install -g netlify-cli
netlify dev

Visit: http://localhost:8888

📤 DEPLOY
---------
git add .
git commit -m "Add backend API"
git push

✅ VERIFY
---------
1. Function appears in Netlify dashboard
2. Search works on live site
3. API key NOT in browser source
4. Check function logs for errors

🆘 QUICK FIXES
--------------
404 on function? → Check netlify.toml exists
Method not allowed? → Use POST, not GET
API key error? → Add env var with Functions scope
Still calling Google direct? → Update frontend fetch

💡 ENDPOINTS
------------
Local:  http://localhost:8888/.netlify/functions/search
Live:   https://outandabouthsv.netlify.app/.netlify/functions/search
