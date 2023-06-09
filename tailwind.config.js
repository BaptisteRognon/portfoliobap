module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "bleu": "#252C35",
  
      },
      "fontFamily": {
        heading: ['Bebas Neue'],
        "circular-std": "Circular Std",
        "bebasneue": "Bebas Neue",
      },
      "borderRadius": {
        "none": "0",
        "xs": "0.0625rem",
        "sm": "0.1875rem",
        "default": "0.25rem",
        "lg": "0.3125rem",
        "xl": "0.625rem",
        "2xl": "0.6875rem",
        "3xl": "0.8125rem",
        "4xl": "0.9375rem",
        "5xl": "1rem",
        "6xl": "1.1875rem",
        "7xl": "1.25rem",
        "8xl": "1.375rem",
        "9xl": "1.5625rem",
        "10xl": "1.8125rem",
        "11xl": "2.1875rem"
      }

    }
  },
  plugins: [],
}
