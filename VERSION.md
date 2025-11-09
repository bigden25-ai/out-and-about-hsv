# Out & About HSV - Version History

## Current Version: v1.1.0

**Release Date:** November 8, 2025  
**Status:** Production  
**Architecture:** Backend API with Netlify Functions

---

## Version History

### v1.1.0 (November 8, 2025)
**Phase 2: Backend API Migration**

#### Major Changes
- Migrated Google Places API calls from client-side to secure backend
- Implemented Netlify Functions for API proxy
- API key now stored securely in environment variables
- Established professional backend architecture

#### Security Improvements
- API key no longer exposed in frontend code
- Repository now safe for public access
- Foundation for rate limiting and caching

#### Technical Updates
- Added `netlify.toml` configuration
- Created `netlify/functions/search.mjs` backend function
- Updated `searchPlaces()` function to use backend API
- Removed API key from CONFIG object
- Improved error handling

#### Benefits
- Secure API key management
- Foundation for Phase 2 features (caching, additional APIs)
- Professional, scalable architecture
- Ready for cost optimization

---

### v1.0.0 (November 7, 2025)
**Initial Production Release**

#### Features
- Single-file HTML application
- Google Places API integration
- Interactive search with location and radius
- Price level filtering ($ to $$$$)
- Six feature toggles:
  - Outdoor seating
  - Live music
  - Bar/Happy hour
  - Family-friendly
  - Romantic
  - Group accommodations
- Time selection with 15-minute intervals
- Interactive Google Maps integration
- Result cards with ratings, distance, and photos
- Smart scoring algorithm
- Responsive design

#### Technical Stack
- Pure HTML/CSS/JavaScript
- Google Maps JavaScript API
- Google Places API
- Deployed on Netlify

---

## Roadmap

### v1.2.0 (Planned)
- Response caching (70% API cost reduction)
- Rate limiting implementation
- Performance optimizations

### v1.3.0 (Planned)
- PredictHQ events integration
- Custom deals/offers API
- Event calendar view

### v2.0.0 (Future)
- User accounts and saved preferences
- Social features
- Mobile app

---

## Deployment Information

**Live URL:** https://outandabouthsv.netlify.app  
**Repository:** GitHub (Private → Public ready)  
**Hosting:** Netlify  
**CDN:** Netlify Edge Network  
**Backend:** Netlify Functions (Node.js)

---

## Version Numbering

This project follows [Semantic Versioning](https://semver.org/):
- **MAJOR** (x.0.0): Breaking changes
- **MINOR** (0.x.0): New features, backwards compatible
- **PATCH** (0.0.x): Bug fixes

Current: **1.1.0**
- Major: 1 (stable release)
- Minor: 1 (backend migration feature)
- Patch: 0 (no bug fixes yet)
