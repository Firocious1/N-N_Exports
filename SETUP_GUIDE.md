# 🚀 Setup Guide - N&N Global Exports Website

## Prerequisites Installation

### Step 1: Install Node.js and npm

#### For Windows:
1. **Download Node.js**
   - Visit [https://nodejs.org](https://nodejs.org)
   - Download the LTS (Long Term Support) version
   - Run the installer (.msi file)
   - Follow the installation wizard (keep default settings)
   - Restart your computer after installation

2. **Verify Installation**
   Open PowerShell or Command Prompt and run:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers (e.g., v18.x.x and 9.x.x)

## 🏁 Running the Website

### Step 1: Install Dependencies
Open terminal in the project folder and run:
```bash
npm install
```
This will install all required packages (~5 minutes first time)

### Step 2: Start Development Server
```bash
npm start
```
- The website will automatically open at `http://localhost:3000`
- Any changes you make will automatically refresh the browser
- Press `Ctrl+C` in terminal to stop the server

### Step 3: Build for Production
When ready to deploy:
```bash
npm run build
```
- Creates optimized production files in the `build` folder
- This is what you'll upload to hosting services

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - FREE & Easy)

**Why Vercel?**
- Free hosting for React apps
- Automatic HTTPS
- Global CDN
- Zero configuration needed
- Perfect for this website

**Steps:**
1. Create account at [https://vercel.com](https://vercel.com)
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. In your project folder, run:
   ```bash
   vercel
   ```
4. Follow the prompts (press Enter for defaults)
5. Your website will be live at: `https://your-project.vercel.app`
6. You can add a custom domain in Vercel dashboard

**Alternative (No CLI):**
1. Push code to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy" - Done!

### Option 2: Netlify (Also FREE & Simple)

**Steps:**
1. Build the project:
   ```bash
   npm run build
   ```
2. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop the `build` folder
4. Your site is live instantly!
5. Add custom domain in Netlify settings

**OR via GitHub:**
1. Push code to GitHub
2. Create account at [https://netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect GitHub and select repository
5. Build command: `npm run build`
6. Publish directory: `build`
7. Click "Deploy"

### Option 3: Traditional Hosting (Hostinger, GoDaddy, etc.)

**Steps:**
1. Build the project:
   ```bash
   npm run build
   ```
2. Upload contents of `build` folder to your hosting's `public_html` or `www` folder via:
   - FTP (FileZilla)
   - cPanel File Manager
   - SFTP

**Note:** These typically cost $5-15/month

### Option 4: AWS S3 + CloudFront (Scalable)

For high-traffic websites:
1. Build project: `npm run build`
2. Create S3 bucket in AWS Console
3. Enable static website hosting
4. Upload `build` folder contents
5. Set up CloudFront for CDN
6. Configure custom domain via Route 53

**Cost:** ~$1-5/month for moderate traffic

## 📧 Backend Integration (Future)

Currently, the contact form shows an alert. To make it functional:

### Option A: Simple Email Service (No Backend Needed)

**Using EmailJS (FREE for 200 emails/month):**
1. Create account at [https://emailjs.com](https://emailjs.com)
2. Set up email template
3. Add this to your Contact component:
   ```javascript
   import emailjs from '@emailjs/browser';
   
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
     .then(() => alert('Message sent!'))
     .catch(() => alert('Error sending message'));
   ```

### Option B: Netlify Forms (If using Netlify)
1. Add `netlify` attribute to form tag in Contact.js
2. Forms automatically handled - appears in Netlify dashboard
3. No coding needed!

### Option C: Full Backend (Node.js + Express)

Create separate backend for:
- Contact form processing
- Email notifications
- Inquiry management
- Product catalog management

**Tech Stack Suggestion:**
- Node.js + Express (API)
- MongoDB or PostgreSQL (Database)
- Nodemailer (Email sending)
- Host on Heroku/Railway (Free tiers available)

## 🎨 Customization Guide

### Change Colors
Edit `src/index.css` - lines 7-14:
```css
:root {
  --primary-blue: #1a365d;  /* Change main color */
  --accent-blue: #3182ce;   /* Change highlight color */
}
```

### Update Contact Information
1. **Email/Phone:** Edit `src/components/Contact/Contact.js` and `src/components/Footer/Footer.js`
2. **Address:** Same files as above
3. **Social Links:** Add your actual LinkedIn/WhatsApp links

### Add Your Logo
1. Create logo image (PNG with transparent background)
2. Place in `public` folder
3. Update `src/components/Navbar/Navbar.js` - replace text logo with:
   ```javascript
   <img src="/logo.png" alt="N&N Global Exports" />
   ```

### Add Product Images
1. Create `public/images/products` folder
2. Add product photos (onions.jpg, stationery.jpg)
3. Update `src/components/Products/Products.js` to display images

## 📱 Testing

### Test on Different Devices
1. **Chrome DevTools:**
   - Press F12
   - Click device toolbar icon
   - Test various screen sizes

2. **Real Devices:**
   - When running `npm start`, access from phone via:
   - `http://YOUR_COMPUTER_IP:3000`
   - Get IP by running: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)

### Browser Compatibility
Tested and working on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 🔧 Troubleshooting

### Port 3000 Already in Use
```bash
# Windows:
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F

# Then run npm start again
```

### Module Not Found Error
```bash
rm -rf node_modules
npm install
```

### Build Errors
1. Clear cache: `npm cache clean --force`
2. Reinstall: `npm install`
3. Try again: `npm run build`

## 📞 Support

For technical issues with the website:
- Check error messages in browser console (F12)
- Review terminal output for error details
- Ensure all files are properly uploaded if deploying manually

## ✅ Go-Live Checklist

Before launching to client:

- [ ] Install Node.js and npm
- [ ] Run `npm install` successfully
- [ ] Test website locally (`npm start`)
- [ ] Update all contact information (email, phone, address)
- [ ] Add real social media links
- [ ] Test on mobile devices
- [ ] Test contact form
- [ ] Add company logo (if available)
- [ ] Add product images (if available)
- [ ] Choose hosting platform
- [ ] Deploy to hosting
- [ ] Test deployed website on all devices
- [ ] Set up custom domain (if needed)
- [ ] Set up SSL certificate (usually automatic)
- [ ] Configure contact form backend
- [ ] Add Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console

## 🎯 Next Steps After Deployment

1. **Custom Domain Setup**
   - Purchase domain from Namecheap, GoDaddy, etc.
   - Point domain to hosting (Vercel/Netlify provide instructions)
   - Usually takes 24-48 hours to propagate

2. **Professional Email**
   - Set up info@nnglobalexports.com
   - Use Google Workspace or Zoho Mail

3. **SEO Optimization**
   - Add meta descriptions
   - Submit sitemap
   - Google My Business listing

4. **Marketing**
   - Share on social media
   - Add to email signature
   - Print on business cards

---

**Need help?** Feel free to reach out anytime during setup or deployment!

