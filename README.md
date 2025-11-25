# Open NeuroTech Website - Read Me

Guide to the openneuro.tech website design and how to edit.
Remote repository at [`github.com/open-neurotech/Open-Neurotech.github.io`](https://github.com/Open-NeuroTech/Open-NeuroTech.github.io)

## 📄 Page Structure

### Main Pages
- **index.html** - Homepage with hero, services, about, and contact sections
- **shop/index.html** - Product catalog with dynamic cards and modals
- **coming-soon.html** - Placeholder for pages under construction
- **shop/purchase-process.html** - Hidden page with detailed purchasing workflow and Terms of Service

### Components
- **components/navbar.html** & **navbar.js** - Responsive navigation bar with mobile menu
- **components/footer.html** & **footer.js** - Site footer with links
- **components/scripts.js** - Global JavaScript initialization (AOS, Feather, Vanta.js)

## 🛍️ Shop Page Architecture

The shop page uses javascript to dynamically display product information to eliminate code duplication and simplify maintenance.

### How It Works

1. **Single Source of Truth**: `/shop/product-data.js`
   - Contains `productsData` object with all product information
   - Each product has properties for both card display and modal content
2. **Dynamic Card Rendering**: `/shop/product-card.js`
   - Reads from `productsData` and generates product cards on page load
   - Handles image types (img vs feather icons)
   - Supports "Coming Soon" badges
   - Initializes AOS animations and Feather icons after rendering
3. **Dynamic Modal Generation**: `/shop/product-modal.js`
   - Creates modals on-the-fly when "Learn More" is clicked
   - Pulls full product details from `productsData`
   - Handles features lists, warnings, additional info arrays
   - Manages modal open/close behavior and scroll locking

### Adding a New Product

To add a new product to the shop page, add the example text below to `/shop/product-data.js` inside of `const productsData = {...};` The card and modal will be automatically generated and styled.

```javascript
    yourProductKey: {
        // Card Information
        name: "Product Name",
        shortDescription: "Brief description for card",
        price: "1,499", // or "TBD," no need to include $
        priceClass: "text-muted", // optional, for styling
        imageType: "img", // "img" or "icon"
        image: "product-img/photo.jpg", // path or feather icon name
        comingSoon: false, //true adds coming soon badge to product card
        
        // Modal Information
        fullDescription: "Detailed product description...",
        features: [
            "Feature 1",
            "Feature 2"
        ],
        additionalInfo: "Extra details..." // can be string or array
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

### Colors
- **Primary Blue**: `#3b82f6` - Buttons, accents, interactive elements
- **Dark Background**: `#111827` - Navigation overlay, footer, gradients
- **Light Blue**: `#bfdbfe` - Hover states, text accents
- **Gray Scale**: Tailwind's gray palette for text and backgrounds

### Typography
- **Font Family**: System font stack via Tailwind (`font-sans`)
- **Headings**: Bold, large scale (text-4xl to text-6xl)
- **Body**: text-xl for comfortable reading

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
To view the local version of the website, enter into command terminal `python -m http server 8000` then navigate to `http://localhost:8000` in your browser.

## 📱 Device Formatting Design

Using Tailwind's default breakpoints:
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 768px (md)
- **Desktop**: 768px+ (lg, xl)
- Navigation: Hidden on mobile, hamburger menu appears
- Grid layouts: 1 column → 2 columns (md) → 3 columns (lg)
- Text sizes: Responsive with `text-xl md:text-2xl` pattern

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styles with flexbox and grid
- **JavaScript (ES6+)** - Interactive functionality
- **Tailwind CSS** (CDN) - Utility-first CSS framework
- **AOS (Animate On Scroll)** - Scroll animations
- **Feather Icons** - Clean, consistent iconography
- **Three.js** - 3D rendering library (for Vanta.js)
- **Vanta.js** - Animated background effects (index.html only)

## 📝 Version History

### v0.1.0 (November 2025)
- Added purchasing flow section to shop page
- Implemented dynamic product display system
- Created hidden purchase-process.html page with detailed Terms of Service
- Fixed photo cropping issues in modal views
- Known Issues: 
    - Mobile: On coming-soon page, the nav menu works but is not visible
    - Mobile: “Full purchasing policies” partially overlapped with Request a Quote button
    - May be formatting issues for iPad views
    - Fade-in components are not accessibility-friendly

### Beta (October 2025)
- Initial release with homepage, shop, and coming-soon pages
- Vanta.js animated homepage background
- Basic product cards with static modals

## 📝 License

© 2025 Open NeuroTech LLC. All rights reserved.

---

**Last Updated**: November 2025  
**Version**: v0.1.0  
**Maintained By**: Open NeuroTech LLC