---
layout: default
title: Argento Hyvä custom colors, fonts etc
category: ArgentoHyva
---

# How to Customize Colors and Fonts

You can easily change the look and feel of your storefront right from the Magento Admin Panel without writing any backend code. This is done by injecting custom styling overrides into your store configuration.

### Step 1: Open the HTML Head Settings

1. Log in to your Magento 2 Admin Panel.
2. Navigate to **Content** ➔ **Design** ➔ **Configuration**.
3. Find your current active theme/store view in the list and click **Edit**.
4. Scroll down and expand the **HTML Head** section.

### Step 2: Add Your Custom Design

Locate the **Miscellaneous Scripts** text area. Copy the code below, which gives your store a modern, clean pink theme with enhanced readability, and paste it into the box:

```html
<style>
:root {
  /* --- Base Palette & Layout --- */
  --color-fg: #1f2937;                      /* Dark charcoal for soft, premium contrast */
  --color-surface: #fffdfd;                 /* Ultra-soft warm off-white background */
  --font-size-base: 18px;                   /* Increased font size for better readability (sets 1rem = 18px) */
  --default-font-family: var(--font-sans);  /* Options: var(--font-sans), var(--font-serif), var(--font-mono) */

  /* --- Page Layout Sections --- */
  --color-page-header-bg: #ffffff;
  --color-page-header-fg: #1f2937;
  --color-footer-content-bg: #fff1f2;       /* Soft pastel pink footer background */
  --image-footer-content-bg: none;          
  --position-footer-content-bg: center;
  --repeat-footer-content-bg: no-repeat;
  --color-copyright-fg: #94a3b8;

  /* --- Content Sections --- */
  --color-section-bc: #ffe4e6;              /* Soft pink-tinted borders */
  --border-width-section-bw: 1px;           

  /* --- Primary Buttons (Vibrant Pink Accent) --- */
  --btn-primary-stroke: #ec4899;            /* Vibrant pink */
  --btn-primary-bg: #ec4899;
  --btn-primary-color: #ffffff;
  --btn-primary-hover-stroke: #db2777;      /* Deeper pink on hover */
  --btn-primary-hover-bg: #db2777;
  --btn-primary-hover-color: #ffffff;
  --btn-primary-active-stroke: #be185d;     /* Deep rose pink on active click */
  --btn-primary-active-bg: #be185d;
  --btn-primary-active-color: #ffffff;

  /* --- Secondary Buttons (Elegant Rose Borders) --- */
  --btn-secondary-stroke: #f43f5e;           /* Rose-pink stroke */
  --btn-secondary-bg: transparent;
  --btn-secondary-color: #f43f5e;
  --btn-secondary-hover-stroke: #e11d48;
  --btn-secondary-hover-bg: #fff1f2;        /* Subtle pink tint background on hover */
  --btn-secondary-hover-color: #e11d48;
  --btn-secondary-active-stroke: #be123c;
  --btn-secondary-active-bg: #ffe4e6;
  --btn-secondary-active-color: #be123c;
  --btn-secondary-stroke-width: 2px;

  /* --- Product Grid & Cards --- */
  --filter-product-image-contrast: 100%;    /* e.g., 110% for more punchy images */
  --filter-product-image-brightness: 100%;  /* e.g., 95% if product images are too bright */
  --color-product-details-bg: #ffffff;
  --color-product-action-bg: #ec4899;       /* Pink product actions */
  --color-product-action-fg: #ffffff;

  /* --- Swissup Easytabs --- */
  --easytabs-label-color: #1f2937;
  --easytabs-collapsed-bg-color: #fff1f2;   /* Soft pink tab backgrounds */
  --easytabs-collapsed-bg-image: none;
  --easytabs-collapsed-bg-size: auto;
  --easytabs-collapsed-label-bg-image: none;
}
</style>
```

> ⚠️ **Note on Customization:** You can change any of the hex color values (e.g., `#ec4899`) or sizes above to match your desired branding. Just make sure to keep the double dashes (`--`) intact before each variable name. You can find the full list of supported CSS variables in the `README.md` file located in the theme source code.

### Step 3: Save and Refresh

1. Click **Save Configuration** at the top right.
2. Flush your Magento cache (**System** ➔ **Cache Management** ➔ **Flush Magento Cache**).
3. Refresh your storefront to see your new custom styles!

---

### Pro-Tip for Performance
Because these styles are injected directly into the HTML `<head>`, they will execute immediately as the page loads. This guarantees **zero layout shift** or flash of unstyled content (FOUC), keeping your Hyvä theme's Core Web Vitals scores blazing fast!

##### Next up

 -  [Customization](../)
