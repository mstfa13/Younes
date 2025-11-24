# Professional Landing Page Website Builder Prompt

## Overview
You are an expert web developer tasked with creating a modern, professional landing page website similar to the TechBytes platform. This website should be built using React, Vite, and modern web technologies with a focus on animations, user experience, and conversion optimization.

---

## Tech Stack Requirements

### Core Technologies
- **Frontend Framework**: React 18.3+ with functional components and hooks
- **Build Tool**: Vite 5+ for fast development and optimized builds
- **Routing**: React Router DOM 7+ for multi-page navigation
- **Animations**: Framer Motion 11+ for scroll animations, page transitions, and interactive elements
- **Icons**: React Icons 5+ (Font Awesome icons primarily)
- **Styling**: Pure CSS with CSS custom properties (CSS variables) - NO CSS frameworks

### Additional Libraries
- **Slider/Carousel**: React Slick 0.30+ with Slick Carousel 1.8+
- **Optional**: Swiper 11+ for advanced carousel needs

---

## Project Structure

```
project-root/
├── public/
│   └── images/
│       ├── companies/          # Partner/client logos
│       ├── testimonials/       # User avatars
│       └── [brand-assets]      # Hero images, backgrounds
├── src/
│   ├── components/
│   │   ├── Header.jsx/css      # Sticky navigation
│   │   ├── Hero.jsx/css        # Above-fold section
│   │   ├── About.jsx/css       # Introduction section
│   │   ├── Companies.jsx/css   # Social proof/partners
│   │   ├── Problems.jsx/css    # Pain points
│   │   ├── Solutions.jsx/css   # Value propositions
│   │   ├── Services.jsx/css    # Service offerings
│   │   ├── HowItWorks.jsx/css  # Process steps
│   │   ├── Testimonials.jsx/css # Social proof
│   │   ├── FAQ.jsx/css         # Accordion FAQ
│   │   ├── Footer.jsx/css      # Site footer
│   │   ├── AboutPage.jsx       # Dedicated about page
│   │   ├── ServicesPage.jsx    # Detailed services page
│   │   ├── RegistrationForm.jsx # User registration
│   │   ├── EnterpriseForm.jsx  # B2B lead form
│   │   └── QuirkyEffects.jsx   # Background effects
│   ├── App.jsx                 # Main homepage layout
│   ├── main.jsx                # Router setup
│   ├── index.css               # Global styles & variables
│   └── quirky-effects.css      # Background animations
├── index.html
├── package.json
└── vite.config.js
```

---

## Design System & Styling

### CSS Custom Properties (Required in index.css)

```css
:root {
  /* Primary Brand Colors */
  --primary-color: #7A0000;      /* Main brand color */
  --primary-dark: #5a0000;       /* Darker variant */
  --primary-light: #9a0000;      /* Lighter variant */
  --secondary-color: #4A5568;    /* Secondary accent */
  --accent-color: #1F2937;       /* Dark accent */
  
  /* Neutral Colors */
  --bg-color: #FFFFFF;           /* Main background */
  --bg-secondary: #f8f6f6;       /* Secondary background */
  --bg-accent: #fdf9f8;          /* Accent background */
  --text-primary: #1F2937;       /* Primary text */
  --text-secondary: #4A5568;     /* Secondary text */
  --text-light: #6b7280;         /* Light text */
  --border-color: #e5e7eb;       /* Borders */
  
  /* Shadows (with brand color tints) */
  --shadow-sm: 0 1px 2px 0 rgba(122, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(122, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(122, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(122, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  
  /* Typography */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-heading: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  /* Spacing */
  --section-padding: 100px 20px;
  --container-max-width: 1200px;
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-medium: 0.3s ease;
  --transition-slow: 0.5s ease;
  
  /* Border Radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --radius-xl: 8px;
  --radius-full: 9999px;
}
```

### Reusable CSS Classes

```css
/* Button Styles */
.btn {
  padding: 12px 32px;
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all var(--transition-medium);
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  color: white;
  box-shadow: var(--shadow-md);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn-secondary:hover {
  background: var(--primary-color);
  color: white;
}

/* Glass Card Effect */
.glass-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: var(--shadow-md);
}

/* Hover Lift Effect */
.hover-lift {
  transition: transform var(--transition-medium), box-shadow var(--transition-medium);
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* Gradient Text */
.gradient-text {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Highlight Text */
.highlight-text {
  color: var(--primary-color);
  position: relative;
}
```

