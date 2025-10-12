# Personal Branding / Portfolio Landing Page

A modern, professional personal branding landing page built with React + Vite (Rolldown) for a Software/IT Project Manager. Features elegant animations, responsive design, and modular components.

## 🚀 Features

- **Modern Tech Stack**: React 18 + Vite with Rolldown optimization
- **Smooth Animations**: Framer Motion for elegant entrance and scroll animations
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Interactive Carousels**: React Slick for company logos and testimonials
- **Clean CSS**: No utility frameworks - pure CSS modules for maximum customization
- **SEO Optimized**: Semantic HTML and proper meta tags
- **Performance Focused**: Optimized bundle splitting and lazy loading

## 📋 Sections

1. **Hero Section** - Split layout with CTA buttons and professional image placeholder
2. **Companies Section** - Animated horizontal slider with company logos
3. **About Section** - Bio with stats and professional background
4. **Training Program** - Two-column layout showcasing the "Zero to Market-Ready" program
5. **Testimonials** - Carousel with client success stories
6. **Contact Section** - Contact form and social links
7. **Footer** - Minimal footer with quick links and social media

## 🛠️ Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 🎨 Customization Guide

### 1. Personal Information

**Hero Section** (`src/components/Hero.jsx`):
- Replace `[Your Name]` with your actual name (line 39)
- Add your professional portrait image (line 65)

**About Section** (`src/components/About.jsx`):
- Update bio text with your experience (lines 47-55)
- Modify stats to match your achievements (lines 67-79)
- Add your professional photo (line 38)

### 2. Company Logos

**Companies Section** (`src/components/Companies.jsx`):
- Replace company logo placeholders with actual logos (line 7-11)
- Add logo files to `public/images/companies/` directory
- Update the `logo` property with the path: `/images/companies/vois.png`

### 3. Training Program

**Training Section** (`src/components/Training.jsx`):
- Update program benefits to match your offering (lines 9-33)
- Add program image/illustration (line 112)
- Customize program description (lines 95-98)

### 4. Testimonials

**Testimonials Section** (`src/components/Testimonials.jsx`):
- Replace testimonial data with real client feedback (lines 8-39)
- Add client avatar images to `public/images/testimonials/`
- Update the `avatar` property with image paths

### 5. Contact Information

**Contact Section** (`src/components/Contact.jsx`):
- Update email address (line 113 and 127)
- Update phone number (line 122 and 135)
- Update location (line 146-149)
- Update social media links (lines 156-180)

**Footer** (`src/components/Footer.jsx`):
- Update brand name (line 43)
- Update tagline (lines 46-48)
- Update social media links (lines 50-82)
- Replace "YourName" with your actual name (line 151)

### 6. Colors and Branding

Edit `src/index.css` (lines 1-20) to customize:
```css
:root {
  --primary-color: #2563eb;      /* Main brand color */
  --secondary-color: #10b981;    /* Secondary accent */
  --accent-color: #f59e0b;       /* Highlight color */
}
```

### 7. Fonts

The project uses Inter and Poppins from Google Fonts. To change:
1. Update the Google Fonts link in `index.html` (line 12)
2. Update font variables in `src/index.css` (lines 16-17)

### 8. Form Submission

The contact form currently logs to console. To add real functionality:

**Option A - Email Service (EmailJS)**
```bash
npm install @emailjs/browser
```

**Option B - Backend API**
Update the `handleSubmit` function in `src/components/Contact.jsx` (line 18)

### 9. Images

Add your images to the `public/images/` directory:
```
public/
├── images/
│   ├── hero-portrait.jpg        (600x800px)
│   ├── about-photo.jpg          (600x750px)
│   ├── training-program.jpg     (800x600px)
│   ├── companies/
│   │   ├── vois.png
│   │   ├── valeo.png
│   │   ├── etisalat.png
│   │   ├── el-sewedy.png
│   │   └── freelancer.png
│   └── testimonials/
│       ├── client1.jpg
│       ├── client2.jpg
│       └── ...
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 968px
- **Desktop**: > 968px

## 🎭 Animation Customization

All animations use Framer Motion. Customize in each component file:
- **Duration**: Change `duration` value in variants
- **Delay**: Modify `delayChildren` and `staggerChildren`
- **Easing**: Update `ease` property

## 🔧 Advanced Customization

### Add New Sections
1. Create component in `src/components/`
2. Create corresponding CSS file
3. Import and add to `src/App.jsx`

### Modify Slider Settings
Edit `sliderSettings` object in:
- `src/components/Companies.jsx` (line 15)
- `src/components/Testimonials.jsx` (line 45)

### Add Dark Mode (Optional)
The CSS includes dark mode variables. To enable:
1. Add theme toggle state in `App.jsx`
2. Apply `data-theme="dark"` attribute to `<html>` tag

## 📦 Dependencies

- **react**: ^18.3.1
- **react-dom**: ^18.3.1
- **framer-motion**: ^11.0.0
- **react-slick**: ^0.30.0
- **slick-carousel**: ^1.8.1
- **swiper**: ^11.0.0
- **react-icons**: ^5.0.0

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json scripts:
# "predeploy": "npm run build"
# "deploy": "gh-pages -d dist"
npm run deploy
```

## 📝 SEO Checklist

- [x] Semantic HTML tags
- [x] Meta descriptions
- [x] Open Graph tags (add to `index.html` for social sharing)
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Configure Analytics (Google Analytics, etc.)

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Lazy Loading**: Images load on scroll (already implemented)
3. **Code Splitting**: Vite automatically splits vendor bundles
4. **Caching**: Configure in hosting platform

## 📄 License

MIT License - feel free to use this template for your personal portfolio!

## 🤝 Support

For issues or questions:
- Check existing GitHub issues
- Create a new issue with detailed description
- Include browser/device information for bugs

---

**Built with ❤️ using React + Vite**

Ready to go from Zero to Market-Ready? Customize this template and launch your personal brand! 🚀
