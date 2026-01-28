# GitHub Deployment Guide

## Quick Start - Push to GitHub

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click **"New"** repository button
3. Name it: `portfolio` (or any name you prefer)
4. **DO NOT** initialize with README (we already have one)
5. Click **"Create repository"**

### Step 2: Connect and Push

After creating the repo, run these commands:

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace:**
- `YOUR-USERNAME` with your GitHub username
- `YOUR-REPO-NAME` with your repository name

### Step 3: Verify

- Visit your GitHub repository
- All files should be visible
- README.md will display automatically

---

## Deploy to Web (Choose One)

### Option 1: Netlify (Recommended - Easiest)

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose your GitHub repository
5. Click **"Deploy site"**
6. Done! You get a URL like `your-site-name.netlify.app`

**Custom Domain:**
- Go to Site settings → Domain management
- Add custom domain (if you have one)

### Option 2: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click **"New Project"**
4. Import your repository
5. Click **"Deploy"**
6. Done! You get a URL like `your-site.vercel.app`

### Option 3: GitHub Pages (Free)

1. Go to your repository on GitHub
2. Click **"Settings"**
3. Scroll to **"Pages"** section
4. Source: Select **"main"** branch
5. Click **"Save"**
6. Your site will be at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

---

## Before Going Live

### Required Customization

1. **Update Contact Info** (see CUSTOMIZATION.md)
   - Email address
   - LinkedIn URL
   - WhatsApp number
   - Social media links

2. **Replace Images**
   - Add your portrait photo
   - Add your workspace photo
   - Add project screenshots

3. **Update Content**
   - Project case studies
   - About section bio
   - Skills and levels

4. **Update Meta Tags**
   - Change domain in Open Graph tags
   - Create og-image.jpg (1200x630px)

### Testing Checklist

- [ ] All links work (email, social, nav)
- [ ] Mobile navigation functions
- [ ] Animations are smooth
- [ ] Images load correctly
- [ ] No console errors (F12)
- [ ] Test on mobile device

---

## Post-Deployment

### SEO & Social

1. **Test Open Graph Preview**
   - Facebook: [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug/)
   - LinkedIn: Share your URL and check preview

2. **Test Twitter Card**
   - Twitter: [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)

3. **Google Search Console**
   - Add your site: [search.google.com/search-console](https://search.google.com/search-console)
   - Submit sitemap

### Performance Check

Run Lighthouse audit:
1. Open site in Chrome
2. Press F12 → Lighthouse tab
3. Click "Generate report"
4. Target scores: 90+ in all categories

---

## Git Commands Reference

```bash
# Check status
git status

# Add new changes
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push

# Pull latest changes
git pull

# View commit history
git log --oneline
```

---

## Troubleshooting

### "Git is not recognized"
- Install Git: [git-scm.com/downloads](https://git-scm.com/downloads)

### Permission denied (GitHub)
- Set up SSH keys or use Personal Access Token
- GitHub docs: [docs.github.com/authentication](https://docs.github.com/en/authentication)

### Site not updating after push
- Clear browser cache (Ctrl+Shift+R)
- Wait 1-2 minutes for deployment
- Check deployment logs on your hosting platform

---

## Need Help?

- Netlify docs: [docs.netlify.com](https://docs.netlify.com)
- Vercel docs: [vercel.com/docs](https://vercel.com/docs)
- GitHub Pages: [pages.github.com](https://pages.github.com)

---

**Your site is ready!** Just push to GitHub and deploy. 🚀
