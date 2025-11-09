# Changelog

All notable changes to Out & About HSV will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2025-11-08

### Added
- Backend API function (`netlify/functions/search.mjs`) for secure Google Places API calls
- Netlify Functions integration for server-side API requests
- `netlify.toml` configuration file for deployment settings
- Environment variable support for API key management
- Comprehensive documentation package:
  - DEPLOYMENT_GUIDE.md
  - FRONTEND_UPDATE_INSTRUCTIONS.md
  - ARCHITECTURE.txt
  - CODE_CHANGES_COMPARISON.txt
  - INDEX_CHANGES.md
  - QUICK_REFERENCE.md
  - START_HERE.md

### Changed
- **BREAKING (Internal):** Migrated `searchPlaces()` function from Google Maps PlacesService to backend API
- Updated API call architecture from client-side to server-side
- Modified search request format to POST with JSON body
- Improved error handling in search functionality
- Enhanced security architecture with backend proxy pattern

### Removed
- `CONFIG.GOOGLE_API_KEY` from frontend code (moved to backend environment)
- Client-side API key validation checks
- Direct Google Places API calls from frontend

### Security
- **CRITICAL:** API key no longer exposed in frontend code
- API key now stored securely in Netlify environment variables
- Repository is now safe to make public
- Foundation established for rate limiting and request throttling
- Implemented secure backend proxy for API calls

### Technical
- Response caching headers added (5-minute cache)
- Improved API error messages and logging
- Backend function includes request validation
- Support for pagination tokens (future use)

---

## [1.0.0] - 2025-11-07

### Added
- Initial production release of Out & About HSV
- Single-file HTML application with embedded CSS and JavaScript
- Google Places API integration for venue discovery
- Interactive search form with:
  - Location input with geocoding
  - Radius slider (1-25 miles)
  - Price level dropdown ($ to $$$$)
  - Date and time pickers
- Six feature toggle buttons:
  - 🌳 Outdoor seating
  - 🎵 Live music
  - 🍺 Bar/Happy hour
  - 👨‍👩‍👧‍👦 Family-friendly
  - 💕 Romantic
  - 👥 Group accommodations
- Interactive Google Maps integration with:
  - Custom markers for results
  - Click-to-highlight functionality
  - Pan and zoom controls
  - Styled map (POI labels hidden)
- Result cards displaying:
  - Venue name and type
  - Distance from search location
  - Star rating and review count
  - Price level indicator
  - Open/closed status
  - Relevance score
  - Directions button
  - "Show on Map" button
- Filter and sort controls:
  - Type filter (All, Places, Events, Deals)
  - Sort options (Relevance, Distance, Rating)
- Smart scoring algorithm combining:
  - Distance from location
  - Rating quality
  - Price level availability
- Responsive design for mobile and desktop
- Loading spinner with animations
- "No results" message state
- Reset button to clear all filters
- Toggle map visibility
- Professional gradient UI design

### Technical
- Pure HTML/CSS/JavaScript (no build process)
- Google Maps JavaScript API
- Google Places API (client-side)
- Deployed on Netlify with continuous deployment
- Git version control with GitHub
- Semantic versioning adopted

---

## [Unreleased]

### Planned for v1.2.0
- Response caching to reduce API costs
- Rate limiting per user/IP
- Performance metrics and monitoring
- Error tracking integration

### Planned for v1.3.0
- PredictHQ events API integration
- Custom deals and offers data source
- Event calendar view
- Enhanced filtering options

### Planned for v2.0.0
- User authentication
- Saved searches and favorites
- Personalized recommendations
- Social sharing features
- Mobile application

---

## Version Links

- [1.1.0] - Backend API Migration (Current)
- [1.0.0] - Initial Release

## Notes

**Migration from v1.0.0 to v1.1.0:**
Users will not notice any UI changes. All functionality remains identical from a user perspective. The migration is purely architectural for improved security and scalability.

**Breaking Changes:**
None for end users. Internal API structure changed but maintains backward compatibility with the frontend.

---

**Project:** Out & About HSV  
**Repository:** https://github.com/bigden25-ai/out-and-about-hsv  
**Live Site:** https://outandabouthsv.netlify.app  
**Maintainer:** Denver (bigden25-ai)
