module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B',
        secondary: '#A855F7',
        tertiary: '#3B82F6',
        success: '#4ADE80',
        warning: '#F59E0B',
        dark: '#0A0E1A',
        light: '#F5F5F5',
        gray: '#64748B',
      },
    },
  },
  plugins: [],
};
