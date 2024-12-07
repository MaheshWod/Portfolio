module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Make sure Tailwind scans your src folder
  ],
  theme: {
    extend: {},
  },
  animation:{
    "rotating" : "rotating 8s linear-infinite"  },
  backgroundImage:{
"second-image" : "url('../src/Assetss/nature.png')"  },
  plugins: [],
};
