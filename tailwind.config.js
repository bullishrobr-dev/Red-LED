/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0ABAB5",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#C9A961",
          foreground: "#FFFFFF",
        },
        surface: "#FAFAFA",
        textPrimary: "#111827",
        textSecondary: "#6B7280",
        glow: "rgba(10, 186, 181, 0.15)",
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '24px',
        '3xl': '28px',
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        card: "0 1px 3px rgba(0,0,0,0.04)",
        glow: "0 4px 20px rgba(10,186,181,0.25)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "glow-1": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -20px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 15px) scale(0.95)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        "glow-2": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-25px, 20px) scale(0.95)" },
          "66%": { transform: "translate(15px, -25px) scale(1.05)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        "glow-3": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(20px, 25px) scale(1.05)" },
          "66%": { transform: "translate(-30px, -15px) scale(0.95)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "float": "float 4s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite",
        "glow-1": "glow-1 25s ease-in-out infinite",
        "glow-2": "glow-2 30s ease-in-out infinite",
        "glow-3": "glow-3 22s ease-in-out infinite",
        "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
