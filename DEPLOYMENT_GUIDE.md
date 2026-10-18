# 🚀 DEPLOYMENT GUIDE - JEJAK DI LERENG KE VERCEL

## Step-by-Step Deployment

### STEP 1: Persiapan Awal (5 menit)

```bash
# 1. Navigate ke project folder
cd D:\BELAJAR\Web\ Infogrfis\REFRENSI\jelak-di-lereng

# 2. Initialize Git (jika belum)
git init
git config user.name "Your Name"
git config user.email "your.email@example.com"

# 3. Add all files
git add .

# 4. Initial commit
git commit -m "feat: Initial Jejak di Lereng project setup"
```

---

### STEP 2: Setup GitHub Repository (5 menit)

**Option A: GitHub Web (Recommended)**

1. Buka [github.com](https://github.com)
2. Login / Sign up
3. Click **"+"** (top right) → **"New repository"**
4. Name: `jejak-di-lereng`
5. Description: `Interactive data visualization: 112 landslide events in DIY`
6. Select **"Public"** (untuk collaboration)
7. Click **"Create repository"**

**Copy** perintah yang ditampilkan di repository homepage, kemudian di terminal:

```bash
git remote add origin https://github.com/[YOUR_USERNAME]/jejak-di-lereng.git
git branch -M main
git push -u origin main
```

**Option B: GitHub CLI**

```bash
# Install GitHub CLI (jika belum)
# Download dari https://cli.github.com

# Login
gh auth login

# Create repo
gh repo create jejak-di-lereng --public --source=. --remote=origin --push
```

---

### STEP 3: Setup Vercel Account & Deploy (3 menit)

**Option A: Vercel Dashboard (Recommended untuk beginners)**

1. Buka [vercel.com](https://vercel.com)
2. Click **"Sign Up"** → Pilih **"GitHub"**
3. Authorize Vercel untuk akses GitHub
4. Di dashboard, click **"Add New"** → **"Project"**
5. Select repository **"jejak-di-lereng"**
6. Framework: **Next.js** (auto-detected)
7. Root directory: **./** (default)
8. Environment variables: Leave empty (optional untuk sekarang)
9. Click **"Deploy"** 🚀

**Vercel akan:**
- Build Next.js app
- Run production checks
- Deploy ke serverless functions
- Generate URL: `https://jejak-di-lereng.vercel.app` (atau custom domain)

**Option B: Vercel CLI**

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel --prod

# Follow prompts:
# Set up and deploy? → Y
# Which scope? → Your GitHub account
# Linked to? → jejak-di-lereng
# Want to modify? → N
# Deploy to production? → Y
```

---

### STEP 4: Verify Deployment ✅

Setelah deploy selesai, cek:

```bash
# 1. Buka URL di browser
https://jejak-di-lereng.vercel.app

# 2. Verifikasi:
  ✓ Header navigation muncul
  ✓ Hero section terload
  ✓ Charts interaktif berfungsi
  ✓ Download buttons visible
  ✓ Footer dengan info
  ✓ Responsive design (cek di mobile)
  ✓ No console errors (F12 → Console)
```

---

### STEP 5: Setup Custom Domain (Optional, 5 menit)

Di Vercel Dashboard:

1. Go to project → **"Settings"**
2. **"Domains"** tab
3. Add domain (contoh: `jejak-di-lereng.id` atau subdomain)
4. Follow DNS setup instructions
5. Wait 24-48 hours untuk DNS propagation

---

### STEP 6: Auto-Deploy from GitHub (Already Setup! ✅)

Setiap kali push ke `main` branch, Vercel otomatis:

```bash
# Local development
git add .
git commit -m "feat: Add new feature"
git push origin main

# ✅ Vercel akan auto-build & deploy dalam 1-2 menit
# Track deployment di Vercel Dashboard → Deployments
```

---

## 📋 Pre-Deployment Checklist

Pastikan sebelum deploy:

**Project Structure:**
- [x] `package.json` ada dengan semua dependencies
- [x] `next.config.js` configured
- [x] `tsconfig.json` configured
- [x] `tailwind.config.ts` configured
- [x] `.gitignore` includes `node_modules`, `.next`, `.env.local`

**Code Quality:**
- [x] No syntax errors (`npm run lint`)
- [x] Build successful locally (`npm run build`)
- [x] Development server works (`npm run dev`)
- [x] No TypeScript errors

**Assets:**
- [x] CSV files di `public/data/`
- [x] Logo files (1.png, 2.png, 3.png, 6.png) di `public/images/`
- [x] All images optimized (PNG format, reasonable size)

**Git & GitHub:**
- [x] Git repository initialized
- [x] All files committed
- [x] GitHub repository created & public
- [x] Remote origin configured

**Vercel Configuration:**
- [x] `vercel.json` configured
- [x] `.vercelignore` configured (if needed)
- [x] Environment variables set (if needed)
- [x] Build command correct: `next build`
- [x] Output directory correct: `.next`

---

## 🔧 Troubleshooting Deployment

### Issue 1: Build Fails dengan Error "Module not found"

```bash
# Solution:
# 1. Install dependencies
npm install

# 2. Check for typos di imports
# 3. Rebuild locally
npm run build

# 4. Push fix to GitHub
git add .
git commit -m "fix: resolve module import"
git push origin main
```

### Issue 2: Deployment Stuck di "Building"

```bash
# Solution:
# 1. Cancel deployment di Vercel Dashboard
# 2. Check logs untuk error message
# 3. Fix issue locally
# 4. Push again (akan trigger rebuild)
```

### Issue 3: CSV Files Not Loading

```bash
# Verifikasi:
# 1. Files ada di public/data/ ✓
# 2. Filenames exact match di code ✓
# 3. CORS headers configured (check vercel.json) ✓
# 4. Check Network tab (F12) untuk 404 errors
```

### Issue 4: Vercel says "420 Too Many Requests"

```bash
# Mungkin rate limiting. Solution:
# 1. Wait 5-10 minutes
# 2. Verify domain access
# 3. Check Vercel status: status.vercel.com
```

---

## 📊 Post-Deployment Monitoring

### Vercel Dashboard Checks

- **Deployments**: Track build status & history
- **Analytics**: View page views, response times
- **Logs**: Check function logs untuk errors
- **Settings**: Update environment, domains, team

### Performance Checks

```bash
# 1. Lighthouse (di Chrome DevTools)
# F12 → Lighthouse → Generate Report

# 2. PageSpeed Insights
# https://pagespeed.web.dev/

# 3. WebPageTest
# https://www.webpagetest.org/
```

### SEO & Social Media

```bash
# Test di:
# 1. Facebook Sharing Debugger
# 2. Twitter Card validator
# 3. LinkedIn post preview
```

---

## 🔐 Security Checklist

**Before Production:**

- [x] No hardcoded secrets (API keys, passwords)
- [x] Environment variables used untuk sensitive data
- [x] HTTPS enabled (automatic on Vercel)
- [x] Security headers configured (vercel.json)
- [x] CORS properly configured
- [x] No console.log() dengan sensitive data

---

## 📝 Update & Maintenance

### Regular Updates

```bash
# Check for outdated packages
npm outdated

# Update packages safely
npm update

# Major version updates (review changelogs!)
npm install package@latest

# Push updates
git add package.json package-lock.json
git commit -m "chore: update dependencies"
git push origin main
```

### Data Updates (If needed)

```bash
# 1. Update CSV files di public/data/
# 2. Commit & push
git add public/data/
git commit -m "data: update 2026 landslide data"
git push origin main

# 3. Vercel auto-redeploys
```

---

## 🎉 Success Indicators

Setelah deploy berhasil:

✅ Website accessible di `https://jejak-di-lereng.vercel.app`  
✅ Semua pages load correctly  
✅ Charts render & interaktif  
✅ CSV downloads work  
✅ Responsive on mobile  
✅ No console errors  
✅ Fast loading time (<3s)  
✅ SEO metadata visible  

---

## 📞 Support & Help

**Dokumentasi resmi:**
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs

**Issues di GitHub:**
1. Go to repository → Issues
2. Click "New Issue"
3. Describe problem dengan details
4. Add screenshots/logs

**Quick Help:**

```bash
# Check Vercel status
vercel --version

# View deployment logs
vercel logs --prod

# Rollback to previous deployment
vercel rollback
```

---

## 🚀 Final Commands Cheatsheet

```bash
# Development
npm run dev              # Local server at http://localhost:3000
npm run build            # Build untuk production
npm run lint             # Check code quality

# Git & GitHub
git status              # Check changes
git add .               # Stage all changes
git commit -m "msg"     # Commit changes
git push origin main    # Push to GitHub

# Vercel
vercel                  # Deploy to preview
vercel --prod           # Deploy to production
vercel logs --prod      # View production logs
vercel rollback         # Rollback deployment
```

---

## ✨ Congratulations! 🎉

Website Anda sekarang **live di Vercel**!

**Share dengan:**
- 🔗 URL: `https://jejak-di-lereng.vercel.app`
- 📱 QR Code (generate dari link di website)
- 📧 Email ke BPBD DIY & stakeholder
- 🐦 Social media posts

**Next steps:**
- [ ] Monitor analytics
- [ ] Gather user feedback
- [ ] Plan feature updates
- [ ] Consider custom domain
- [ ] Add Google Analytics (optional)

---

**Deployment Date**: October 18, 2026  
**Status**: ✅ PRODUCTION READY  
**Last Updated**: This guide  

Good luck! 🚀