### Responsive Typography

```css
h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
}

h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
}

h3 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
}

p {
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  line-height: 1.7;
}
```

---

## Component Structure & Patterns

### 1. Header Component (Sticky Navigation)

**Features Required:**
- Fixed position with scroll detection (add shadow/background on scroll)
- Logo with initials in circular badge (e.g., "TB" for TechBytes)
- Desktop horizontal navigation links
- Mobile hamburger menu with slide-in drawer
- CTA button (e.g., "Join Program")
- Active section highlighting on scroll
- Smooth scroll to sections on same page
- Navigate to other pages using React Router

**Key Implementation Details:**
```jsx
const [scrolled, setScrolled] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [activeSection, setActiveSection] = useState('home');

// Scroll detection
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
    // Update active section based on scroll position
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Smooth scroll function
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};
```

**Styling:**
- Height: 80px fixed
- Background: Transparent initially, white with shadow on scroll
- z-index: 1000
- Mobile menu: Full-screen overlay with backdrop blur

---

### 2. Hero Section

**Features Required:**
- Two-column layout (content left, image/graphic right)
- Attention-grabbing headline with gradient/highlight text
- Subheadline describing value proposition
- Two CTA buttons (primary and secondary)
- Trust badge or social proof element
- Animated entrance using Framer Motion
- Full viewport height or near-full

**Animation Pattern:**
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
```

**Content Structure:**
- H1: Main headline (e.g., "Learn. Lead. Transform.")
- P: Subtitle (value proposition in 1-2 sentences)
- Buttons: Primary CTA + Secondary CTA
- Trust element: "Trusted by 500+ professionals" or similar

---

### 3. Companies/Social Proof Section

**Features Required:**
- Grid or slider of partner/client logos
- Grayscale logos with color on hover
- Responsive grid (5-6 columns desktop, 3 mobile)
- Optional: Infinite scroll carousel effect

**Content:**
- Company logos (transparent PNGs)
- Optional trust text: "Trusted by leading companies"

---

### 4. About Section

**Features Required:**
- Two-column layout (image left, content right)
- Professional photo or illustration
- 3-4 key statistics in card format
- "Read More" link to dedicated About page
- Smooth scroll-triggered animations

**Statistics Card Pattern:**
```jsx
<div className="stat-item glass-card hover-lift">
  <div className="stat-number">500+</div>
  <div className="stat-label">Professionals Trained</div>
</div>
```

---

### 5. Problems Section

**Features Required:**
- Grid layout (2-3 columns)
- 4-6 problem cards with icons
- Each card: Icon, title, description
- Dark/attention-grabbing styling
- Framer Motion stagger animation

**Card Structure:**
```jsx
{
  icon: <FaIcon />,
  title: "Problem Title",
  description: "Brief description of the pain point"
}
```

---

### 6. Solutions Section

**Features Required:**
- Mirror structure of Problems section
- Grid layout with solution cards
- Icons representing solutions
- Lighter, more positive color scheme
- Highlight how solutions address problems

---

### 7. Services Section

**Features Required:**
- Grid layout (3 columns desktop, 1 mobile)
- Service cards with icons, titles, descriptions, feature lists
- Each card should have:
  - Large gradient icon
  - Service title
  - Brief description
  - Bulleted feature list (✓ bullets)
- CTA section at bottom with two buttons:
  - "Explore All Services" → Navigate to /services page
  - "Get Started Today" → Open registration
- Gradient background

**Card Pattern:**
```jsx
<div className="service-card glass-card hover-lift">
  <div className="service-icon">{icon}</div>
  <h3 className="service-title">{title}</h3>
  <p className="service-description">{description}</p>
  <ul className="service-features">
    {features.map(feature => (
      <li><span className="feature-bullet">✓</span>{feature}</li>
    ))}
  </ul>
</div>
```

---

### 8. How It Works Section

**Features Required:**
- Timeline or step-by-step process
- 3-5 numbered steps
- Each step: Number badge, title, description, optional icon
- Visual connector line between steps (vertical or horizontal)
- Animate steps sequentially on scroll

**Step Structure:**
```jsx
<div className="step-item">
  <div className="step-number">1</div>
  <h3 className="step-title">Step Title</h3>
  <p className="step-description">Step description</p>
