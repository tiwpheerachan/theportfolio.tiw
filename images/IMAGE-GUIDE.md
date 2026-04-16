# Image Guide — GoodJob Portfolio

## Folder Structure

```
images/
├── hrms/          ← HRMS Platform
│   ├── preview.svg    (placeholder — replace with .png/.jpg)
│   ├── thumb-1.svg    (placeholder — replace with .png/.jpg)
│   ├── thumb-2.svg    (placeholder — replace with .png/.jpg)
│   └── thumb-3.svg    (placeholder — replace with .png/.jpg)
├── dreame/        ← Membership & Loyalty Platform
│   ├── preview.svg
│   ├── thumb-1.svg
│   ├── thumb-2.svg
│   └── thumb-3.svg
├── 70mai/         ← Online Booking System
│   ├── preview.svg
│   ├── thumb-1.svg
│   ├── thumb-2.svg
│   └── thumb-3.svg
├── shd/           ← Corporate & Careers Platform
│   ├── preview.svg
│   ├── thumb-1.svg
│   ├── thumb-2.svg
│   └── thumb-3.svg
├── ecom/          ← E-Commerce Data Platform
│   ├── preview.svg
│   ├── thumb-1.svg
│   ├── thumb-2.svg
│   └── thumb-3.svg
└── ai/            ← AI Query Engine
    ├── preview.svg
    ├── thumb-1.svg
    ├── thumb-2.svg
    └── thumb-3.svg
```

## How to Replace Images

1. **Preview image** (`preview.*`) — Main image shown on the project card
   - Recommended size: **1200 x 675 px** (16:9 ratio)
   - Format: `.png` or `.jpg`
   - Simply replace the `.svg` file with your image, keeping the same name
   - Example: delete `preview.svg` → add `preview.png`
   - Then update `index.html`: change `preview.svg` → `preview.png`

2. **Thumbnails** (`thumb-1.*`, `thumb-2.*`, `thumb-3.*`) — Used in the modal gallery
   - Recommended size: **400 x 300 px** (4:3 ratio)
   - Format: `.png` or `.jpg`
   - These are for the project detail modal popup

## Quick Replace Checklist

| Project | Folder | File to replace |
|---------|--------|----------------|
| HRMS Platform | `images/hrms/` | `preview.png` |
| Membership Platform | `images/dreame/` | `preview.png` |
| Booking System | `images/70mai/` | `preview.png` |
| Corporate & Careers | `images/shd/` | `preview.png` |
| E-Commerce Data | `images/ecom/` | `preview.png` |
| AI Query Engine | `images/ai/` | `preview.png` |

## Tips
- Use screenshots of the actual app/dashboard for best results
- Keep file sizes under 500KB (compress with TinyPNG or Squoosh)
- The gradient background will still show as fallback if the image fails to load
