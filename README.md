# Open NeuroTech Website

A modern, responsive website for Open NeuroTech LLC showcasing neurotechnology hardware products and services.

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

### Components
All reusable components are defined in `styles.css`:
- `.transition-smooth` - 0.3s ease transitions
- `.btn-gradient` - Blue to dark gradient buttons
- `.btn-primary` / `.btn-secondary` - Standard button styles
- `.product-card` - Flex-based product cards with hover effects
- `.modal` - Fullscreen modal overlays
- `.site-nav` - Responsive navigation bar
- `.site-footer` - Footer layout and styling

## 🛠️ Technologies Used

### Core
- **HTML5** - Semantic markup
- **CSS3** - Custom styles with flexbox and grid
- **JavaScript (ES6+)** - Interactive functionality

### Libraries & Frameworks
- **Tailwind CSS** (CDN) - Utility-first CSS framework
- **AOS (Animate On Scroll)** - Scroll animations
- **Feather Icons** - Clean, consistent iconography
- **Three.js** - 3D rendering library (for Vanta.js)
- **Vanta.js** - Animated background effects (index.html only)

## 📄 Page Details

### index.html
**Purpose**: Homepage and main landing page

**Sections**:
1. **Hero** - Animated Vanta.js background with tagline and CTAs
2. **Services** - Overview of products and offerings
3. **About** - Company mission and vision
4. **Contact** - Contact information with social links
5. **Footer** - Site navigation and company info

**Special Features**:
- Vanta.js NET animated background
- Smooth scroll navigation
- AOS fade animations

### shop.html
**Purpose**: Product catalog and service offerings

**Sections**:
1. **Hero** - Gradient banner with page title
2. **COSMIIC Circuit Boards** - Available hardware products
3. **Coming Soon** - Upcoming products and services
4. **CTA** - Call-to-action for quotes
5. **Modals** - 6 detailed product/service modals
6. **Footer** - Site navigation

**Special Features**:
- Product cards with hover effects
- Modal popups with detailed information
- Click-outside and ESC-key to close modals
- Responsive grid layout

### coming-soon.html
**Purpose**: Placeholder for pages under construction

**Content**:
- Simple centered message
- "Back to Home" button
- Minimal styling for fast loading

## 🔧 Customization Guide

### Adding a New Product to shop.html

1. **Add Product Card**
```html
<div class="product-card bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-up">
    <div class="h-64 bg-gray-200 flex items-center justify-center">
        <i data-feather="icon-name" class="w-32 h-32 text-blue-500"></i>
    </div>
    <div class="p-6">
        <h3 class="text-2xl font-bold text-gray-900 mb-3">Product Name</h3>
        <p class="text-gray-600 mb-4">Product description...</p>
        
        <div class="actions">
            <div class="flex items-center justify-between">
                <span class="text-blue-600 font-semibold text-lg">Price</span>
            </div>
            <button onclick="openModal('modalX')" class="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-smooth">
                Learn More
            </button>
        </div>
    </div>
</div>
```

2. **Add Corresponding Modal**
```html
<div id="modalX" class="modal">
    <div class="modal-content">
        <!-- Modal header with close button -->
        <!-- Product details -->
        <!-- CTA buttons -->
    </div>
</div>
```

3. **Update Feather Icon** - Call `feather.replace()` to render new icons

## 🚀 Deployment

### GitHub Pages
1. Push files to GitHub repository
2. Go to Settings → Pages
3. Select branch and root folder
4. Add `CNAME` file with custom domain
```
openneuro.tech
```

### Local Development
To view the local version of the website, you need to use the command 
`python -m http.server 8000` and type in `http://localhost:8000` to your browser.

## 📱 Responsive Breakpoints

Using Tailwind's default breakpoints:
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 768px (md)
- **Desktop**: 768px+ (lg, xl)

Key responsive elements:
- Navigation: Hidden on mobile, visible on md+
- Grid layouts: 1 column → 2 columns (md) → 3 columns (lg)
- Text sizes: Responsive with `text-xl md:text-2xl` pattern

## 📝 License

© 2025 Open NeuroTech LLC. All rights reserved.

---

**Last Updated**: October 2025  
**Version**: Beta
**Maintained By**: Open NeuroTech LLC