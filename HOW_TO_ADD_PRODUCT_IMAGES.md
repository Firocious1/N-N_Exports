# 📸 How to Add Product Images to Your Website

Your product section has been updated with all 8 products! Here's how to add images for each product.

---

## 🎯 **Products Now Listed:**

1. ✅ Moringa Powder & Food Supplements
2. ✅ Organic Compost
3. ✅ Guar Gum Powder
4. ✅ Multani Mitti (Fuller's Earth)
5. ✅ Pure Marble Monuments
6. ✅ Onion Powder
7. ✅ Office Stationery
8. ✅ Custom Export Orders

---

## 📷 **Step 1: Prepare Your Product Images**

### **Image Requirements:**

- **Format:** JPG or PNG
- **Size:** 800x600 pixels (or similar ratio 4:3)
- **File size:** Under 500KB each (compress if needed)
- **Quality:** Clear, professional photos
- **Background:** Clean, preferably white or plain

### **Image Names (for easy reference):**

```
moringa-powder.jpg
organic-compost.jpg
guar-gum-powder.jpg
multani-mitti.jpg
marble-monument.jpg
onion-powder.jpg
office-stationery.jpg
custom-export.jpg
```

---

## 📂 **Step 2: Create Images Folder**

1. Open your project folder: `NN_Global_Exports`
2. Navigate to: `public` folder
3. Create a new folder: `images`
4. Inside `images`, create: `products` folder
5. Final path: `public/images/products/`

---

## 📤 **Step 3: Add Your Images**

1. Copy your product photos to: `public/images/products/`
2. Make sure they're named properly (see names above)

**Folder structure should look like:**
```
NN_Global_Exports/
├── public/
│   ├── images/
│   │   ├── products/
│   │   │   ├── moringa-powder.jpg
│   │   │   ├── organic-compost.jpg
│   │   │   ├── guar-gum-powder.jpg
│   │   │   ├── multani-mitti.jpg
│   │   │   ├── marble-monument.jpg
│   │   │   ├── onion-powder.jpg
│   │   │   ├── office-stationery.jpg
│   │   │   └── custom-export.jpg
```

---

## 💻 **Step 4: Update Products.js Code**

Open: `src/components/Products/Products.js`

**Find this section (around line 6):**

```javascript
const products = [
  {
    icon: <FaLeaf />,
    title: 'Moringa Powder & Food Supplements',
```

**Replace the ENTIRE products array with this:**

```javascript
const products = [
  {
    icon: <FaLeaf />,
    image: '/images/products/moringa-powder.jpg',
    title: 'Moringa Powder & Food Supplements',
    description: 'Premium quality Moringa powder and other natural food supplements. Rich in nutrients and sourced from organic farms to ensure maximum health benefits.',
    features: [
      '100% Natural & Organic',
      'Rich in vitamins & minerals',
      'Export quality standards',
      'Custom packaging available'
    ]
  },
  {
    icon: <FaRecycle />,
    image: '/images/products/organic-compost.jpg',
    title: 'Organic Compost',
    description: 'High-grade organic compost made from natural materials. Perfect for agriculture and gardening, enhancing soil fertility and promoting sustainable farming.',
    features: [
      'Eco-friendly production',
      'Nutrient-rich formula',
      'Bulk quantities available',
      'International shipping'
    ]
  },
  {
    icon: <FaMortarPestle />,
    image: '/images/products/guar-gum-powder.jpg',
    title: 'Guar Gum Powder',
    description: 'Premium Guar Gum powder for industrial and food applications. Sourced from high-quality guar beans with excellent thickening and stabilizing properties.',
    features: [
      'Food & industrial grade',
      'High viscosity',
      'Quality tested',
      'Various mesh sizes'
    ]
  },
  {
    icon: <FaSpa />,
    image: '/images/products/multani-mitti.jpg',
    title: 'Multani Mitti (Fuller\'s Earth)',
    description: 'Pure Multani Mitti clay powder, ideal for cosmetic and industrial applications. Known for its natural cleansing and purifying properties.',
    features: [
      'Natural & pure',
      'Cosmetic grade quality',
      'Finely processed',
      'Export certified'
    ]
  },
  {
    icon: <FaMonument />,
    image: '/images/products/marble-monument.jpg',
    title: 'Pure Marble Monuments',
    description: 'Exquisite marble monuments and sculptures crafted from premium Indian marble. Custom designs available for memorials, statues, and architectural elements.',
    features: [
      'Premium marble quality',
      'Custom designs',
      'Expert craftsmanship',
      'Secure packaging & shipping'
    ]
  },
  {
    icon: <FaSeedling />,
    image: '/images/products/onion-powder.jpg',
    title: 'Onion Powder',
    description: 'Premium dehydrated onion powder made from fresh red onions. Ideal for food processing, seasoning, and culinary applications worldwide.',
    features: [
      'Fresh onion sourced',
      'Low moisture content',
      'Long shelf life',
      'Food safety certified'
    ]
  },
  {
    icon: <FaPencilAlt />,
    image: '/images/products/office-stationery.jpg',
    title: 'Office Stationery',
    description: 'Comprehensive range of high-quality office stationery products suitable for businesses, educational institutions, and organizations worldwide.',
    features: [
      'Wide product range',
      'Quality assured',
      'Bulk orders accepted',
      'Timely delivery'
    ]
  },
  {
    icon: <FaBoxOpen />,
    image: '/images/products/custom-export.jpg',
    title: 'Custom Export Orders',
    description: 'Tailored export solutions to meet your specific requirements. We handle custom orders with the same commitment to quality and timely delivery.',
    features: [
      'Flexible solutions',
      'Custom packaging',
      'Volume discounts',
      'Dedicated support'
    ]
  }
];
```

**Then find this section (around line 56-58):**

```javascript
<div className="product-icon">
  {product.icon}
</div>
```

**Replace with:**

```javascript
{product.image ? (
  <div className="product-image">
    <img src={product.image} alt={product.title} />
  </div>
) : (
  <div className="product-icon">
    {product.icon}
  </div>
)}
```

---

## 🎨 **Step 5: Update Products.css**

Open: `src/components/Products/Products.css`

**Add this CSS after line 46 (after .product-icon styles):**

```css
/* Product Image Styles */
.product-image {
  width: 100%;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 25px;
  box-shadow: var(--shadow-sm);
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-normal);
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}
```

---

## 🚀 **Step 6: Test & Deploy**

### **Test Locally:**
```bash
npm start
```

Visit `http://localhost:3000` and check the products section.

### **Deploy to Live Site:**
```bash
git add .
git commit -m "Add product images to website"
git push origin main
```

Wait 2 minutes → Visit **nnnglobalexports.com** → Images are live! 🎉

---

## 📱 **Option: Use Temporary Placeholder Images**

If you don't have product photos yet, you can use placeholder images:

**Free stock photo sites:**
- [Unsplash](https://unsplash.com/) - Free high-quality images
- [Pexels](https://pexels.com/) - Free stock photos
- [Pixabay](https://pixabay.com/) - Free images

**Search terms:**
- "moringa powder"
- "organic compost"
- "guar gum"
- "multani mitti clay"
- "marble monument"
- "onion powder"
- "office supplies"

---

## 🎯 **Current Status:**

✅ **8 products listed** with descriptions and features  
✅ **Icons displayed** as placeholders  
⏳ **Images:** Ready to add when you have photos  

**Your products section is live and looks professional even without images!**

The icons currently showing are attractive placeholders. Add real product photos whenever you're ready to make it even better! 📸

---

## ❓ **Need Help?**

If you need assistance adding images or have questions, just ask!

