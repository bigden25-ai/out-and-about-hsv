/**
 * Out & About HSV - Backend Search Function
 * Handles Google Places API calls securely from the backend
 */

export default async (req, context) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { 
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Get API key from environment variable (secure!)
  const API_KEY = Netlify.env.get('GOOGLE_PLACES_API_KEY');
  
  if (!API_KEY) {
    console.error('GOOGLE_PLACES_API_KEY not found in environment variables');
    return new Response(
      JSON.stringify({ error: 'API key not configured' }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  try {
    // Parse request body from frontend
    const requestData = await req.json();
    const { 
      location = '34.7304,-86.5861',  // Default to Huntsville
      radius = 8000,                   // Default 8km radius
      priceLevel,                      // 1-4 ($ to $$$$)
      keyword,                         // Combined features keyword
      openNow = false,
      pageToken                        // For pagination
    } = requestData;

    // Build Google Places API parameters
    const params = new URLSearchParams({
      location: location,
      radius: radius.toString(),
      key: API_KEY,
      type: 'restaurant|bar|cafe|night_club'
    });

    // Add optional parameters
    if (priceLevel) {
      params.append('minprice', priceLevel.toString());
      params.append('maxprice', priceLevel.toString());
    }

    if (keyword) {
      params.append('keyword', keyword);
    }

    if (openNow) {
      params.append('opennow', 'true');
    }

    if (pageToken) {
      params.append('pagetoken', pageToken);
    }

    // Make request to Google Places API
    const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?${params}`;
    
    console.log('Fetching places with params:', {
      location,
      radius,
      priceLevel,
      keyword: keyword ? keyword.substring(0, 50) + '...' : 'none',
      openNow
    });

    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`Google API returned ${response.status}`);
    }

    const data = await response.json();

    // Log results for debugging
    console.log(`Found ${data.results?.length || 0} places`);

    // Return successful response
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300' // Cache for 5 minutes
      }
    });

  } catch (error) {
    console.error('Search function error:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to fetch places',
        message: error.message 
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
