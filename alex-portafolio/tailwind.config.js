module.exports = {
  content: ["./index.html","./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      important: '#zswiper',
      backgroundImage:{
        'avatar': "url('./src/img/perfil.jpg')"
      },
      colors: {
        'primary': '#23233C',
        'secundary': '#F3F2FB',
        'tertiary': '#9A9CA8',
      },
      maxWidth:{
        'primary': '1500px'
      },
      width:{
        'cal':' calc(100vh - 60px)',
        'circle':'1150px'
        
      },
      height:{
        'cal':' calc(100vh - 60px)',
        'circle':'1150px'
      },
    },
  },
  plugins: [],
}
