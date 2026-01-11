# 📧 EmailJS Setup Guide for N&N Global Exports

Follow these steps to set up EmailJS and start receiving form submissions to **nnnglobalexports@gmail.com**

---

## 🔑 Step 1: Create EmailJS Account

1. Go to **[https://www.emailjs.com/](https://www.emailjs.com/)**
2. Click **"Sign Up"** (top right)
3. Create account with your email (you can use nnnglobalexports@gmail.com)
4. Verify your email address

---

## 📬 Step 2: Add Email Service

1. After login, click **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose **"Gmail"**
4. Click **"Connect Account"**
5. Sign in with **nnnglobalexports@gmail.com**
6. Allow EmailJS to send emails on your behalf
7. Give it a name: `N&N_Global_Exports_Service`
8. Click **"Create Service"**
9. **IMPORTANT:** Copy and save your **Service ID** (looks like: `service_abc1234`)

---

## 📝 Step 3: Create Email Template

1. Click **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Delete everything and paste this template:

### Template Content:

**Subject:**
```
New Inquiry from {{from_name}} - N&N Global Exports Website
```

**Body:**
```
New Contact Form Submission

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

Message:
{{message}}

---
This inquiry was submitted via the N&N Global Exports website contact form.
```

4. Click **"Save"** (top right)
5. Give it a name: `contact_form_template`
6. **IMPORTANT:** Copy and save your **Template ID** (looks like: `template_xyz5678`)

---

## 🔐 Step 4: Get Your Public Key

1. Click **"Account"** in the left sidebar
2. Find **"API Keys"** section
3. You'll see your **Public Key** (looks like: `abcXYZ123_456xyz`)
4. **IMPORTANT:** Copy and save this key

---

## 💻 Step 5: Update Your Code

Now open your project and update the file:

**File:** `src/components/Contact/Contact.js`

Find these lines at the top (around line 6-8):

```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
```

Replace with your actual values:

```javascript
const EMAILJS_SERVICE_ID = 'service_abc1234';  // Your Service ID from Step 2
const EMAILJS_TEMPLATE_ID = 'template_xyz5678';  // Your Template ID from Step 3
const EMAILJS_PUBLIC_KEY = 'abcXYZ123_456xyz';  // Your Public Key from Step 4
```

**Save the file!**

---

## 📦 Step 6: Install Dependencies

Open Terminal/Command Prompt in your project folder and run:

```bash
npm install
```

This will install EmailJS and all other dependencies.

---

## ✅ Step 7: Test Your Form

1. Start your development server:
   ```bash
   npm start
   ```

2. Visit **http://localhost:3000**

3. Scroll to the Contact section

4. Fill out the form and click **"Send Message"**

5. Check your email at **nnnglobalexports@gmail.com** - you should receive the form submission!

---

## 🎯 What You'll Get

When someone fills the form, you'll receive an email like this:

```
Subject: New Inquiry from John Doe - N&N Global Exports Website

From: John Doe
Email: john@example.com
Phone: +1 234 567 8900
Company: ABC Corp

Message:
We are interested in importing agricultural products to USA. 
Please contact us with your catalog and pricing.

---
This inquiry was submitted via the N&N Global Exports website contact form.
```

---

## 📊 Free Plan Limits

- **200 emails per month** (EmailJS free tier)
- If you need more, upgrade to EmailJS paid plan ($15/month for 1000 emails)

---

## 🚨 Troubleshooting

### "Email sending failed" error?

1. **Check your credentials** - Make sure Service ID, Template ID, and Public Key are correct
2. **Check Gmail settings** - Make sure you completed the Gmail authorization in Step 2
3. **Check console** - Open browser console (F12) to see detailed error messages

### Not receiving emails?

1. **Check spam folder** - Sometimes first emails go to spam
2. **Verify template** - Make sure template was saved correctly
3. **Check EmailJS dashboard** - Go to "Logs" to see if emails were sent

### Template variables not working?

Make sure your template uses these exact variable names:
- `{{from_name}}`
- `{{from_email}}`
- `{{phone}}`
- `{{company}}`
- `{{message}}`

---

## ✨ All Done!

Once you complete these steps:
- ✅ Your contact form will work
- ✅ You'll receive all inquiries at nnnglobalexports@gmail.com
- ✅ Customers get instant confirmation
- ✅ Free for up to 200 inquiries per month

---

## 📞 Need Help?

If you get stuck, check:
- EmailJS Documentation: https://www.emailjs.com/docs/
- Or message me and I'll help you debug!

**Good luck! 🚀**


