# Animations and Effects Guide

This document explains all the animations and interactive elements that have been added to the React application.

## Animation Libraries Used

1. **WOW.js** - Scroll-triggered animations (fadeInUp, fadeIn, etc.)
2. **GSAP (GreenSock)** - Advanced animations for text and elements
3. **SplitText** - Text splitting for character-by-character animations
4. **ScrollTrigger** - Scroll-based animation triggers
5. **jQuery CounterUp** - Animated number counters
6. **Parallaxie** - Parallax scrolling effects
7. **Magic Cursor** - Custom cursor effects

## Animation Components

### 1. Counter Component
Animated number counters that count up when scrolled into view.

```jsx
import Counter from './components/Counter'

<Counter value={30000} />
<Counter value={30} suffix="k" />
<Counter value={97} suffix="%" />
```

### 2. RevealImage Component
Images that fade in and slide up when scrolled into view.

```jsx
import RevealImage from './components/RevealImage'

<RevealImage>
  <figure className="image-anime">
    <img src="/path/to/image.jpg" alt="Description" />
  </figure>
</RevealImage>
```

### 3. AnimatedText Component
Text that animates character by character (for future use).

```jsx
import AnimatedText from './components/AnimatedText'

<AnimatedText style="2">
  Your text here
</AnimatedText>
```

## Animation Classes

### WOW.js Classes
Add these classes to elements for scroll animations:
- `wow fadeInUp` - Fade in from bottom
- `wow fadeIn` - Simple fade in
- `wow fadeInLeft` - Fade in from left
- `wow fadeInRight` - Fade in from right
- `data-wow-delay="0.2s"` - Delay before animation starts

### Text Animation Classes
- `text-anime-style-2` - Character-by-character animation (automatically handled by GSAP)

### Image Animation Classes
- `image-anime` - Image hover/transition effects
- `reveal` - Scroll-triggered reveal animation (wrapped in RevealImage component)

## Features

### Scroll Progress Bar
A progress bar at the top of the page shows scroll progress.

### Smooth Scrolling
Smooth scroll behavior for anchor links.

### Magic Cursor
Custom cursor effects on interactive elements (buttons, links, images with `data-cursor-text`).

### Parallax Effects
Elements with `.parallaxie` class have parallax scrolling effects.

### Counter Animations
All counters automatically animate when scrolled into view.

## Initialization

All animations are automatically initialized via the `useAnimations` hook in the Layout component. The hook:
- Runs on component mount
- Re-initializes on route changes
- Waits for all required scripts to load
- Handles errors gracefully

## Customization

### Animation Speed
Edit `src/hooks/useAnimations.js` to adjust:
- WOW.js offset
- GSAP animation duration
- Counter animation speed

### Adding New Animations
1. Add animation classes to your JSX
2. The `useAnimations` hook will automatically detect and initialize them
3. For custom animations, add initialization code to `useAnimations.js`

## Troubleshooting

### Animations not working?
1. Check browser console for errors
2. Verify all JS files are loaded in `index.html`
3. Ensure scripts load before React app initializes
4. Check that elements have correct animation classes

### Counters not animating?
- Ensure elements have `.counter` class
- Check that jQuery and counterUp are loaded
- Verify waypoints are initialized

### Text animations not working?
- Check that GSAP, SplitText, and ScrollTrigger are loaded
- Verify elements have `text-anime-style-2` class
- Check browser console for GSAP errors

