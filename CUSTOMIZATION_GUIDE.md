# Quick Customization Guide

This guide helps you quickly customize the portfolio landing page with your personal information.

## 🎯 Essential Changes (Do These First!)

### 1. Personal Information

#### Hero Section
**File**: `src/components/Hero.jsx`

```jsx
// Line 39 - Replace with your name
I'm <strong>[Your Name]</strong>, a Software & IT Project Manager...

// Line 65 - Add your portrait image
// Uncomment and add your image path:
<img src="/images/hero-portrait.jpg" alt="Professional portrait" />
```

#### About Section
**File**: `src/components/About.jsx`

```jsx
// Lines 47-55 - Update your bio
With over <strong>10+ years of experience</strong>...

// Lines 67-79 - Update your stats
<span className="stat-number">10+</span>
<span className="stat-label">Years Experience</span>
```

### 2. Contact Information

#### Contact Section
**File**: `src/components/Contact.jsx`

```jsx
// Line 113, 127 - Update email
<a href="mailto:your.email@example.com">your.email@example.com</a>

// Line 122, 135 - Update phone
<a href="tel:+1234567890">+1 (234) 567-890</a>

// Line 146-149 - Update location
Cairo, Egypt
Available for remote consulting worldwide
```

#### Social Media Links
**Files**: `src/components/Contact.jsx` & `src/components/Footer.jsx`

```jsx
// Update all social links:
<a href="https://linkedin.com/in/YOUR-PROFILE">LinkedIn</a>
<a href="https://github.com/YOUR-PROFILE">GitHub</a>
<a href="https://twitter.com/YOUR-PROFILE">Twitter</a>
```

### 3. Brand Name

#### Footer
**File**: `src/components/Footer.jsx`

```jsx
// Line 43 - Update brand name
<div className="footer-logo">
  Your<span>Brand</span>
</div>

// Line 151 - Update copyright
&copy; {currentYear} <a href="#home">YourName</a>
```

#### Page Title
**File**: `index.html`

```html
<!-- Line 16 - Update page title -->
<title>YourName - Software & IT Project Manager</title>

<!-- Line 7 - Update meta description -->
<meta name="description" content="Your custom description here" />
```

## 📸 Adding Images

### Required Images

Create these folders in the `public` directory:

```
public/
├── images/
│   ├── hero-portrait.jpg        (Recommended: 600x800px)
│   ├── about-photo.jpg          (Recommended: 600x750px)
│   ├── training-program.jpg     (Recommended: 800x600px)
│   ├── companies/
│   │   ├── vois.png            (Recommended: 200x80px)
│   │   ├── valeo.png
│   │   ├── etisalat.png
│   │   ├── el-sewedy.png
│   │   └── freelancer.png
│   └── testimonials/
│       ├── client1.jpg          (Recommended: 100x100px)
│       ├── client2.jpg
│       └── ...
```

### How to Add Images

#### Hero Image
**File**: `src/components/Hero.jsx`

```jsx
// Find line 65 and uncomment:
<img src="/images/hero-portrait.jpg" alt="Professional portrait" />

// Delete or comment out the placeholder:
// <div className="hero-image-placeholder">...</div>
```

#### About Image
**File**: `src/components/About.jsx`

```jsx
// Find line 38 and uncomment:
<img src="/images/about-photo.jpg" alt="Professional photo" />

// Delete the placeholder
```

#### Training Program Image
**File**: `src/components/Training.jsx`

```jsx
// Find line 112 and uncomment:
<img src="/images/training-program.jpg" alt="Training program" />

// Delete the placeholder
```

#### Company Logos
**File**: `src/components/Companies.jsx`

```jsx
// Update lines 7-11:
const companies = [
  { name: 'VOIS', logo: '/images/companies/vois.png' },
  { name: 'Valeo', logo: '/images/companies/valeo.png' },
  { name: 'Etisalat', logo: '/images/companies/etisalat.png' },
  { name: 'El Sewedy', logo: '/images/companies/el-sewedy.png' },
  { name: 'Freelancer.com', logo: '/images/companies/freelancer.png' }
];
```

#### Testimonial Avatars
**File**: `src/components/Testimonials.jsx`

```jsx
// Update avatar property in testimonials array (lines 8-39):
{
  quote: "...",
  name: "Sarah Ahmed",
  role: "Junior Project Manager",
  avatar: '/images/testimonials/sarah.jpg', // Add this
  rating: 5
}
```

