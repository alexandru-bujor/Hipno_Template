# Asset Setup Instructions

To complete the setup, you need to organize the assets from the HTML template into the React app structure.

## Step 1: Create Directory Structure

Create the following directories in your project:

```
public/
  assets/
    css/
    js/
    images/
      "New folder"/
```

## Step 2: Copy CSS Files

Copy all CSS files from `Hipno - Psychology and Counseling HTML Template_files/` to `public/assets/css/`:

- bootstrap.min.css
- slicknav.min.css
- swiper-bundle.min.css
- all.min.css
- animate.css
- magnific-popup.css
- mousecursor.css
- custom.css

## Step 3: Copy JavaScript Files

Copy all JavaScript files from `Hipno - Psychology and Counseling HTML Template_files/` to `public/assets/js/`:

- jquery-3.7.1.min.js (rename from jquery-3.7.1.min.js.download)
- bootstrap.min.js (rename from bootstrap.min.js.download)
- validator.min.js (rename from validator.min.js.download)
- jquery.slicknav.js (rename from jquery.slicknav.js.download)
- swiper-bundle.min.js (rename from swiper-bundle.min.js.download)
- jquery.waypoints.min.js (rename from jquery.waypoints.min.js.download)
- jquery.counterup.min.js (rename from jquery.counterup.min.js.download)
- jquery.magnific-popup.min.js (rename from jquery.magnific-popup.min.js.download)
- SmoothScroll.js (rename from SmoothScroll.js.download)
- parallaxie.js (rename from parallaxie.js.download)
- gsap.min.js (rename from gsap.min.js.download)
- magiccursor.js (rename from magiccursor.js.download)
- SplitText.js (rename from SplitText.js.download)
- ScrollTrigger.min.js (rename from ScrollTrigger.min.js.download)
- jquery.mb.YTPlayer.min.js (rename from jquery.mb.YTPlayer.min.js.download)
- wow.min.js (rename from wow.min.js.download)
- function.js (rename from function.js.download)

## Step 4: Copy Images

Copy all image files from `Hipno - Psychology and Counseling HTML Template_files/` to `public/assets/images/`:

- All .jpg, .jpeg, .png, .svg files
- **Important**: Copy the entire "New folder" directory with all its images to `public/assets/images/New folder/`

## Step 5: Update index.html to Load Scripts

Add script tags before the closing `</body>` tag in `index.html`:

```html
<!-- jQuery -->
<script src="/assets/js/jquery-3.7.1.min.js"></script>
<!-- Bootstrap JS -->
<script src="/assets/js/bootstrap.min.js"></script>
<!-- Validator JS -->
<script src="/assets/js/validator.min.js"></script>
<!-- SlickNav JS -->
<script src="/assets/js/jquery.slicknav.js"></script>
<!-- Swiper JS -->
<script src="/assets/js/swiper-bundle.min.js"></script>
<!-- Counter JS -->
<script src="/assets/js/jquery.waypoints.min.js"></script>
<script src="/assets/js/jquery.counterup.min.js"></script>
<!-- Magnific Popup JS -->
<script src="/assets/js/jquery.magnific-popup.min.js"></script>
<!-- SmoothScroll JS -->
<script src="/assets/js/SmoothScroll.js"></script>
<!-- Parallax JS -->
<script src="/assets/js/parallaxie.js"></script>
<!-- GSAP & Magic Cursor JS -->
<script src="/assets/js/gsap.min.js"></script>
<script src="/assets/js/magiccursor.js"></script>
<!-- Text Effect JS -->
<script src="/assets/js/SplitText.js"></script>
<script src="/assets/js/ScrollTrigger.min.js"></script>
<!-- YTPlayer JS -->
<script src="/assets/js/jquery.mb.YTPlayer.min.js"></script>
<!-- WOW JS -->
<script src="/assets/js/wow.min.js"></script>
<!-- Main Custom JS -->
<script src="/assets/js/function.js"></script>
```

## Quick Setup Script (Windows PowerShell)

You can use this PowerShell script to automate the setup:

```powershell
# Create directories
New-Item -ItemType Directory -Force -Path "public\assets\css"
New-Item -ItemType Directory -Force -Path "public\assets\js"
New-Item -ItemType Directory -Force -Path "public\assets\images"

# Copy CSS files
Copy-Item "Hipno - Psychology and Counseling HTML Template_files\*.css" -Destination "public\assets\css\" -Force

# Copy JS files (remove .download extension)
Get-ChildItem "Hipno - Psychology and Counseling HTML Template_files\*.js.download" | ForEach-Object {
    $newName = $_.Name -replace '\.download$', ''
    Copy-Item $_.FullName -Destination "public\assets\js\$newName" -Force
}

# Copy images
Copy-Item "Hipno - Psychology and Counseling HTML Template_files\*.jpg" -Destination "public\assets\images\" -Force
Copy-Item "Hipno - Psychology and Counseling HTML Template_files\*.jpeg" -Destination "public\assets\images\" -Force
Copy-Item "Hipno - Psychology and Counseling HTML Template_files\*.png" -Destination "public\assets\images\" -Force
Copy-Item "Hipno - Psychology and Counseling HTML Template_files\*.svg" -Destination "public\assets\images\" -Force

# Copy New folder
Copy-Item "Hipno - Psychology and Counseling HTML Template_files\New folder" -Destination "public\assets\images\" -Recurse -Force
```

## Verification

After setup, verify that:
1. All CSS files are in `public/assets/css/`
2. All JS files are in `public/assets/js/` (without .download extension)
3. All images are in `public/assets/images/`
4. The "New folder" exists in `public/assets/images/New folder/`

