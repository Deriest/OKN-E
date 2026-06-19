/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.2em',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        // OKN brand palette
        okn: {
          deep:      '#0a1a10', // canvas
          deeper:    '#0f1e16',
          forest:    '#1a3c2b',
          pine:      '#2d6a4f',
          leaf:      '#52b788', // primary accent
          mint:      '#95d5b2',
          palemint:  '#d8f3dc',
          terracotta:'#bc6c25', // warm accent
          sand:      '#d4895a',
          clay:      '#e8b48a',
          cream:     '#f8faf6',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up':   { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        'breathe': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
          '50%':      { transform: 'scale(1.025)', opacity: '1' },
        },
        'imprint': {
          '0%':   { filter: 'blur(14px) contrast(0.6)', opacity: '0', transform: 'scale(1.08)' },
          '60%':  { filter: 'blur(4px) contrast(0.9)', opacity: '0.7', transform: 'scale(1.02)' },
          '100%': { filter: 'blur(0) contrast(1)', opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up':   'accordion-up 0.2s ease-out',
        'breathe':        'breathe 4s ease-in-out infinite',
        'imprint':        'imprint 1.6s ease-out forwards',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
