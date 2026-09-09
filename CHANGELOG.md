# NewTube website — 2026-09-09

## What changed

- Refined the shared dark visual system, spacing, focus states, hover states, cards, CTA blocks and mobile layout.
- Added responsive behavior for the navigation and hero/device section on phones and tablets.
- Added `assets/site.js` so APK buttons use one stable GitHub Releases URL: `https://github.com/alm77066-eng/app-updates/releases/download/2.2.1/app-release.apk`.
- Updated structured data (`SoftwareApplication`) to use the stable APK endpoint and expose the current software version.
- Added Open Graph image alt metadata.
- Removed legacy `meta keywords` tags.
- Added preconnect hints and lazy-loading/decoding for non-critical images.
- Added FAQPage structured data to both Arabic and English FAQ pages.
- Rebuilt `sitemap.xml` and connected it from `robots.txt`.
- Improved the 404 page.
- Kept the existing site URL, app version, branding and bilingual page structure intact.

## Download URL

The exact new APK URL was not supplied separately. The site therefore uses GitHub's stable `releases/latest/download/app-release.apk` endpoint, which is designed to follow the latest release asset with that filename.
