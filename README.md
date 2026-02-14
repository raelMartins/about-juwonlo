# The Juwonlo — Creative Portfolio

A single-page portfolio website for **The Juwonlo** — Creative Strategist, Cinematographer & Visual Storyteller.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animations and scroll effects
- **Three.js** (via @react-three/fiber & @react-three/drei) for 3D hero background
- **Chakra UI** (in dependencies for future use)

## Features

- Immersive hero with floating 3D orbs
- Scroll-triggered animations throughout
- Responsive image gallery with lightbox
- Cinematography video showcase
- Experience, philosophy, and skills sections
- Contact section with email & Instagram
- Optional ambient audio (add `public/ambient.mp3` to enable)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/           # Next.js App Router
├── components/    # React components
├── data/          # Portfolio content
└── providers/     # (optional) Context providers
public/
└── media/         # Images and video assets
```

## Customization

- Edit `src/data/portfolio.ts` to update content
- Add images to `public/media/` and reference in portfolio data
- Add `public/ambient.mp3` for optional background audio

## Build

```bash
npm run build
npm start
```
