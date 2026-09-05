/**
 * FITWAY GYM — AUTOMATED GOOGLE BUSINESS PROFILE REVIEW SYNC
 * 
 * Usage:
 *   GOOGLE_PLACES_API_KEY="your_api_key" PLACE_ID="your_place_id" node scripts/sync_google_reviews.js
 * 
 * Or configure as GitHub Action secret.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.PLACE_ID || 'ChIJ_fitway_sector67_mohali'; // Replace with exact Google Place ID
const OUTPUT_FILE = path.join(__dirname, '..', 'assets', 'data', 'reviews.json');

if (!API_KEY) {
    console.log('ℹ️ [Info] No GOOGLE_PLACES_API_KEY provided in environment.');
    console.log('ℹ️ To run live sync: set GOOGLE_PLACES_API_KEY and PLACE_ID.');
    process.exit(0);
}

const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total&key=${API_KEY}`;

console.log(`📡 Fetching live reviews for Place ID: ${PLACE_ID}...`);

https.get(url, (res) => {
    let rawData = '';
    res.on('data', (chunk) => rawData += chunk);
    res.on('end', () => {
        try {
            const parsed = JSON.parse(rawData);
            if (parsed.status !== 'OK' || !parsed.result) {
                console.error(`❌ Google Places API Error: ${parsed.status} - ${parsed.error_message || 'Unknown'}`);
                process.exit(1);
            }

            const result = parsed.result;
            const liveReviews = (result.reviews || [])
                .filter(r => r.rating >= 4) // Only 4 and 5 star reviews
                .map((r, idx) => ({
                    id: `g-rev-${idx + 1}`,
                    author: r.author_name,
                    avatar: r.author_name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase(),
                    avatarUrl: r.profile_photo_url || null,
                    rating: r.rating,
                    text: r.text,
                    relativeTime: r.relative_time_description || 'Google Reviewer',
                    badge: 'Google Reviewer • Sector 67',
                    verified: true
                }));

            const outputData = {
                lastSynced: new Date().toISOString(),
                averageRating: result.rating || 5.0,
                totalReviews: result.user_ratings_total || 500,
                placeId: PLACE_ID,
                reviews: liveReviews.length > 0 ? liveReviews : JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf8')).reviews
            };

            fs.writeFileSync(OUTPUT_FILE, JSON.stringify(outputData, null, 2), 'utf8');
            console.log(`✅ Successfully synced ${liveReviews.length} reviews from Google Places API to ${OUTPUT_FILE}!`);
        } catch (e) {
            console.error(`❌ Error parsing response: ${e.message}`);
            process.exit(1);
        }
    });
}).on('error', (err) => {
    console.error(`❌ Request error: ${err.message}`);
    process.exit(1);
});
