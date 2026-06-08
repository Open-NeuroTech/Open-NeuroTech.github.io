# Open NeuroTech Website - Read Me

Guide to the openneuro.tech website design and how to edit.
Remote repository at [`github.com/open-neurotech/Open-Neurotech.github.io`](https://github.com/Open-NeuroTech/Open-NeuroTech.github.io)

## 📄 Page Structure

### Main Pages

- **index.html** - Homepage: story-driven pitch narrative (problem → platform → traction → CTA with scrolling partner logo strip)
- **shop/index.html** - Product catalog with dynamic cards and modals
- **shop/purchase-process.html** - Purchasing workflow, common scenarios, FAQ, and Terms of Service
- **contact/index.html** - Founder contact cards and organization links (GitHub, LinkedIn, email)
- **coming-soon.html** - Placeholder for pages under construction
- **investors/index.html** - Investor pitch page: problem, platform overview, traction timeline, use of funds, and due diligence materials

### Internal

- **brand/index.html** - Brand style guide: color palette, typography scale, buttons, cards, section patterns, spacing, and motion tokens

### Tools

- **tools/letter-of-support/index.html** - Client-side Letter of Support PDF generator with live preview

### Components

- **components/navbar.html** & **navbar.js** - Responsive navigation bar with mobile menu
- **components/footer.html** & **footer.js** - Site footer with links
- **components/scripts.js** - Global JavaScript initialization (Feather icons, Vanta.js)

## 🛠️ Tools

### Letter of Support Generator (`/tools/letter-of-support/`)

Generates a branded ONT Letter of Support PDF entirely client-side (no backend required).

**How it works:**

- User fills in: Date, To (Program Office), Signing Co-Founder, Investigator Name, Project Title, Funding Agency
- A live scaled preview updates in real time with blue dashed placeholders for unfilled fields
- Clicking **Download PDF** validates all fields, then clones the letter element, anchors it at document (0,0), captures it with `html2canvas`, and outputs a US Letter PDF via `jsPDF`

**Field limits:** Program Office 120 · Investigator 100 · Project Title 127 · Agency 100

**Date field:** Native calendar picker (`<input type="date">`) defaulting to today; formats as "12 May 2026" in the letter preview and PDF.

**Libraries used:**

- [`html2canvas 1.4.1`](https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js) — DOM-to-canvas rendering
- [`jsPDF 2.5.1`](https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js) — PDF generation

**PDF output notes:**

- All letter graphics (header logo, footer icon) are inline SVG or same-origin PNG to ensure html2canvas renders them without CORS issues
- jsPDF is configured with `unit: 'pt', format: 'letter'` and the image is placed using `pdf.internal.pageSize.getWidth/Height()` to fill the page without clipping

## 🛍️ Shop Page Architecture

The shop page uses JavaScript to dynamically display product information to eliminate code duplication and simplify maintenance.

### How It Works

1. **Single Source of Truth**: `/shop/product-data.js`
   - Contains `productsData` object with all product information
   - Each product has properties for both card display and modal content
2. **Dynamic Card Rendering**: `/shop/product-card.js`
   - Reads from `productsData` and generates product cards on page load
   - Handles image types (img vs feather icons)
   - Supports "Coming Soon" badges
   - Initializes Feather icons after rendering
3. **Dynamic Modal Generation**: `/shop/product-modal.js`
   - Creates modals on-the-fly when "Learn More" is clicked
   - Pulls full product details from `productsData`
   - Handles features lists, warnings, additional info arrays
   - Manages modal open/close behavior and scroll locking

### Adding a New Product

To add a new product to the shop page, add the example text below to `/shop/product-data.js` inside of `const productsData = {...};`. The card and modal will be automatically generated and styled.

```javascript
    yourProductKey: {
        // Card Information
        name: "Product Name",
        shortDescription: "Brief description for card",
        price: "1,499", // or "TBD," no need to include $
        priceClass: "text-muted", // optional, for styling
        imageType: "img", // "img" or "icon"
        image: "product-img/photo.jpg", // path or feather icon name
        comingSoon: false, // true adds coming soon badge to product card

        // Modal Information
        fullDescription: "Detailed product description...",
        features: [
            "Feature 1",
            "Feature 2"
        ],
        additionalInfo: "Extra details...", // can be string or array
        warning: '<span style="color: red;">WARNING:</span> Safety info...'
    },
```

### Product Data Properties

#### Card Display (Required)

- `name` - Product name
- `shortDescription` - Brief description (1-2 sentences)
- `price` - Price string (e.g., "1,499" or "TBD")
- `imageType` - "img" for photos, "icon" for Feather icons
- `image` - Image path or Feather icon name
- `comingSoon` - Boolean for "Coming Soon" badge

#### Card Display (Optional)

- `priceClass` - CSS class for price styling (e.g., "text-muted")

#### Modal Content (Required)

- `fullDescription` - Detailed product description

#### Modal Content (Optional)

- `features` - Array of feature strings (rendered as bulleted list)
- `subsections` - Array of objects with `title` and `items` properties
- `additionalInfo` - String or array of additional details
- `warning` - HTML string for safety warnings

## 🎨 Design System

For the full visual reference see [`/brand/`](brand/index.html).

### Colors

- **Primary Blue**: `#2563eb` — buttons, accents, interactive elements
- **Blue Accent**: `#60a5fa` — chapter labels, stat numbers, highlights on dark backgrounds
- **Dark Background**: `#111827` — navigation, hero sections, footer
- **Light Blue**: `#bfdbfe` — hero subtitle text on dark
- **Gray Scale**: Tailwind's gray palette for text and backgrounds

### Logo Assets

| File | Use |
| --- | --- |
| `img/ONT_logo_light_v2.svg` | Full horizontal logo — for use on light backgrounds |
| `img/ONT_logo_dark_v2.svg` | Full horizontal logo — for use on dark backgrounds |
| `img/ont-icon-blue.svg` | Icon only — blue, for light backgrounds and favicons |
| `img/Icon Only - White/` | Icon only — white variant for dark backgrounds |
| `img/ont-icon-animated-white.gif` | Animated icon — used in the navbar |
| `img/Full Logo/` | Print-ready versions (SVG, PNG, PDF, EPS) |

### Typography

- **Font Family**: Space Grotesk (Google Fonts) — used for all headings and body text
- **Import**: `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700`
- **CSS Variables**: `--font-display` and `--font-body` both set to Space Grotesk in `styles.css`
- **Note**: Do not add `font-sans` to `<body>` tags — Tailwind's `font-sans` overrides the Space Grotesk variable

### Modifying Styles

All custom styles are in `/styles.css`. The file is organized into sections:

- Transitions & Animations
- Gradients
- Buttons
- Navigation
- Product Cards
- Modals
- Footer
- Typography
- Spacing & Layout
- Homepage Story Sections (chapter labels, stat heroes, CTA rows, comparison table)
- Logo Marquee (scrolling partner strip with edge fades)

## 🚀 Deployment

### GitHub Pages

In the settings of this remote repository [`github.com/open-neurotech/open-neurotech.github.io`](https://github.com/Open-NeuroTech/Open-NeuroTech.github.io), settings should exist as the following:

- Go to Settings → Pages
- Source → `Deploy from a branch`
- Branch → `main` and `/(root)`
- Custom domain → `openneuro.tech`
  - Repository should have a corresponding CNAME file holding the text `openneuro.tech` in the root directory
  - DNS records hold the A records for GitHub Pages redirect
- Select Enforce HTTPS

The most current commit to `main` branch will display live at [openneuro.tech](https://openneuro.tech) by redirect from [open-neurotech.github.io](https://open-neurotech.github.io)

### Local Development

To view the local version of the website, enter into command terminal `python -m http.server 8000` then navigate to `http://localhost:8000` in your browser.

## 📱 Device Formatting Design

Using Tailwind's default breakpoints:

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md/lg)
- **Desktop**: 1024px+ (lg, xl)
- Navigation: Hidden on mobile, hamburger menu appears
- Grid layouts: 1 column → 2 columns (md) → 3 columns (lg)
- Text sizes: Responsive with `clamp()` for fluid scaling on hero and section titles

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styles with flexbox and grid
- **JavaScript (ES6+)** - Interactive functionality
- **Tailwind CSS** (CDN) - Utility-first CSS framework
- **Feather Icons** (CDN) - Clean, consistent iconography
- **Three.js** - 3D rendering library (for Vanta.js)
- **Vanta.js** - Animated background on homepage hero only
- **html2canvas 1.4.1** (CDN) - DOM-to-canvas for PDF export
- **jsPDF 2.5.1** (CDN) - Client-side PDF generation

## 📝 Version History

### v0.2.0 (May 2026)

- Redesigned homepage as a story-driven narrative
- Switched site-wide font to Space Grotesk
- Replaced emoji icons with Feather icons throughout
- Removed AOS (Animate On Scroll) animations site-wide
- Created standalone `/contact/` page with founder and org cards
- Restyled shop, purchase-process, and coming-soon pages to match design system
- Added `/tools/letter-of-support/` — client-side PDF generator with live preview, field validation, and character limits
- Updated navbar: removed About link, replaced static logo with animated GIF
- Added scrolling partner logo strip to homepage CTA section (`img/partners/`: cwru, metrohealth, michigan, wisconsin, santanna, trailblazer)

### v0.1.0 (November 2025)

- Added purchasing flow section to shop page
- Implemented dynamic product display system
- Created purchase-process.html page with detailed Terms of Service
- Fixed photo cropping issues in modal views

### Beta (October 2025)

- Initial release with homepage, shop, and coming-soon pages
- Vanta.js animated homepage background
- Basic product cards with static modals

## 📝 License

© 2026 Open NeuroTech LLC. All rights reserved.

---

**Last Updated**: May 2026
**Version**: v0.2.0
**Maintained By**: Open NeuroTech LLC
