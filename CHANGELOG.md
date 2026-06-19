# Changelog

All notable changes to the CD Africa Connect website are documented in this file.

## 2026-06-19

### Added

- Added SEO metadata across all public pages, including unique page titles, meta descriptions, canonical URLs, Open Graph tags, Twitter Card tags, and theme color.
- Added structured JSON-LD business data on the home page for contact details, address, service types, and service area.
- Added `robots.txt` and `sitemap.xml` to improve search engine discovery.
- Added professional call-to-action buttons across all pages for smoother navigation between services, enquiry, contact, gallery, and company information.
- Added a client-side quote calculator on `enquiry.html` for service package, users/devices, business sites, support level, and project timeline.
- Added `js/quote-calculator.js` to calculate Rand-based planning estimates and create email-ready enquiry details.
- Added a new `gallery.html` page with networking, fibre, Wi-Fi, cloud, and infrastructure images.
- Added `js/gallery-lightbox.js` for the gallery lightbox with next/previous controls, overlay close, Escape close, arrow-key navigation, and focus restoration.
- Added an interactive Google Map section on `contact.html`, including buttons to open the location and get directions in Google Maps.
- Added an embedded YouTube video section on `services.html` explaining computer networks and the importance of reliable IT network design.

### Changed

- Improved page structure so each HTML page uses one primary `h1` with clearer supporting section headings.
- Updated the site navigation to include the new Gallery page and current-page states.
- Refined About, Services, Contact, and Enquiry page content for better readability and semantic structure.
- Updated the Services page from plain text blocks into structured service sections and feature lists.
- Improved Contact page layout with card-based contact details, clickable phone/email links, and map actions.
- Updated Enquiry page form behavior so calculated quote details can be included in a pre-filled email.
- Expanded responsive CSS for buttons, calculator controls, map layout, gallery grid, and lightbox behavior.
- Expanded responsive CSS for embedded educational video content.
- Updated `README.md` with SEO, navigation, quote calculator, gallery, map, and maintenance documentation.
- Updated `sitemap.xml` to include the Gallery page.

### Fixed

- Removed broken character encoding from the About page copy.
- Fixed the Enquiry page service placeholder text.
- Standardised the brand name as "CD Africa Connect" across updated pages.

### Verified

- Confirmed every HTML page has one title, one meta description, one canonical URL, and one `h1`.
- Confirmed `sitemap.xml` parses successfully.
- Confirmed JSON-LD business data parses successfully.
- Confirmed internal links and local image/script sources resolve.
- Confirmed the quote calculator returns a valid test estimate.
- Confirmed the gallery lightbox opens, navigates, closes, restores focus, and supports keyboard controls in a mocked browser environment.

## 2026-05-29

### Added

- Added a full shared stylesheet at `css/styles.css` to control the design across all pages.
- Added responsive layout rules for desktop, tablet, mobile, and small mobile screens.
- Added modern page styling for navigation, headings, paragraphs, images, content cards, feature lists, call-to-action sections, and enquiry form fields.
- Added explanatory CSS comments for the major design sections.
- Expanded `README.md` with project details, page descriptions, styling notes, image information, preview instructions, and maintenance notes.

### Changed

- Updated all website pages to use the shared stylesheet for a consistent design.
- Refreshed the site font stack to use Segoe UI, Roboto, Helvetica Neue, Arial, and sans-serif fallbacks.
- Updated the color palette to use a modern green, white, and warm accent theme.
- Improved navigation with spacing, rounded links, hover states, and focus states.
- Improved headings with stronger sizing, weight, and brand color.
- Improved page images with full-width sizing, rounded corners, consistent spacing, and shadows.
- Improved the home page content sections with a card-based service grid and styled feature list.
- Improved the contact and enquiry pages so they match the updated visual style.
- Improved the quote enquiry form with cleaner input fields, labels, borders, and focus states.

### Repository

- Initial website structure included `index.html`, `about.html`, `services.html`, `contact.html`, and `enquiry.html`.
- Image assets were included for networking, Wi-Fi, fibre, cloud services, and the contact location.
- Project documentation now explains how to preview and maintain the static website.
