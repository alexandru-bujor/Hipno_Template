# Troubleshooting CSS/Design Issues

## Quick Fix Steps

### 1. Restart the Development Server

**Stop the current server** (Ctrl+C in the terminal) and restart it:

```bash
npm run dev
```

The dev server needs to be restarted after creating the `public` folder.

### 2. Verify Assets Are Loading

Open your browser's Developer Tools (F12) and check:

1. **Console Tab**: Look for any 404 errors on CSS/JS files
2. **Network Tab**: 
   - Refresh the page (Ctrl+R or F5)
   - Filter by "CSS" and "JS"
   - Check if files are loading (status 200) or failing (status 404)

### 3. Check File Paths

In the browser console, test if assets are accessible:

```javascript
// Test CSS file
fetch('/assets/css/custom.css')
  .then(r => console.log('CSS Status:', r.status))
  .catch(e => console.error('CSS Error:', e))
```

### 4. Common Issues and Solutions

#### Issue: CSS files return 404
**Solution**: Make sure files are in `public/assets/css/` (not `src/assets/css/`)

#### Issue: Styles not applying
**Solution**: 
- Clear browser cache (Ctrl+Shift+R)
- Check if Bootstrap classes are working (try adding `class="container"` to a div)
- Verify CSS files are linked in `index.html`

#### Issue: JavaScript errors
**Solution**: 
- Check console for jQuery errors
- Make sure jQuery loads before other scripts
- Verify script order in `index.html`

### 5. Verify File Structure

Your project should have this structure:

```
public/
  assets/
    css/
      bootstrap.min.css ✓
      custom.css ✓
      animate.css ✓
      ... (all CSS files)
    js/
      jquery-3.7.1.min.js ✓
      bootstrap.min.js ✓
      ... (all JS files)
    images/
      logo.svg ✓
      ... (all images)
```

### 6. Test Page

Visit `http://localhost:3000/test-assets.html` to verify assets are accessible.

### 7. If Still Not Working

1. **Check Vite is serving public folder correctly**:
   - Files in `public/` should be accessible at root `/`
   - Example: `public/assets/css/custom.css` → `/assets/css/custom.css`

2. **Verify index.html links**:
   - All CSS links should use `/assets/css/...`
   - All JS scripts should use `/assets/js/...`

3. **Check for CORS issues**:
   - Shouldn't be an issue with Vite dev server
   - If using a different server, check CORS settings

4. **Hard refresh browser**:
   - Windows: Ctrl + Shift + R
   - Mac: Cmd + Shift + R

## Still Having Issues?

1. Check the browser console for specific error messages
2. Verify all files were copied correctly
3. Make sure the dev server is running on the correct port (3000)
4. Try accessing a CSS file directly: `http://localhost:3000/assets/css/custom.css`

