# 🚀 Deployment Guide - Vercel

Your Ahmed Younes portfolio is now ready to deploy to Vercel!

## ✅ What's Already Done

- ✅ Git repository initialized
- ✅ Code committed to GitHub: `https://github.com/mstfa13/Younes`
- ✅ All files pushed to the `main` branch

## 📦 Deploy to Vercel (3 Easy Steps)

### Step 1: Go to Vercel
Visit: **https://vercel.com**

### Step 2: Import Your GitHub Repository
1. Click **"Add New..."** → **"Project"**
2. Click **"Import Git Repository"**
3. Sign in with your GitHub account (mstfa13)
4. Find and select the **"Younes"** repository
5. Click **"Import"**

### Step 3: Configure & Deploy
Vercel will automatically detect it's a Vite project. The settings should be:

**Framework Preset:** `Vite`
**Build Command:** `npm run build`
**Output Directory:** `dist`
**Install Command:** `npm install`

Click **"Deploy"** and wait ~2 minutes!

## 🌐 Your Live URL

After deployment, you'll get a URL like:
- `https://younes.vercel.app`
- Or a custom domain if you add one

## 🔧 Automatic Deployments

Every time you push changes to GitHub, Vercel will automatically:
1. Build your site
2. Deploy the new version
3. Give you a preview URL

## 📝 Future Updates

To update your live site:
```bash
# Make your changes, then:
git add .
git commit -m "Update: describe your changes"
git push
```

Vercel will automatically redeploy! 🎉

## 🎨 Custom Domain (Optional)

In Vercel dashboard:
1. Go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (e.g., `ahmedyounes.com`)
4. Follow Vercel's DNS instructions

## 🆘 Troubleshooting

**Build Failed?**
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`

**Images Not Showing?**
- Images in `public/` folder are automatically served
- Use paths like `/images/hero-portrait.png` (starting with `/`)

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- GitHub Repository: https://github.com/mstfa13/Younes

---

## 🎯 Quick Summary

1. Go to **vercel.com**
2. Import **mstfa13/Younes** repository
3. Click **Deploy**
4. Get your live URL in 2 minutes!

That's it! Your portfolio will be live on the internet! 🌍✨
