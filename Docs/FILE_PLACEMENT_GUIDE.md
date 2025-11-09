📥 DOWNLOAD & PLACEMENT GUIDE - v1.1.0
=======================================

Here's exactly what to download and where it goes:

═══════════════════════════════════════════════════════════
PART 1: FILES TO ADD TO YOUR PROJECT (Required)
═══════════════════════════════════════════════════════════

1. 📄 index-updated.html (44 KB)
   └─→ RENAME to: index.html
       LOCATION: Project root
       ACTION: Replace existing index.html
       
2. 📄 netlify.toml (136 bytes)
   └─→ LOCATION: Project root
       ACTION: Create new file
       
3. 📄 search.mjs (3 KB)
   └─→ LOCATION: netlify/functions/search.mjs
       ACTION: Create folder structure first!
       STEPS: 
       1. Create folder: netlify
       2. Inside that, create folder: functions
       3. Place search.mjs inside functions
       
4. 📄 VERSION.md (2.6 KB)
   └─→ LOCATION: Project root
       ACTION: Create new file
       
5. 📄 CHANGELOG.md (4.5 KB)
   └─→ LOCATION: Project root
       ACTION: Create new file

═══════════════════════════════════════════════════════════
PART 2: DOCUMENTATION FILES (Read, but don't add to project)
═══════════════════════════════════════════════════════════

📖 START_HERE.md                     ← START WITH THIS!
📖 COMPLETE_PACKAGE_SUMMARY.md       ← Overview of everything
📖 VERSION_GUIDE.md                  ← How to maintain versions
📖 DEPLOYMENT_GUIDE.md               ← Full deployment steps
📖 INDEX_CHANGES.md                  ← What changed in index.html
📖 CODE_CHANGES_COMPARISON.txt       ← Code before/after
📖 ARCHITECTURE.txt                  ← Architecture diagrams
📖 QUICK_REFERENCE.md                ← One-page cheat sheet
📖 README.md                         ← Package overview

═══════════════════════════════════════════════════════════
VISUAL DIRECTORY STRUCTURE
═══════════════════════════════════════════════════════════

BEFORE (v1.0.0):
────────────────
out-and-about-hsv/
├── index.html
├── README.md
└── SETUP-GUIDE.md

AFTER (v1.1.0):
───────────────
out-and-about-hsv/
├── index.html              ← UPDATED (from index-updated.html)
├── netlify.toml            ← NEW
├── netlify/                ← NEW FOLDER
│   └── functions/          ← NEW FOLDER
│       └── search.mjs      ← NEW
├── VERSION.md              ← NEW
├── CHANGELOG.md            ← NEW
├── README.md               ← Existing
└── SETUP-GUIDE.md          ← Existing

═══════════════════════════════════════════════════════════
STEP-BY-STEP FILE PLACEMENT
═══════════════════════════════════════════════════════════

Step 1: Download All Files
---------------------------
Download all 5 core files from the outputs folder

Step 2: Open Your Project Folder
---------------------------------
Navigate to: out-and-about-hsv/ (or wherever your project is)

Step 3: Replace index.html
---------------------------
1. Rename index-updated.html to index.html
2. Replace your existing index.html with this new one
3. ✅ Done!

Step 4: Add netlify.toml
-------------------------
1. Copy netlify.toml to project root
2. Should be at same level as index.html
3. ✅ Done!

Step 5: Create Netlify Function
--------------------------------
1. In project root, create new folder: netlify
2. Inside netlify, create new folder: functions
3. Copy search.mjs into: netlify/functions/
4. Final path: netlify/functions/search.mjs
5. ✅ Done!

Step 6: Add Version Files
--------------------------
1. Copy VERSION.md to project root
2. Copy CHANGELOG.md to project root
3. Both at same level as index.html
4. ✅ Done!

═══════════════════════════════════════════════════════════
VERIFICATION CHECKLIST
═══════════════════════════════════════════════════════════

Open your project folder and verify you see:

☐ index.html (should show "Updated for backend API" in comments)
☐ netlify.toml
☐ netlify/ (folder)
  ☐ functions/ (folder inside netlify)
    ☐ search.mjs (file inside functions)
☐ VERSION.md
☐ CHANGELOG.md

If you see all of these, you're ready to commit! ✅

═══════════════════════════════════════════════════════════
IN CURSOR - COMMIT PROCESS
═══════════════════════════════════════════════════════════

1. Open Cursor
2. Open your project folder
3. Click Source Control icon (left sidebar)
4. You should see 5 changed/new files:
   - index.html (modified)
   - netlify.toml (new)
   - netlify/functions/search.mjs (new)
   - VERSION.md (new)
   - CHANGELOG.md (new)

5. Click + next to "Changes" to stage all
6. Type commit message:
   
   v1.1.0 - Backend API Migration
   
7. Click ✓ checkmark
8. Click "Sync Changes"
9. ✅ Pushed to GitHub!

═══════════════════════════════════════════════════════════
WHAT HAPPENS NEXT
═══════════════════════════════════════════════════════════

1. GitHub receives your code
2. Netlify detects the push
3. Netlify starts building
4. Netlify deploys:
   - Your updated index.html
   - Your backend function
5. Your site is live with v1.1.0!

Watch deployment at:
https://app.netlify.com/sites/outandabouthsv/deploys

═══════════════════════════════════════════════════════════
DON'T FORGET!
═══════════════════════════════════════════════════════════

⚠️  CRITICAL: Add environment variable in Netlify!

Go to:
https://app.netlify.com/sites/outandabouthsv/configuration/env

Add:
Name:  GOOGLE_PLACES_API_KEY
Value: AIzaSyCLLD1Sndvf0KevXt_kZJHfU4E_6ck4Thw
Scope: ✅ Functions (CHECK THIS BOX!)

Without this, your backend function won't work!

═══════════════════════════════════════════════════════════
FILE SIZE REFERENCE
═══════════════════════════════════════════════════════════

Core Files (Total: ~50 KB):
- index-updated.html:    44 KB
- search.mjs:            3 KB
- CHANGELOG.md:          4.5 KB
- VERSION.md:            2.6 KB
- netlify.toml:          136 bytes

Documentation (Total: ~46 KB):
- COMPLETE_PACKAGE_SUMMARY.md:   6.6 KB
- CODE_CHANGES_COMPARISON.txt:   6.4 KB
- VERSION_GUIDE.md:              5.4 KB
- INDEX_CHANGES.md:              5.1 KB
- DEPLOYMENT_GUIDE.md:           5.0 KB
- FRONTEND_UPDATE_INSTRUCTIONS:  4.4 KB
- README.md:                     4.4 KB
- ARCHITECTURE.txt:              4.3 KB
- START_HERE.md:                 3.3 KB
- QUICK_REFERENCE.md:            1.6 KB

═══════════════════════════════════════════════════════════
QUICK TROUBLESHOOTING
═══════════════════════════════════════════════════════════

Can't find a file?
→ Check /mnt/user-data/outputs in Claude
→ All files are there

Netlify function not working?
→ Check file structure: netlify/functions/search.mjs
→ Check env var exists with Functions scope

Site not updating?
→ Check Netlify deploy logs
→ Look for errors

Still seeing old behavior?
→ Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
→ Clear browser cache

═══════════════════════════════════════════════════════════

Ready to go! Follow this guide and you'll be on v1.1.0 in 10 minutes! 🚀
