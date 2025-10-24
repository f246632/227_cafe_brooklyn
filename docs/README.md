# Café Brooklyn - Website Documentation

## 🎨 Website Overview

This is a modern, responsive website for **Café Brooklyn**, a charming café located in the Wedding district of Berlin at Liebenwalder Str. 7, 13347 Berlin.

### Features

- ✅ Fully responsive design (mobile-first approach)
- ✅ Modern, professional aesthetic
- ✅ Fast loading times with optimized images
- ✅ Smooth scroll animations
- ✅ Interactive image gallery with lightbox
- ✅ Contact form with validation
- ✅ Google Maps integration
- ✅ SEO optimized with schema markup
- ✅ Accessibility compliant (WCAG 2.1 AA)
- ✅ Cross-browser compatible

## 📁 Project Structure

```
227_Caf'e Brooklyn
caf_brooklyn/
├── index.html                 # Main HTML file
├── css/
│   ├── style.css             # Main stylesheet
│   └── responsive.css        # Responsive design rules
├── js/
│   ├── main.js               # Core JavaScript functionality
│   └── gallery.js            # Gallery and lightbox features
├── images/
│   ├── source/               # Original source images
│   ├── optimized/            # Web-optimized images
│   ├── thumbnails/           # Thumbnail versions
│   ├── downloaded/           # Street View downloads
│   └── icons/                # UI icons
├── docs/
│   └── README.md             # This file
├── reviews.json              # Customer reviews data
└── .gitignore                # Git ignore rules
```

## 🚀 Local Development

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Running Locally

#### Option 1: Simple HTTP Server (Python)

```bash
# Navigate to project directory
cd "/Users/m./berlinwebsites/227_Caf'e Brooklyn
caf_brooklyn"

# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Open browser to http://localhost:8000
```

#### Option 2: Node.js HTTP Server

```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server -p 8000

# Open browser to http://localhost:8000
```

#### Option 3: VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

#### Option 4: Direct File Opening

Simply open `index.html` in your web browser. Some features (like AJAX) may not work with the `file://` protocol.

## 🎨 Design System

### Color Palette

- **Primary Color**: `#6B4226` - Rich coffee brown
- **Secondary Color**: `#D4A574` - Warm latte
- **Accent Color**: `#C17C4A` - Caramel accent
- **Dark Color**: `#2C1810` - Deep espresso
- **Light Color**: `#F5F1ED` - Cream

### Typography

- **Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)

### Spacing System

- XS: 0.5rem (8px)
- SM: 1rem (16px)
- MD: 2rem (32px)
- LG: 3rem (48px)
- XL: 4rem (64px)
- XXL: 6rem (96px)

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1439px
- **Large Desktop**: 1440px - 2559px
- **4K/Ultra-wide**: ≥ 2560px

## 🌐 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- iOS Safari (last 2 versions)
- Android Chrome (last 2 versions)

## ♿ Accessibility Features

- Semantic HTML5 structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly
- High contrast mode support
- Reduced motion support
- Focus indicators
- Alt text for all images

## 🔍 SEO Features

- Meta tags for social media (Open Graph)
- Schema.org structured data (Cafe markup)
- Semantic HTML elements
- Optimized page titles and descriptions
- Clean URL structure
- Fast loading times
- Mobile-friendly design

## 📊 Performance Optimizations

- Lazy loading images
- Minified CSS/JS (for production)
- Optimized images
- Efficient CSS selectors
- Minimal dependencies (vanilla JavaScript)
- Async/defer script loading
- Browser caching headers

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid and Flexbox
- **Vanilla JavaScript**: No frameworks, pure performance
- **Google Fonts**: Playfair Display & Inter
- **Google Maps**: Location integration

## 📝 Content Sections

1. **Hero Section**: Eye-catching introduction with call-to-action
2. **About**: Café story and unique features
3. **Menu**: Complete offerings with prices
4. **Gallery**: Visual showcase with lightbox
5. **Testimonials**: Customer reviews
6. **Location**: Map and directions
7. **Contact**: Form and contact information
8. **Footer**: Quick links and social media

## 🔧 Customization Guide

### Updating Content

#### Change Café Information

Edit `index.html` and update the relevant sections:

```html
<!-- Address -->
<p>Liebenwalder Str. 7<br>13347 Berlin<br>Deutschland</p>

<!-- Hours -->
<p>Montag - Freitag: 8:00 - 18:00<br>
Samstag - Sonntag: 9:00 - 19:00</p>
```

#### Update Menu Items

Edit the menu sections in `index.html`:

```html
<div class="menu-item">
    <div class="item-header">
        <h4>Item Name</h4>
        <span class="price">€X.XX</span>
    </div>
    <p class="item-description">Description</p>
</div>
```

#### Add New Images

1. Place images in `images/source/`
2. Optimize for web (resize, compress)
3. Copy to `images/optimized/`
4. Update HTML image references

### Styling Changes

Edit `css/style.css` to modify:

- Colors (CSS custom properties in `:root`)
- Typography
- Spacing
- Layouts

### Adding Features

The codebase uses vanilla JavaScript with a class-based architecture. To add features:

1. Create a new class in `js/main.js` or separate file
2. Initialize in the DOMContentLoaded event
3. Follow existing patterns for consistency

## 🌍 Deployment

### GitHub Pages

1. Repository is already set up
2. GitHub Pages enabled
3. Website URL: `https://f246632.github.io/227_Caf'e Brooklyn
caf_brooklyn/`

### Custom Domain (Optional)

To use a custom domain:

1. Add CNAME file to repository root
2. Configure DNS settings with domain provider
3. Update GitHub Pages settings

## 📞 Contact Information

**Café Brooklyn**
- Address: Liebenwalder Str. 7, 13347 Berlin, Deutschland
- District: Wedding, Berlin
- Category: Café
- Specialty: Guter Kaffee (Good Coffee)

## 🔄 Future Enhancements

Potential features to add:

- [ ] Online ordering system
- [ ] Reservation system
- [ ] Newsletter signup
- [ ] Blog section
- [ ] Instagram feed integration
- [ ] Customer loyalty program
- [ ] Multi-language support (German/English)
- [ ] Dark mode toggle
- [ ] PWA (Progressive Web App) features
- [ ] Virtual tour

## 📜 License

© 2025 Café Brooklyn. All rights reserved.

## 🙏 Credits

- **Design & Development**: Created with modern web standards
- **Images**: Street View imagery from Google
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Icons**: Unicode emoji characters
- **Maps**: Google Maps Platform

## 📚 Additional Resources

- [HTML5 Specification](https://html.spec.whatwg.org/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [JavaScript Best Practices](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Web Accessibility](https://www.w3.org/WAI/WCAG21/quickref/)
- [SEO Best Practices](https://developers.google.com/search/docs)

---

**Last Updated**: October 24, 2025
**Version**: 1.0.0
