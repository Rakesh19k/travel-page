# Hunter 350 | Ride Beyond Roads

A modern, responsive landing page for bike riding & travel adventures, themed around the Royal Enfield Hunter 350.

## Tech Stack

- **React 19** (Functional Components + Hooks)
- **Vite 7**
- **Tailwind CSS**
- Mobile-first responsive design

## Features

- **Header**: Sticky navigation with smooth scroll, mobile hamburger menu
- **Hero**: Full-width banner with Royal Enfield Hunter 350 theme, CTA buttons
- **Destinations**: 8 destination cards (Coorg, Ooty, Wayanad, Leh-Ladakh, Spiti Valley, Goa, Munnar, Rameshwaram) with distance, travel time, best season, difficulty
- **Ride Details**: Hunter 350 specs - mileage, comfort, road grip, touring features
- **Graphic Section**: Parallax scrolling with mountain/road visuals and inspirational quote
- **About**: Rider intro section
- **Social Links**: Instagram, YouTube, LinkedIn, GitHub, Email, WhatsApp with hover effects
- **Footer**: Quick links and copyright

## Design

- Dark theme with orange/red/gold accents (#e85d04, #f48c06)
- Bebas Neue + Outfit typography
- Smooth transitions, hover effects, parallax
- Cinematic bike visuals and gradients

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Destinations.jsx
│   ├── RideDetails.jsx
│   ├── GraphicSection.jsx
│   ├── About.jsx
│   ├── SocialLinks.jsx
│   └── Footer.jsx
├── data/
│   └── destinations.js
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

- Update destination data in `src/data/destinations.js`
- Modify social links in `src/components/SocialLinks.jsx`
- Edit rider bio in `src/components/About.jsx`
- Replace placeholder images with your own assets

---

Made with ❤️ & React