</div>
```

---

### 9. Testimonials Section

**Features Required:**
- Carousel/slider with React Slick
- 3 testimonials visible on desktop, 1 on mobile
- Each testimonial card:
  - Quote text
  - Star rating (5 stars)
  - User name
  - User role/company
  - Avatar image
  - Optional LinkedIn link
- Autoplay with pause on hover
- Navigation arrows and dots

**Slider Settings:**
```jsx
const sliderSettings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } }
  ]
};
```

---

### 10. FAQ Section

**Features Required:**
- Accordion-style FAQ items
- Expand/collapse animation with Framer Motion
- Plus/minus icon toggle
- 5-7 common questions
- Cosmic/starry CTA section at bottom:
  - Animated star background (CSS keyframes)
  - Headline + subtext
  - CTA button with icon

**Accordion Animation:**
```jsx
<motion.div
  className="faq-answer"
  initial={false}
  animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
  transition={{ duration: 0.3, ease: 'easeInOut' }}
>
  <div className="faq-answer-inner">{answer}</div>
</motion.div>
```

**Cosmic CTA:**
```css
.cosmic-background {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
}
.stars, .stars2, .stars3 {
  position: absolute;
  background: transparent;
  /* Multiple box-shadows for star effect */
  animation: animStar 50s linear infinite;
}
@keyframes animStar {
  from { transform: translateY(0); }
  to { transform: translateY(-2000px); }
}
```

---

### 11. Footer Component

**Features Required:**
- Multi-column layout (4 columns desktop, 1-2 mobile)
- Brand section: Logo, tagline, social icons
- Quick Links: Home, About, Services, Testimonials
- Resources: Blog, FAQ, Support, etc.
- Legal: Privacy Policy, Terms, etc.
- Bottom bar: Copyright, developer credit
- Social media icons with hover effects
- Smart navigation (FAQ link scrolls to FAQ on home or navigates + scrolls from other pages)

**Navigation Logic:**
```jsx
const handleFAQClick = (e) => {
  e.preventDefault();
  const faqElement = document.getElementById('faq');
  if (faqElement) {
    faqElement.scrollIntoView({ behavior: 'smooth' });
  } else {
    navigate('/', { state: { scrollToFAQ: true } });
  }
};
```

---

### 12. About Page (Dedicated Route)

**Features Required:**
- Hero section with full-width background image (no text overlay)
- Timeline journey section:
  - Vertical timeline with alternating left/right cards
  - Gold dot markers on timeline
  - Each milestone: Year, title, description, optional image
  - Responsive (stacks vertically on mobile)
- Stats section with gradient background:
  - 4 key statistics in row
  - Gradient text numbers
  - Animated on scroll
- Social links section
- CTA section

**Timeline Pattern:**
```jsx
const milestones = [
  {
    year: "2014-2019",
    title: "Milestone Title",
    description: "Detailed description",
    image: "/path/to/image.jpg",
    side: "left" // or "right"
  }
];
```

---

### 13. Services Page (Dedicated Route)

**Features Required:**
- Hero banner with gradient background
- Grid of detailed service cards (same 6 services as homepage)
- Each card includes:
  - Icon, title, description
  - Highlight badges (e.g., "Beginner to Advanced")
  - Feature checklist with checkmark icons
- "Why Choose Us?" section with benefits grid
- CTA section with gradient background + glowing animation

---

### 14. Registration Form

**Features Required:**
- Multi-field form for individual sign-ups
- Fields: Name, phone, email, address, current job, company, years of experience, university, graduation year, major (with "Other" option), English level, how did you hear about us, resume upload (PDF), setup preference (radio buttons), motivation
- File upload with validation (PDF only, max 10MB)
- Form validation and error messages
- Success/error handling
- Responsive design
- Opens in new tab from main site

**Form Sections:**
```jsx
<form onSubmit={handleSubmit}>
  <div className="form-section">
    <h3>Personal Information</h3>
    {/* Name, Phone, Email, Address */}
  </div>
  <div className="form-section">
    <h3>Professional Background</h3>
    {/* Job, Company, Experience, University, etc. */}
  </div>
  <div className="form-section">
    <h3>Additional Information</h3>
    {/* English level, referral source, resume, setup preference */}
  </div>
