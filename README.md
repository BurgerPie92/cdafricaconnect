# CD Africa Connect

CD Africa Connect is a static business website for an IT and networking services company. The site presents the company's services, background, contact details, and quote enquiry form.

## Website Pages

- `index.html` - Home page with the main company introduction, service summary, business benefits, and contact call to action.
- `about.html` - Company background, mission, vision, and technology partner positioning.
- `services.html` - Overview of LAN/WAN setup, managed IT support, cybersecurity, and cloud infrastructure services.
- `gallery.html` - Image gallery with a lightbox for networking, fibre, Wi-Fi, and cloud service visuals.
- `contact.html` - Phone number, email address, physical address, and location image.
- `enquiry.html` - Quote calculator and request form for business details and service requirements.
- `robots.txt` - Search engine crawler rules and sitemap location.
- `sitemap.xml` - XML sitemap listing the public website pages.
- `js/gallery-lightbox.js` - Client-side gallery lightbox controls.
- `js/quote-calculator.js` - Client-side quote calculator and email enquiry helper.

## SEO and Discoverability

The site includes search engine and social sharing metadata across all public pages:

- Unique page titles and meta descriptions for the home, about, services, gallery, contact, and enquiry pages.
- Canonical URLs for each page using `https://www.cdafrica.tech` as the assumed production domain.
- Open Graph and Twitter Card metadata so shared links can show page-specific titles, descriptions, and images.
- `robots.txt` and `sitemap.xml` to help search engines discover the public pages.
- Structured JSON-LD business data on the home page, including contact details, address, service types, and service area.
- Improved semantic HTML structure with one primary `h1` per page, clearer section headings, and current-page navigation labels.

If the production domain is different from `https://www.cdafrica.tech`, update the canonical URLs, Open Graph URLs, Twitter image URLs, `robots.txt`, and `sitemap.xml` before publishing.

## Styling

All pages use the shared stylesheet at `css/styles.css`. The latest style update adds:

- A modern system font stack using Segoe UI, Roboto, Helvetica Neue, Arial, and sans-serif fallbacks.
- A refreshed green, white, and warm accent color palette.
- Updated navigation styling with hover, focus, and current-page states.
- Stronger heading styles and improved paragraph readability.
- Rounded page images with consistent spacing and shadows.
- Modern card styling for service and content blocks.
- Styled feature lists, call-to-action sections, and enquiry form fields.
- Professional button rows for page-level calls to action and cross-page navigation.
- Heading styles for card-based contact details.
- Responsive gallery, lightbox, and interactive map styling.
- Responsive layout rules for desktop, tablet, mobile, and small mobile screens.

## Interactive Features

- Each page includes working call-to-action buttons that guide visitors to services, contact details, or the enquiry page.
- The gallery page includes a clickable image gallery with a lightbox, previous/next controls, close button, overlay close, and keyboard support for Escape and arrow keys.
- The contact page includes an embedded interactive Google Map, plus buttons to open the location or directions in Google Maps.
- The enquiry page includes a client-side quote calculator for service package, user/device count, business sites, support level, and timeline.
- Quote estimates are calculated in South African Rand and are intended as planning estimates, not final pricing.
- The enquiry form includes an email button that opens a pre-filled email to `Info@CDAfrica.tech` with the visitor's details and calculated estimate.

## Images

Website images are stored in the `images` folder and are used to support the business technology theme, including networking, cloud, Wi-Fi, fibre, and address/location visuals.

## Previewing the Site

Because this is a static HTML and CSS website, it can be previewed by opening `index.html` in a browser.

For a local server preview, run:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Maintenance Notes

- Keep shared visual changes in `css/styles.css` so every page stays consistent.
- Add new images to the `images` folder and reference them with relative paths.
- Check each page after stylesheet changes to make sure text, navigation, images, and forms remain readable on mobile and desktop.
- Keep SEO metadata unique and aligned with each page whenever content changes.
- Update `sitemap.xml` when adding, removing, or renaming public pages.
- Add gallery images to `gallery.html` with `data-lightbox-src`, `data-lightbox-title`, and `data-lightbox-description` attributes.
- Review the base prices in `js/quote-calculator.js` if service pricing changes.
