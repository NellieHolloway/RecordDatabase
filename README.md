# Vinyl Vault - Record Collection Database

A beautiful, searchable database for your vinyl record collection. Built with vanilla HTML, CSS, and JavaScript - no frameworks required.

## Features

- 🔍 **Real-time search** - Filter by artist, album, year, label, or any text
- 📊 **Value tracking** - Historical values from 1980, 2000, and 2025
- 📐 **Condition grading** - Re-value the entire collection for any media grade (Mint → Good); values are baselined at Near Mint
- 📀 **Album artwork** - Display your actual record photos
- 📱 **Responsive design** - Works on desktop, tablet, and mobile
- ⚡ **No dependencies** - Pure HTML/CSS/JS, works anywhere

## How Values Are Estimated

The 2025 values are **model estimates, not appraisals** — a consistent starting point rather than a substitute for checking a specific pressing's recent sold listings.

- **Baselined at Near Mint.** The on-page **Grade** selector rescales every value (and all analytics) using typical condition spreads: M ×1.25, NM ×1.00, VG+ ×0.70, VG ×0.45, G ×0.25.
- **Calibrated** against 2025 Discogs/eBay sold medians for a sample spanning every tier of the collection.
- **Factor-driven:** era, pressing type (original vs. reissue/comp), format (multi-LP sets carry a premium), and per-title demand.
- **Mega-seller effect applied:** blockbusters such as *Rumours*, *Thriller*, or *The Joshua Tree* sold in enormous numbers, so clean copies stay modest ($15–45) despite their fame. Genuine scarcity — early-1960s originals, box sets, low-print pressings — carries the top of the range.

Last recalibrated May 2026.

## How to Host on GitHub Pages

1. **Create a new GitHub repository**
   - Go to github.com and click "New repository"
   - Name it something like `vinyl-collection` or `record-database`
   - Make it public
   - Don't initialize with README (you already have files)

2. **Upload your files**
   - Upload the entire contents of this folder to your repository:
     - `index.html`
     - `records.js`
     - `images/` folder (with all your album photos)

3. **Enable GitHub Pages**
   - Go to your repository Settings
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click Save

4. **Access your site**
   - Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
   - It may take a few minutes to deploy

## Adding New Records

Edit `records.js` and add a new object to the `records` array:

```javascript
{
    artist: "Artist Name",
    album: "Album Title",
    year: 1970,
    label: "Label Name (Catalog #)",
    pressing: "Original/Reissue, Country",
    chartPosition: "#X Billboard 200",
    interestingFact: "Something interesting about this album",
    value1980: "$X-X",  // Use "N/A" if released after 1980
    value2000: "$X-X",
    value2025: "$X-X",  // at Near Mint; the Grade selector rescales the rest
    value2025Num: 0,    // integer midpoint used by stats/analytics
    image: "images/your-image.jpg"
}
```

Then add the album image to the `images/` folder.

## File Structure

```
record-database/
├── index.html      # Main webpage
├── records.js      # Your record data (edit this to add records)
├── README.md       # This file
└── images/         # Album artwork
    ├── heavy-cream.jpg
    ├── live-cream-ii.jpg
    └── ... (more images)
```

## Current Collection

**778 records** spanning the late 1950s through the 1980s, with the core of the collection in 1960s–70s rock, pop, and singer-songwriter releases. Stats (total count, artist count, estimated value, average value, and year span) are computed automatically from `records.js` every time the page loads, so they update on their own whenever you add or remove an entry.

Estimated total value is approximately **$13,000 at Near Mint** (median record ~$13), after the May 2026 recalibration that re-anchored all 778 values to real 2025 market data. Use the Grade selector to see the total at other conditions.

Most recent addition: **Gary Puckett & The Union Gap — Greatest Hits** (Columbia CS 1042, 1970).

## License

This is your personal collection database. Do what you want with it! 🎵
