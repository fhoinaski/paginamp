module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        'muted-foreground': 'hsl(var(--muted-foreground))',
        'brand-dark': 'hsl(var(--brand-dark))',
        'brand': 'hsl(var(--brand))',
        'border': 'hsl(var(--border))',
        'secondary': 'hsl(var(--secondary))', // Adiciona a cor secondary
      },
      // Adiciona a cor secondary com opacidade
      backgroundColor: {
        'secondary/80': 'hsl(var(--secondary) / 0.8)',
      },
    },
  },
  plugins: [],
};