module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ajuste para incluir todos os arquivos relevantes
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
    },
    keyframes: {
        float: {
            '0%, 100%': { transform: 'translateY(0) ' },
            '50%': { transform: 'translateY(-10px) ' },
        },
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
      backgroundImage: {
        'gradient-28': 'linear-gradient(to bottom, #FFE600 0%, #FFD400 28%)',
      }
    },
  },
  plugins: [],
};