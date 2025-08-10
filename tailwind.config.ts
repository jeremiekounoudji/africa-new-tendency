import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Placeholder tokens; will be replaced with extracted reference palette
        background: '#0b0b0b',
        foreground: '#f2f2f2',
        primary: '#6E59F5',
        secondary: '#1E1E1E',
        accent: '#22D3EE',
        muted: '#9CA3AF',
      },
    },
  },
  plugins: [],
} satisfies Config


