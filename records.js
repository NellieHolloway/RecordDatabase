// Record Collection Database
// Add new records by copying the template below and filling in the details
// Image paths should be relative to index.html or use full URLs

const records = [
    {
        artist: "Cream",
        album: "Heavy Cream",
        year: 1972,
        label: "Polydor (PD 3502)",
        pressing: "Original US pressing, 2LP compilation",
        chartPosition: "#135 Billboard 200",
        interestingFact: "This comprehensive 22-track compilation was released after Cream disbanded to leverage their back catalog when Polydor regained US distribution rights from Atco/Atlantic. It features a distinctive die-cut embossed cover.",
        value1980: "$8-12",
        value2000: "$10-15",
        value2025: "$10-20",
        image: "images/heavy-cream.jpg"
    },
    {
        artist: "Cream",
        album: "Live Cream Volume II",
        year: 1972,
        label: "Atco (SD 7005)",
        pressing: "Original US pressing",
        chartPosition: "#27 Billboard 200",
        interestingFact: "The epic 'Steppin' Out' from this album was featured in the dramatic climax of Martin Scorsese's Mean Streets (1973). The album was released 4 years after Cream disbanded.",
        value1980: "$8-12",
        value2000: "$12-18",
        value2025: "$15-25",
        image: "images/live-cream-ii.jpg"
    },
    {
        artist: "Rita Coolidge",
        album: "Nice Feelin'",
        year: 1971,
        label: "A&M Records (SP-4325)",
        pressing: "Original US pressing, gatefold",
        chartPosition: "US Top 200",
        interestingFact: "Produced by David Anderle with The Dixie Flyers as the studio band, featuring legendary engineer Glyn Johns at the mixing desk. Rita was a sought-after session vocalist before her solo career.",
        value1980: "$4-6",
        value2000: "$5-8",
        value2025: "$5-12",
        image: "images/rita-coolidge.jpg"
    },
    {
        artist: "Sam Cooke",
        album: "The Best of Sam Cooke",
        year: 1962,
        label: "RCA Victor (AYL1-3863)",
        pressing: "Reissue pressing",
        chartPosition: "N/A (compilation)",
        interestingFact: "Sam Cooke is known as the 'King of Soul' for his distinctive vocals and pioneering influence on popular music. This compilation contains his biggest hits from 1957-1962 including 'You Send Me' and 'Chain Gang'.",
        value1980: "$6-10",
        value2000: "$8-15",
        value2025: "$15-30",
        image: "images/sam-cooke.jpg"
    },
    {
        artist: "The Contours",
        album: "Do You Love Me (Now That I Can Dance)",
        year: 1962,
        label: "Motown (M5-188V1)",
        pressing: "Reissue pressing",
        chartPosition: "#3 Billboard Hot 100 / #1 R&B",
        interestingFact: "Berry Gordy wrote the title track for The Temptations, but they were at church when he needed to record it. The Contours happened to walk in and got their big break. The song charted TWICE - in 1962 and again in 1988 after appearing in Dirty Dancing.",
        value1980: "$10-15",
        value2000: "$15-25",
        value2025: "$20-40",
        image: "images/contours.jpg"
    },
    {
        artist: "Tommy Conwell and The Young Rumblers",
        album: "Walkin' on the Water",
        year: 1986,
        label: "Antenna Records",
        pressing: "Original independent pressing",
        chartPosition: "Did not chart (indie release)",
        interestingFact: "This independently released debut led to the band signing with Columbia Records. Their 1988 major label album 'Rumble' produced the #1 Mainstream Rock hit 'I'm Not Your Man'. The Philadelphia band was known for raw, high-energy live performances.",
        value1980: "N/A",
        value2000: "$3-8",
        value2025: "$5-15",
        image: "images/tommy-conwell.jpg"
    },
    {
        artist: "Commodores",
        album: "All The Great Hits",
        year: 1982,
        label: "Motown (6028ML)",
        pressing: "Original US pressing",
        chartPosition: "RIAA Gold certified",
        interestingFact: "This compilation was released just before Lionel Richie left for his solo career. It features two new songs: 'Painted Picture' (which hit #19 R&B) and 'Reach High', alongside classics like 'Three Times a Lady' and 'Brick House'.",
        value1980: "N/A",
        value2000: "$5-10",
        value2025: "$8-15",
        image: "images/commodores-hits.jpg"
    },
    {
        artist: "Commodores",
        album: "Midnight Magic",
        year: 1979,
        label: "Motown (M8-926M1)",
        pressing: "Original US pressing",
        chartPosition: "#3 Billboard 200",
        interestingFact: "Contains two massive hits: 'Sail On' (#4) and the #1 smash 'Still'. The album was nominated for a Grammy for Best R&B Performance by a Duo or Group. It marked the peak of Lionel Richie's ballad-writing dominance within the group.",
        value1980: "$6-10",
        value2000: "$8-12",
        value2025: "$10-20",
        image: "images/midnight-magic.jpg"
    },
    {
        artist: "Commodores",
        album: "In The Pocket",
        year: 1981,
        label: "Motown (M8-955M1)",
        pressing: "Original US pressing",
        chartPosition: "Contains #4 hit 'Oh No' and #8 hit 'Lady (You Bring Me Up)'",
        interestingFact: "This was Lionel Richie's final album with the Commodores before launching his mega-successful solo career. The iconic cover features the band's photo tucked into a denim pocket with embroidered logo.",
        value1980: "N/A",
        value2000: "$3-8",
        value2025: "$5-12",
        image: "images/in-the-pocket.jpg"
    },
    {
        artist: "Phil Collins",
        album: "Hello, I Must Be Going!",
        year: 1982,
        label: "Atlantic (80035-1)",
        pressing: "Original US pressing",
        chartPosition: "#2 UK / #8 US Billboard 200",
        interestingFact: "Features Collins' first solo #1 single: his upbeat cover of The Supremes' 'You Can't Hurry Love'. The album title references a Marx Brothers song. It stayed on UK charts for over a year and went triple platinum in the US.",
        value1980: "N/A",
        value2000: "$5-10",
        value2025: "$10-20",
        image: "images/phil-collins.jpg"
    }
];

/*
 * TEMPLATE FOR ADDING NEW RECORDS:
 * Copy the object below and add it to the records array above
 * 
 * {
 *     artist: "Artist Name",
 *     album: "Album Title",
 *     year: 1970,
 *     label: "Label Name (Catalog #)",
 *     pressing: "Original/Reissue, Country, Special notes",
 *     chartPosition: "#X Billboard 200 or 'Did not chart'",
 *     interestingFact: "A compelling fact about this album",
 *     value1980: "$X-X" or "N/A" if released after 1980,
 *     value2000: "$X-X",
 *     value2025: "$X-X",
 *     image: "images/your-image.jpg"
 * }
 */
