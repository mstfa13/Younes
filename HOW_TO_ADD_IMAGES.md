# 📸 How to Add Your Images - Step by Step Guide

## 🎯 Quick Overview

You need to add your images to the `public/images/` folder. Here's how:

---

## 📁 Step 1: Create the Folder Structure

In your project folder, create these folders:

```
C:\Users\Mostafa\Desktop\New folder (2)\
└── public/
    └── images/
        ├── companies/          (For company logos)
        ├── testimonials/       (For client photos)
        ├── hero-portrait.jpg   (Your hero section photo)
        ├── about-photo.jpg     (Your about section photo)
        └── training-program.jpg (Training program image)
```

---

## 🏢 Step 2: Add Company Logos

### Where to get logos:
1. **Official websites** - Go to company's website, scroll to footer, find "Press Kit" or "Media Resources"
2. **Google Images** - Search "[Company Name] logo PNG transparent"
3. **Logos from web** - Use free logo resources like Clearbit, Brandfetch

### How to add them:

1. Download logos in **PNG format** (with transparent background preferred)
2. Rename them to match these names:
   - `vois.png`
   - `valeo.png`
   - `etisalat.png`
   - `el-sewedy.png`
   - `freelancer.png`

3. Put them in: `public/images/companies/`

### Logo specifications:
- **Format**: PNG (transparent background is best)
- **Size**: Around 200-300px width
- **File size**: Under 100KB each
- **Style**: Original company logos (they look professional in grayscale)

---

## 👤 Step 3: Add Your Hero Portrait

This is the main photo in the hero section (top of the page).

### Photo requirements:
- **Format**: JPG or PNG
- **Size**: 600 x 800 pixels (portrait orientation)
- **File size**: Under 500KB
- **Quality**: Professional photo, good lighting
- **Background**: Clean, professional background

### Where to put it:
1. Save your photo
2. Rename it to: `hero-portrait.jpg`
3. Put it in: `public/images/`

**Full path**: `C:\Users\Mostafa\Desktop\New folder (2)\public\images\hero-portrait.jpg`

---

## 📷 Step 4: Add About Section Photo

This is a secondary photo in the about section.

### Photo requirements:
- **Format**: JPG or PNG
- **Size**: 600 x 750 pixels
- **File size**: Under 500KB
- **Style**: Can be different from hero (working photo, casual professional, etc.)

### Where to put it:
1. Save your photo
2. Rename it to: `about-photo.jpg`
3. Put it in: `public/images/`

**Full path**: `C:\Users\Mostafa\Desktop\New folder (2)\public\images\about-photo.jpg`

---

## 🎓 Step 5: Add Training Program Image

This can be:
- A photo of you teaching
- A graphic/illustration about training
- A workspace/laptop image
- A designed graphic

### Image requirements:
- **Format**: JPG or PNG
- **Size**: 800 x 600 pixels (landscape)
- **File size**: Under 500KB

### Where to put it:
1. Save your image
2. Rename it to: `training-program.jpg`
3. Put it in: `public/images/`

**Full path**: `C:\Users\Mostafa\Desktop\New folder (2)\public\images\training-program.jpg`

---

## 👥 Step 6: Add Testimonial Photos (Optional)

If you have client photos:

### Photo requirements:
- **Format**: JPG or PNG
- **Size**: 100 x 100 pixels (square)
- **File size**: Under 50KB each

### Where to put them:
1. Name them descriptively: `client1.jpg`, `sarah-ahmed.jpg`, etc.
2. Put them in: `public/images/testimonials/`

Then update `src/components/Testimonials.jsx`:
```javascript
{
  quote: "...",
  name: "Sarah Ahmed",
  role: "...",
  avatar: '/images/testimonials/sarah-ahmed.jpg',  // Add this line
  rating: 5
}
```

---

## 🚀 Quick Method - Just for Testing

If you don't have images ready yet:

1. **Search Google Images** for:
   - "Professional portrait man" for hero image
   - "[Company name] logo PNG" for company logos
   
2. Download and save them with the correct names in the correct folders

3. The website will automatically show them!

---

## ✅ Checklist

After adding images, check that you have:

```
public/images/
├── hero-portrait.jpg          ✓
├── about-photo.jpg            ✓
├── training-program.jpg       ✓
└── companies/
    ├── vois.png              ✓
    ├── valeo.png             ✓
    ├── etisalat.png          ✓
    ├── el-sewedy.png         ✓
    └── freelancer.png        ✓
```

---

## 🎨 Image Optimization Tips

Before adding images:

1. **Resize them** - Don't use huge images
   - Use tools like: Photoshop, GIMP, or online tools like TinyPNG
   
2. **Compress them** - Reduce file size
   - Visit: https://tinypng.com or https://squoosh.app
   
3. **Convert to WebP** (optional, for better performance)
   - Use: https://cloudconvert.com/jpg-to-webp

---

## ❓ Troubleshooting

**Images not showing?**
1. Check the file names match exactly (case-sensitive!)
2. Check the file extension (.jpg vs .jpeg vs .png)
3. Make sure images are in `public/images/` not `src/images/`
4. Refresh your browser (Ctrl + Shift + R)

**Images look pixelated?**
- Use higher resolution images
- Make sure you're not stretching small images

**Images too large/slow loading?**
- Compress them using TinyPNG
- Resize them to the recommended dimensions

---

## 💡 Pro Tips

1. **Use transparent PNGs** for company logos (looks cleaner)
2. **Keep file names lowercase** and use hyphens (hero-portrait.jpg not Hero Portrait.jpg)
3. **Optimize before uploading** - compressed images load faster
4. **Professional photos matter** - invest in good photography or use high-quality stock photos

---

## 🆘 Need Images Right Now?

### Free Stock Photo Sites:
- **Unsplash** - unsplash.com (Free professional photos)
- **Pexels** - pexels.com (Free stock photos)
- **Pixabay** - pixabay.com (Free images)

### For Company Logos:
- **Clearbit** - logo.clearbit.com/[domain].com
- **Brandfetch** - brandfetch.com
- **Company websites** - Check their press/media sections

---

**After adding images, the website will automatically display them! No code changes needed.** 🎉
