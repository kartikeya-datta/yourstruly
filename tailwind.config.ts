import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#1a1a1a',
        primary: '#0ea5e9',  
        secondary: '#8b5cf6',
        tertiary: '#ec4899',
        content: '#fafafa',
        accent: 'var(--accentColor, #8b5cf6)', // Using secondary as default accent
      },
      extend: {
        colors: {
          primary: '#4ade80', // green-400
          secondary: '#22d3ee', // cyan-400
          tertiary: '#818cf8', // indigo-400
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #8b5cf6 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f43f5e 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(14, 165, 233, 0.15) 0%, rgba(99, 102, 241, 0.15) 50%, rgba(139, 92, 246, 0.15) 100%)',
        'career-heading': 'linear-gradient(0deg, #8b5cf6, #ffffff)', // Career heading gradient
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
        'timeline-pulse': 'enhancedPulse 1.5s ease-in-out infinite', // Enhanced timeline animation
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      spacing: {
        '30': '7.5rem', // 120px
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        underline: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        timeline: {
          '10%, 20%, 50%, 70%, 90%': { 
            boxShadow: '0px 0px 5px 2px #d29bff' 
          },
          '0%, 10%, 30%, 64%, 80%, 100%': { 
            boxShadow: '0px 0px 5px 2px #d29bff, 0px 0px 15px 5px #d097ff, 0px 0px 110px 20px #f2c0ff' 
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;