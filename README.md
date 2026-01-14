# Vinyl Vault - Record Collection Database

A beautiful, searchable database for your vinyl record collection. Built with vanilla HTML, CSS, and JavaScript - no frameworks required.

## Features

- 🔍 **Real-time search** - Filter by artist, album, year, label, or any text
- 📊 **Value tracking** - Historical values from 1980, 2000, and 2025
- 📀 **Album artwork** - Display your actual record photos
- 📱 **Responsive design** - Works on desktop, tablet, and mobile
- ⚡ **No dependencies** - Pure HTML/CSS/JS, works anywhere

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
    value2025: "$X-X",
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



## License

This is your personal collection database. Do what you want with it! 🎵
