import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        accent: '#38BDF8',
        muted: '#94A3B8',
        card: '#0B1224'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0F172A 0%, #0B1224 50%, #1E293B 100%)'
      }
    }
  },
  plugins: []
};

export default config;
