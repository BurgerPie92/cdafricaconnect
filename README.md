# CD Africa Connect

CD Africa Connect is a static business website for an IT and networking services company. The site presents the company's services, background, contact details, and quote enquiry form.

## Website Pages

- `index.html` - Home page with the main company introduction, service summary, business benefits, and contact call to action.
- `about.html` - Company background, mission, vision, and technology partner positioning.
- `services.html` - Overview of LAN/WAN setup, managed IT support, cybersecurity, and cloud infrastructure services.
- `contact.html` - Phone number, email address, physical address, and location image.
- `enquiry.html` - Quote request form for business details and service requirements.

## Styling

All pages use the shared stylesheet at `css/styles.css`. The latest style update adds:

- A modern system font stack using Segoe UI, Roboto, Helvetica Neue, Arial, and sans-serif fallbacks.
- A refreshed green, white, and warm accent color palette.
- Updated navigation styling with hover and focus states.
- Stronger heading styles and improved paragraph readability.
- Rounded page images with consistent spacing and shadows.
- Modern card styling for service and content blocks.
- Styled feature lists, call-to-action sections, and enquiry form fields.
- Responsive layout rules for desktop, tablet, mobile, and small mobile screens.

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