</form>
```

---

### 15. Enterprise Form

**Features Required:**
- B2B lead capture form
- Fields: Company name, contact person, email, phone, industry, company size, requirements, budget range
- Textarea for detailed requirements
- Professional styling matching brand
- Navigate to /enterprise route

---

### 16. Quirky Effects Component

**Features Required:**
- Background decorative elements (optional)
- Floating particles, gradient orbs, or geometric shapes
- Low opacity, non-intrusive
- Pure CSS animations
- Fixed position, z-index: -1

---

## Routing Structure

**Required Routes:**
```jsx
<Routes>
  <Route path="/" element={<App />} />              {/* Homepage */}
  <Route path="/about" element={<AboutPage />} />   {/* Detailed about */}
  <Route path="/services" element={<ServicesPage />} /> {/* Detailed services */}
  <Route path="/enterprise" element={<EnterpriseForm />} /> {/* B2B form */}
</Routes>
```

**Navigation Handling:**
- Internal section links use `scrollToSection()`
- Cross-page links use `navigate()`
- State passing for scroll-to functionality: `navigate('/', { state: { scrollToFAQ: true } })`

---

## Animation Patterns (Framer Motion)

### Standard Section Animation
```jsx
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={containerVariants}
>
  {/* Content with itemVariants */}
</motion.section>
```

### Stagger Children
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};
```

### Card Hover Effects
```jsx
<motion.div
  whileHover={{ scale: 1.03, y: -8 }}
  transition={{ duration: 0.3 }}
>
  {/* Card content */}
</motion.div>
```

### Button Interactions
```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
>
  Button Text
</motion.button>
```

---

## Responsive Design Breakpoints

```css
/* Desktop First Approach */

/* Tablets */
@media (max-width: 968px) {
  /* 2-column grids, reduce padding */
}

/* Mobile */
@media (max-width: 640px) {
  /* 1-column layouts, stack everything */
  /* Hide desktop nav, show mobile menu */
  /* Reduce font sizes, padding */
}
```

**Key Responsive Rules:**
- Mobile menu activates < 768px
- Grid columns: 3 → 2 → 1
- Section padding: 100px → 80px → 60px
- Font sizes use `clamp()` for fluid scaling
- Images: `max-width: 100%; height: auto;`

---

## Performance Optimization

1. **Lazy Loading**: Use React.lazy() for route-based code splitting
2. **Image Optimization**: Use WebP format with fallbacks, lazy load images below fold
3. **CSS**: Single CSS file per component, use CSS variables for theme consistency
4. **Bundle Size**: Keep dependencies minimal, tree-shake unused code
5. **Animations**: Use CSS transforms and opacity for best performance (avoid animating width/height)

---

## Content Guidelines

### Section Structure (Consistent Pattern)
```jsx
<section className="section-name" id="section-id">
  <div className="section-container">
    <div className="section-header">
      <p className="section-subtitle">Eyebrow Text</p>
      <h2 className="section-title">Main Heading with <span className="highlight">Highlight</span></h2>
      <p className="section-description">Supporting paragraph</p>
    </div>
    <div className="section-content">
      {/* Main content: grid, cards, etc. */}
    </div>
    <div className="section-cta">
      {/* Optional CTA */}
    </div>
  </div>
</section>
```

### Copy Tone
- **Headlines**: Action-oriented, benefit-focused (e.g., "Transform Your Career", "Build Market-Ready Skills")
- **Body**: Clear, concise, professional but approachable
- **CTAs**: Strong verbs (e.g., "Get Started", "Join Now", "Explore Services")
- **Social Proof**: Specific numbers (e.g., "500+ trained", "95% success rate")

---

## Form Handling Best Practices

### State Management
```jsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  // ... all fields
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};
```

### File Upload
```jsx
const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file && file.type === 'application/pdf' && file.size <= 10485760) {
    setFormData(prev => ({ ...prev, resume: file }));
  } else {
    alert('Please upload a PDF file under 10MB');
  }
};
```

### Form Validation
- Required fields marked with asterisk (*)
- Real-time validation on blur
- Submit button disabled until form valid
- Clear error messages below fields

---

## Accessibility Requirements

