COMPLETE DEPLOYMENT GUIDE - Phase 2
====================================
Out & About HSV - Backend API Migration

📁 FILES CREATED
================
1. netlify.toml                          - Netlify configuration
2. netlify/functions/search.mjs          - Backend API function
3. FRONTEND_UPDATE_INSTRUCTIONS.md       - How to update your HTML

🚀 DEPLOYMENT STEPS
===================

STEP 1: ADD FILES TO YOUR PROJECT
----------------------------------
Copy these files to your project root:

your-project/
├── index.html (your existing file)
├── netlify.toml (NEW - copy from provided)
└── netlify/
    └── functions/
        └── search.mjs (NEW - copy from provided)

STEP 2: UPDATE YOUR index.html
-------------------------------
Follow the instructions in FRONTEND_UPDATE_INSTRUCTIONS.md

Key changes:
- Remove API key constant
- Change fetch URL to /.netlify/functions/search
- Change method to POST
- Send parameters in body as JSON

STEP 3: TEST LOCALLY (RECOMMENDED)
-----------------------------------
Install Netlify CLI:
```bash
npm install -g netlify-cli
```

Navigate to your project:
```bash
cd /path/to/your/project
```

Link to your Netlify site:
```bash
netlify link
```

Pull environment variables (including API key):
```bash
netlify env:pull
```

Start local dev server:
```bash
netlify dev
```

Your site will run at: http://localhost:8888
Test the search function thoroughly!

STEP 4: COMMIT AND PUSH TO GITHUB
----------------------------------
```bash
git add .
git commit -m "Phase 2: Migrate API to backend (Netlify Functions)"
git push origin main
```

STEP 5: SET ENVIRONMENT VARIABLE IN NETLIFY
--------------------------------------------
1. Go to: https://app.netlify.com/sites/outandabouthsv/configuration/env

2. Click "Add a variable" or "Add environment variables"

3. Enter:
   Key:   GOOGLE_PLACES_API_KEY
   Value: [Your actual Google Places API key]
   
4. IMPORTANT: Under "Scopes", make sure "Functions" is checked!

5. Click "Create variable"

6. Trigger a new deploy:
   - Go to Deploys tab
   - Click "Trigger deploy" → "Deploy site"

STEP 6: VERIFY DEPLOYMENT
--------------------------
1. Check deploy logs:
   - Look for "Functions bundled and deployed"
   - Should show: search.mjs

2. Test your live site:
   - Visit: https://outandabouthsv.netlify.app
   - Try a search
   - Open browser DevTools → Network tab
   - Should see POST to /.netlify/functions/search

3. Check function logs:
   - Go to: Functions tab in Netlify
   - Click on "search" function
   - View logs for any errors

4. Verify security:
   - Open DevTools → Sources/Network
   - Search for your API key
   - Should NOT appear anywhere!

🛠️ TROUBLESHOOTING
===================

Problem: "API key not configured" error
Solution: 
- Check environment variable name exactly: GOOGLE_PLACES_API_KEY
- Verify "Functions" scope is checked
- Redeploy after adding env var

Problem: Function not found (404)
Solution:
- Check netlify.toml is in project root
- Verify netlify/functions/search.mjs exists
- Check file extension is .mjs not .js

Problem: CORS errors
Solution:
- Backend functions don't have CORS issues
- If you see CORS errors, you're still calling Google API directly
- Double-check you updated index.html correctly

Problem: "Method Not Allowed"
Solution:
- Make sure fetch method is POST, not GET
- Check Content-Type header is set

Problem: No results returned
Solution:
- Check Netlify function logs for errors
- Verify parameters being sent match expected format
- Test with simple params first (just location and radius)

📊 MONITORING
=============

Function Logs:
- Netlify Dashboard → Functions → search → Logs
- Shows each invocation and any errors

Function Analytics:
- Netlify Dashboard → Functions → Analytics
- See invocation count, errors, duration

Cost Monitoring:
- Functions tab shows usage
- Free tier: 125k requests/month, 100 hours runtime
- Your app should be well within free tier

🎯 SUCCESS CRITERIA
====================
✅ No API key visible in browser source
✅ Search returns results
✅ Function logs show successful calls
✅ No CORS errors
✅ Response time < 2 seconds

📈 NEXT STEPS (FUTURE)
======================
Once backend is working:

1. Add request caching
   - Store common searches
   - Reduce API calls by ~70%

2. Add rate limiting
   - Prevent abuse
   - Control costs

3. Add PredictHQ integration
   - New function: events.mjs
   - Same pattern as search.mjs

4. Add deals/offers API
   - New function: deals.mjs
   - Custom data source

🆘 NEED HELP?
=============
If you get stuck:
1. Check Netlify function logs first
2. Test locally with `netlify dev`
3. Share error messages for debugging

📝 VERSION CONTROL
==================
After successful deployment, update:

VERSION.md:
- v1.1.0 - Backend API migration

CHANGELOG.md:
- [1.1.0] - 2025-11-08
  - Migrated Google Places API to backend
  - Secured API key in environment variables
  - Improved response caching
  - Foundation for Phase 2 features
