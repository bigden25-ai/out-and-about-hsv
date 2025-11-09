FRONTEND UPDATE INSTRUCTIONS
============================

In your index.html file, find the section where you make the Google Places API call.
You need to replace the client-side API call with a call to your new backend function.

FIND AND REMOVE:
----------------
Look for something like this in your index.html:

```javascript
// ❌ OLD - Client-side API call (REMOVE THIS)
const API_KEY = 'AIzaSyC...';  // Your API key
const params = new URLSearchParams({
  location: '34.7304,-86.5861',
  radius: 8000,
  key: API_KEY,
  // ... other params
});

const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?${params}`);
const data = await response.json();
```

REPLACE WITH:
-------------
```javascript
// ✅ NEW - Backend function call (ADD THIS)
const response = await fetch('/.netlify/functions/search', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    location: '34.7304,-86.5861',
    radius: 8000,
    priceLevel: selectedPrice,      // Your price level variable
    keyword: buildKeyword(),         // Your keyword building function
    openNow: true,                   // Or your openNow variable
    pageToken: null                  // For pagination if needed
  })
});

const data = await response.json();

// Check for errors
if (data.error) {
  console.error('Search error:', data.error);
  // Handle error in your UI
  return;
}

// Continue with your existing results handling code
// data.results will contain the places
```

SPECIFIC CHANGES NEEDED:
------------------------

1. REMOVE: Any line that defines API_KEY in your JavaScript
   - Delete: const API_KEY = 'AIzaSyC...';

2. REMOVE: Direct fetch to maps.googleapis.com
   - Delete the entire fetch call to the Google API

3. ADD: Fetch to your backend function
   - Use the code above with YOUR specific variables

4. UPDATE: Make sure you're sending the right parameters
   - priceLevel: the selected price (1-4)
   - keyword: the combined features string
   - openNow: whether to filter for open places
   - location: Huntsville coordinates
   - radius: search radius in meters

EXAMPLE COMPLETE SEARCH FUNCTION:
----------------------------------
```javascript
async function searchPlaces() {
  try {
    // Show loading state
    showLoadingSpinner();

    // Get user selections
    const selectedPrice = getPriceLevel();        // Your function
    const keyword = buildKeywordFromFeatures();   // Your function
    const openNow = document.getElementById('openNow')?.checked || true;

    // Call backend function
    const response = await fetch('/.netlify/functions/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        location: '34.7304,-86.5861',
        radius: 8000,
        priceLevel: selectedPrice,
        keyword: keyword,
        openNow: openNow
      })
    });

    const data = await response.json();

    // Handle errors
    if (data.error || !response.ok) {
      console.error('API Error:', data);
      showError('Failed to find places. Please try again.');
      return;
    }

    // Success! Process results
    if (data.results && data.results.length > 0) {
      displayResults(data.results);
    } else {
      showNoResults();
    }

  } catch (error) {
    console.error('Search failed:', error);
    showError('Network error. Please check your connection.');
  } finally {
    hideLoadingSpinner();
  }
}
```

TESTING LOCALLY:
----------------
Before deploying, test locally with Netlify CLI:

1. Install Netlify CLI (if not already):
   npm install -g netlify-cli

2. Run local dev server:
   netlify dev

3. Your site will run at http://localhost:8888
4. Functions will be at http://localhost:8888/.netlify/functions/search

CHECKLIST BEFORE DEPLOYING:
----------------------------
☐ Removed API_KEY from index.html
☐ Updated fetch call to use /.netlify/functions/search
☐ Changed to POST method
☐ Added Content-Type header
☐ Sending body as JSON.stringify()
☐ All parameter names match (location, radius, priceLevel, keyword, openNow)
☐ Error handling added
☐ Tested locally with netlify dev

AFTER DEPLOYING:
----------------
☐ Add GOOGLE_PLACES_API_KEY to Netlify environment variables
☐ Test on live site
☐ Check Netlify function logs for any errors
☐ Verify API key is NOT visible in browser dev tools