1. **Semantic HTML**: Use `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
2. **ARIA Labels**: Add to icon-only buttons, mobile menu toggle
3. **Keyboard Navigation**: All interactive elements focusable and operable
4. **Focus Styles**: Visible focus indicators (outline or custom)
5. **Alt Text**: All images must have descriptive alt attributes
6. **Color Contrast**: WCAG AA compliant (4.5:1 for normal text, 3:1 for large text)
7. **Form Labels**: Every input has associated label (visible or aria-label)

---

## SEO Optimization

1. **Title Tags**: Unique per page
2. **Meta Descriptions**: Compelling, 150-160 characters
3. **Heading Hierarchy**: One H1 per page, proper H2-H6 nesting
4. **Alt Text**: Descriptive image alt attributes
5. **Open Graph**: OG tags for social sharing
6. **Sitemap**: Generate sitemap.xml
7. **Robots.txt**: Configure crawling rules

---

## Development Workflow

### Initial Setup
```bash
npm create vite@latest project-name -- --template react
cd project-name
npm install framer-motion react-router-dom react-icons react-slick slick-carousel
npm run dev
```

### File Creation Order
1. Set up routing in main.jsx
2. Create index.css with design system
3. Build Header and Footer (used on all pages)
4. Build Hero section
5. Build remaining homepage sections in order
6. Create dedicated pages (About, Services, Forms)
7. Add animations and polish
8. Test responsiveness across breakpoints
9. Optimize performance

---

## Testing Checklist

- [ ] All links navigate correctly
- [ ] Smooth scroll works on same page
- [ ] Mobile menu opens/closes properly
- [ ] Forms validate and submit
- [ ] File upload handles large files and wrong types
- [ ] Carousel autoplay and navigation work
- [ ] FAQ accordion expands/collapses
- [ ] All animations trigger on scroll
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] Images load properly (check paths)
- [ ] Social links open in new tabs
- [ ] CTA buttons have correct onClick handlers
- [ ] Hover states work on all interactive elements
- [ ] No console errors
- [ ] Fast load time (< 3 seconds)

---

## Customization Instructions for User Input

When I provide you with specific content (company name, services, testimonials, etc.), you should:

1. **Replace Brand Elements**:
   - Logo initials in header (e.g., "TB" → user's initials)
   - Company name throughout (e.g., "TechBytes" → user's company)
   - Tagline (e.g., "by Ahmed Younes" → user's name)
   - Color scheme (use provided primary color or keep default)

2. **Update Content Sections**:
   - Hero headline and subtitle (user's value proposition)
   - About section (user's story, stats)
   - Problems section (6 pain points relevant to user's audience)
   - Solutions section (how user solves those problems)
   - Services section (user's service offerings with features)
   - How It Works (user's process steps)
   - Testimonials (user's client quotes and info)
   - FAQ (user's common questions)

3. **Adjust Forms**:
   - Registration form fields (add/remove based on needs)
   - Enterprise form fields (B2B specific questions)
   - Form submission endpoint (user's backend or email service)

4. **Modify Routes**:
   - Keep standard routes or add custom pages as needed
   - Ensure navigation links match available routes

5. **Update Social Links**:
   - Footer social icons (user's LinkedIn, Twitter, Facebook, etc.)
   - About page social links
   - Testimonial LinkedIn links

6. **Image Placeholders**:
   - Provide image requirements (dimensions, format)
   - User will place images in `/public/images/` folders
   - Update image paths in components

---

## Example Usage Prompt for User

**"Build me a landing page website based on this template using the following information:**

- **Company Name**: [Name]
- **Tagline**: [Tagline]
- **Primary Color**: [Hex code]
- **Hero Headline**: [Headline]
- **Hero Subheadline**: [Subheadline]
- **About Section**: [2-3 paragraphs about company/founder]
- **Statistics**: [4 key stats with numbers and labels]
- **Problems**: [List 6 pain points your audience faces]
- **Solutions**: [List 6 solutions you provide]
- **Services**: [List 6 services with titles, descriptions, and 4-5 features each]
- **How It Works**: [3-5 process steps with titles and descriptions]
- **Testimonials**: [Provide 6-8 testimonial quotes with names, roles, and companies]
- **FAQ**: [Provide 5-7 Q&A pairs]
- **Social Links**: [LinkedIn, Twitter, Facebook, Instagram, etc. URLs]
- **Contact Email**: [Email address]
- **Registration Form**: [Specify any custom fields needed]

Build the complete website with all sections, proper routing, animations, and responsive design. Use the design system and component structure specified in the template."**

---

## Final Notes

- **Code Quality**: Write clean, commented code with consistent naming conventions
- **File Organization**: Keep components modular, one component per file
- **CSS Methodology**: Use BEM-like naming (e.g., `.section-name__element--modifier`)
- **Git Commits**: Commit after each major component completion
- **Documentation**: Add README with setup instructions and component overview
- **Deployment**: Optimized for Vercel, Netlify, or similar platforms (run `npm run build`)

This template provides a professional, conversion-optimized landing page structure that can be customized for any business or personal brand. Follow the patterns and principles outlined to maintain consistency and quality.
