import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Figma Colors
        neutral: {
          10: '#ffffff',
          20: '#F5F5F5',
          40: '#E0E0E0',
          60: '#9e9e9e',
          80: '#616161',
          90: '#ffffff',
          100: '#0A0A0A',
        },
        danger: {
          main: '#FD304D',
          surface: '#FFD6DB',
          hover: '#D32940',
        },
        info: {
          main: '#146ADC',
          hover: '#1158B7',
        },
        primary: {
          main: '#212143',
        },
        success: {
          main: '#0A7E22',
          surface: '#CEE5D3',
        },

        // Keep existing colors for backwards compatibility
        border: "hsl(214, 32%, 91%)",
        input: "hsl(214, 32%, 91%)",
        ring: "hsl(221, 83%, 53%)",
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(222, 84%, 5%)",
        secondary: {
          DEFAULT: "hsl(210, 40%, 96%)",
          foreground: "hsl(222, 84%, 5%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84.2%, 60.2%)",
          foreground: "hsl(210, 40%, 98%)",
        },
        muted: {
          DEFAULT: "hsl(210, 40%, 96%)",
          foreground: "hsl(215.4, 16.3%, 46.9%)",
        },
        accent: {
          DEFAULT: "hsl(210, 40%, 96%)",
          foreground: "hsl(222, 84%, 5%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(222, 84%, 5%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(222, 84%, 5%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(180deg)" },
        },
        "float-medium": {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-15px) scale(1.1)" },
        },
        "float-fast": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-random": {
          "0%": { 
            transform: "translateY(0px) translateX(0px) rotate(0deg)",
            opacity: "0",
          },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { 
            transform: "translateY(-100px) translateX(20px) rotate(360deg)",
            opacity: "0",
          },
        },
        "grid-move": {
          "0%": { transform: "translateX(0) translateY(0)" },
          "100%": { transform: "translateX(-50px) translateY(-50px)" },
        },
        "shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-5px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(5px)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-x": "gradient-x 15s ease infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "float-medium": "float-medium 6s ease-in-out infinite",
        "float-fast": "float-fast 4s ease-in-out infinite",
        "float-random": "float-random 8s linear infinite",
        "grid-move": "grid-move 20s linear infinite",
        "shake": "shake 0.5s ease-in-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
      },
      backdropBlur: { xs: '2px' },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
