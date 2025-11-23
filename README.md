# Hipno - Psychology and Counseling React App

This is a React application converted from the Hipno Psychology and Counseling HTML template.

## Project Structure

```
├── public/
│   └── assets/
│       ├── css/
│       ├── js/
│       └── images/
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── Appointment.jsx
│   │   ├── Blog.jsx
│   │   ├── CaseStudy.jsx
│   │   ├── CTASection.jsx
│   │   ├── FAQs.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Preloader.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   ├── WhatWeDo.jsx
│   │   └── WhyChooseUs.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Move Assets**
   - Copy all CSS files from `Hipno - Psychology and Counseling HTML Template_files/` to `public/assets/css/`
   - Copy all JS files from `Hipno - Psychology and Counseling HTML Template_files/` to `public/assets/js/`
   - Copy all images from `Hipno - Psychology and Counseling HTML Template_files/` to `public/assets/images/`
   - Make sure to preserve the folder structure, especially the "New folder" inside images

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## Components

- **Preloader**: Loading screen component
- **Header**: Navigation header with menu
- **Hero**: Hero section with image slider
- **AboutUs**: About us section with images and content
- **Services**: Services grid section
- **WhyChooseUs**: Why choose us section with features
- **WhatWeDo**: What we do section with video background
- **CaseStudy**: Case studies section
- **HowItWorks**: How it works step-by-step section
- **CTASection**: Call-to-action section
- **Testimonials**: Testimonials slider section
- **FAQs**: Frequently asked questions accordion
- **Blog**: Blog posts grid section
- **Appointment**: Appointment booking form
- **Footer**: Footer with contact info and social links

## Notes

- The app uses Vite as the build tool
- Swiper is used for sliders
- Font Awesome icons are used (loaded via CSS)
- External scripts need to be loaded in the public folder
- Make sure all image paths are correctly updated to `/assets/images/...`

## Dependencies

- React 18.2.0
- React DOM 18.2.0
- React Router DOM 6.20.0
- Swiper 11.0.5
- Vite 5.0.8

