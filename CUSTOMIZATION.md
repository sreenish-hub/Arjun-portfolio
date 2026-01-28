# Portfolio Customization Guide

This guide walks you through personalizing this portfolio template with your own information.

## 📋 Required Customizations

### 1. Personal Information (index.html)

**Name & Title** - Search and replace:
- Find: `Arjun Nair`
- Replace with: Your Name

**Hero Section** (lines 61-86):
- Update the headline and value proposition
- Modify the subtitle to reflect your services
- Update button text if needed

### 2. Contact Information

**Email** (line 556):
```html
<!-- Current -->
<a href="mailto:your.email@example.com">

<!-- Update to -->
<a href="mailto:your@email.com">
```

**LinkedIn** (line 566):
```html
<!-- Current -->
<a href="https://linkedin.com/in/yourprofile">

<!-- Update to -->
<a href="https://linkedin.com/in/yourprofile">
```

**WhatsApp** (line 575):
```html
<!-- Current -->
<a href="https://wa.me/1234567890">

<!-- Update to your number -->
<a href="https://wa.me/919876543210">
<!-- Format: country code + number (no spaces or dashes) -->
```

**Footer Social Links** (lines 604-616):
- Update GitHub, LinkedIn, Twitter, Dribbble URLs
- Replace `arjunnair` with your usernames

### 3. SEO & Meta Tags (index.html)

**Open Graph** (lines 13-15):
```html
<meta property="og:url" content="https://yourwebsite.com">
<meta property="og:image" content="https://yourwebsite.com/images/og-image.jpg">
```
Update with your actual domain and create an OG image (1200x630px recommended)

**Twitter Cards** (lines 18-21):
Update Twitter meta tags with your info

### 4. Images

Replace placeholder images in `/images` folder:

**Required Images:**
- `portrait.png` - Your professional portrait (500x500px+, square/vertical)
- `workspace.png` - Your workspace photo (1200x800px landscape)
- `fashion-ecommerce.png` - Your project screenshot 1
- `analytics-dashboard.png` - Your project screenshot 2
- `creative-agency.png` - Your project screenshot 3

**Additional:**
- Create `og-image.jpg` (1200x630px) for social media sharing

### 5. Services Section (index.html, lines 98-158)

Update the 4 service cards:
- Service titles
- Descriptions
- Feature lists

### 6. Projects Section (index.html, lines 171-286)

For each of the 3 projects, update:
- Project category
- Project title
- Challenge description
- Solution description
- Impact metrics (numbers)
- Technology tags

**Example:**
```html
<h3 class="project-title">Your Project Name</h3>
<p>Your client's challenge...</p>
<p>Your solution...</p>
<ul>
    <li>42% increase in conversions</li>
</ul>
```

### 7. Skills Section (index.html, lines 298-490)

Update skill names and levels:
```html
<span class="skill-name">Your Skill</span>
<span class="skill-level">Expert/Advanced</span>
<div class="skill-progress-fill" data-progress="90"></div>
<!-- data-progress = percentage (0-100) -->
```

### 8. About Section (index.html, lines 498-542)

**Update:**
- Your bio paragraphs
- Years of experience
- Educational background
- Stats numbers (Projects, Clients, Countries)

```html
<span class="stat-number" data-count="50">0</span>
<!-- data-count = your actual number -->
```

### 9. Colors & Branding (styles.css)

**Primary Colors** (lines 9-10):
```css
--color-accent-primary: #00d4ff;  /* Your brand color */
--color-accent-secondary: #6366f1; /* Secondary accent */
```

**Gradients** (lines 16-17):
Update gradient colors if you changed accent colors above.

### 10. Copyright Year (index.html, line 622)

```html
<p class="copyright">&copy; 2026 Your Name. All rights reserved.</p>
```

---

## ✅ Customization Checklist

- [ ] Replace name throughout site
- [ ] Update hero headline and subtitle
- [ ] Change email address
- [ ] Update LinkedIn URL
- [ ] Update WhatsApp number
- [ ] Update all social media links
- [ ] Replace OG meta tags with your domain
- [ ] Add your portrait image
- [ ] Add your workspace image
- [ ] Replace 3 project screenshots
- [ ] Update service descriptions
- [ ] Update project case studies
- [ ] Update skills and proficiency levels
- [ ] Rewrite about section bio
- [ ] Update stats numbers
- [ ] Change brand colors (optional)
- [ ] Update copyright year and name
- [ ] Create og-image.jpg for social sharing

---

## 🎨 Optional Customizations

### Fonts
Change in `index.html` (line 22) and `styles.css` (lines 21-22):
```css
--font-primary: 'Inter', sans-serif;
--font-heading: 'Outfit', sans-serif;
```

### Animation Speed
Adjust in `styles.css` (lines 61-64):
```css
--transition-fast: 150ms ease;
--transition-base: 300ms ease;
```

### Section Order
Rearrange sections in `index.html` by moving entire `<section>` blocks.

---

## 🧪 Testing After Customization

1. Open `index.html` in browser
2. Check all links work
3. Test mobile navigation
4. Scroll through all sections
5. Verify animations are smooth
6. Test contact links (email, social)
7. Check browser console for errors (F12)

---

## 📦 Deployment

After customization:

1. Test locally first
2. Deploy to hosting (Netlify, Vercel, GitHub Pages)
3. Set up custom domain
4. Test Open Graph preview (Facebook Debugger, Twitter Card Validator)
5. Submit to Google Search Console

---

**Need Help?**
If you encounter issues, check:
- Browser console for errors
- Network tab for failed resources
- README.md for general documentation
