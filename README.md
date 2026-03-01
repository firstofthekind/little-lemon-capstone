# Little Lemon Restaurant

A React + TypeScript single-page application for a fictional restaurant brand.  
It includes a marketing homepage, an online reservation form with validation, and a mocked successful reservation confirmation flow.

## Features

- Homepage with hero, specials, testimonials, and about sections
- Client-side routing for `Home`, `Reservation`, `Order Online`, and `Login`
- Reservation form with `react-hook-form` + `zod` validation
- Date and time guardrails for booking rules (future date, 5:00 PM to 10:00 PM)
- Mocked async reservation request that always succeeds for manual UI testing
- Unit tests for booking form validation and successful submit flow
- Responsive UI using Bootstrap 5 and custom SCSS theme tokens

## Tech Stack

- React 19
- TypeScript 5
- Vite 7
- React Router 7
- React Hook Form + Zod
- Bootstrap 5 + Bootstrap Icons
- ESLint 9
- Vitest + React Testing Library

## Project Structure

```text
src/
  assets/        # Images and asset exports
  components/    # UI components (Hero, BookingForm, Modal, etc.)
  data/          # Static menu/testimonial data
  pages/         # Route-level pages
  routes/        # Router configuration
  schema/        # Zod validation schema(s)
  scss/          # Theme tokens and global styles
  types/         # Shared TypeScript types
```

## Prerequisites

- Node.js 22 LTS is recommended
- npm 10+ (comes with recent Node releases)

Notes:
- If you use Node 23, install/build may still work but some dependencies print engine warnings.

## Quick Start

1. Clone the repository.
2. Install dependencies.
3. Run the dev server.

```bash
git clone <your-repo-url>
cd little-lemon-capstone
npm install
npm run dev
```

Open `http://localhost:5173`.

## Available Scripts

- `npm run dev` starts Vite dev server
- `npm run build` runs TypeScript project build and Vite production build
- `npm run preview` serves the production build locally
- `npm run lint` runs ESLint on the project
- `npm run test` runs unit tests with Vitest

## Run in Production Mode Locally

```bash
npm run build
npm run preview
```

Then open the local preview URL shown in the terminal.

## Validation and Booking Behavior

- Form schema lives in `src/schema/booking.ts`
- `guests` is coerced to number and must be between `1` and `10`
- `date` must be today or future
- `time` must be between `17:00` and `22:00`
- Submit action is mocked and always returns success after a short delay
- On success, a confirmation modal appears and the form resets

## Troubleshooting

- Port `5173` already in use:
  - Vite will usually offer another port automatically.
- Clean reinstall:
  - Delete `node_modules` and `package-lock.json`, then run `npm install`.

## Quality Checks

Before pushing changes, run:

```bash
npm run lint
npm run test
npm run build
```
