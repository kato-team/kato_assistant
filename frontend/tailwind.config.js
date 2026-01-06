// tailwind.config.js
const nativewind = require("nativewind/preset");

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [nativewind],
  theme: {
    extend: {
      colors: {
        background: '#F5F5F7',
        foreground: '#1C1C1E',
        card: {
          DEFAULT: 'rgba(255, 255, 255, 0.65)',
          foreground: '#1C1C1E',
        },
        popover: {
          DEFAULT: 'rgba(255, 255, 255, 0.95)',
          foreground: '#1C1C1E',
        },
        primary: {
          DEFAULT: '#007AFF',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#6E6E73',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#F5F5F7',
          foreground: '#6E6E73',
        },
        destructive: {
          DEFAULT: '#FF3B30',
          foreground: '#FFFFFF',
        },
        border: 'rgba(0, 0, 0, 0.08)',
        input: 'rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        inter: ['Inter'], // Make sure to load font in _layout.tsx
      },
      borderRadius: {
        lg: '12px', // Figma's 0.75rem
        md: '10px',
        sm: '8px',
      },
    },
  },
  plugins: [],
};