## 🎨 Colors & Branding

**File**: `src/index.css`

```css
:root {
  /* Change these to match your brand */
  --primary-color: #2563eb;      /* Main brand color (blue) */
  --secondary-color: #10b981;    /* Secondary accent (green) */
  --accent-color: #f59e0b;       /* Highlight color (orange) */
}
```

**Color Examples**:
- Blue: `#2563eb`
- Green: `#10b981`
- Purple: `#8b5cf6`
- Red: `#ef4444`
- Orange: `#f59e0b`

## ✏️ Content Updates

### Training Program Benefits
**File**: `src/components/Training.jsx`

```jsx
// Lines 9-33 - Customize your program benefits:
const benefits = [
  {
    icon: <FaLaptopCode />,
    title: "Your Benefit Title",
    text: "Your benefit description here."
  },
  // Add more benefits...
];
```

### Testimonials
**File**: `src/components/Testimonials.jsx`

```jsx
// Lines 8-39 - Add real testimonials:
const testimonials = [
  {
    quote: "Add the client's testimonial quote here...",
    name: "Client Name",
    role: "Client Role/Position",
    avatar: '/images/testimonials/client.jpg',
    rating: 5
  },
  // Add more testimonials...
];
```

### About Section Stats
**File**: `src/components/About.jsx`

```jsx
// Lines 67-79 - Update your statistics:
<div className="stat-item">
  <span className="stat-number">10+</span>
  <span className="stat-label">Years Experience</span>
</div>
```

## 📧 Contact Form Setup

### Option 1: EmailJS (Recommended for beginners)

1. Install EmailJS:
   ```bash
   npm install @emailjs/browser
   ```

2. Create account at [EmailJS](https://www.emailjs.com/)

3. Update `src/components/Contact.jsx`:
   ```jsx
   import emailjs from '@emailjs/browser';

   const handleSubmit = (e) => {
     e.preventDefault();
     
     emailjs.send(
       'YOUR_SERVICE_ID',
       'YOUR_TEMPLATE_ID',
       formData,
       'YOUR_PUBLIC_KEY'
     )
     .then(() => {
       setSubmitted(true);
       setFormData({ name: '', email: '', message: '' });
     })
     .catch((error) => {
       console.error('Error:', error);
     });
   };
   ```

### Option 2: Your Own Backend

Update the `handleSubmit` function in `src/components/Contact.jsx`:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## 🚀 Quick Deploy Checklist

Before deploying, make sure you've updated:

- [ ] Personal name and bio
- [ ] All email addresses
- [ ] Phone number
- [ ] Social media links
- [ ] Images (hero, about, training, logos, testimonials)
- [ ] Testimonials with real content
- [ ] Training program benefits
- [ ] Contact form functionality
- [ ] Brand colors (optional)
- [ ] Page title and meta description
- [ ] Copyright name in footer

## 📝 Testing Checklist

- [ ] All links work correctly
- [ ] Contact form submits properly
- [ ] Images load correctly
- [ ] Responsive design works on mobile
- [ ] Animations play smoothly
- [ ] All sections scroll correctly
- [ ] Social media links open in new tabs

## 🎓 Additional Customization

### Change Fonts

**File**: `index.html`
```html
<!-- Line 12 - Change Google Fonts link -->
<link href="https://fonts.googleapis.com/css2?family=YOUR-FONT&display=swap" rel="stylesheet" />
```

**File**: `src/index.css`
```css
/* Lines 16-17 - Update font variables */
--font-primary: 'Your-Font', sans-serif;
--font-heading: 'Your-Font', sans-serif;
```

### Add More Companies

**File**: `src/components/Companies.jsx`
```jsx
// Just add more objects to the array:
const companies = [
  { name: 'Company1', logo: '/images/companies/company1.png' },
  { name: 'Company2', logo: '/images/companies/company2.png' },
  // Add as many as you want
];
```

### Modify Slider Speed

**Companies Slider** (`src/components/Companies.jsx`):
```jsx
// Line 19 - Change autoplay speed
speed: 3000, // Slower = higher number
```

**Testimonials Slider** (`src/components/Testimonials.jsx`):
```jsx
// Line 51 - Change autoplay speed
autoplaySpeed: 5000, // Time between slides
```

---

Need help? Check the main README.md for more detailed documentation!
