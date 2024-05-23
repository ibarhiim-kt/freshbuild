/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'custom-radial': 'radial-gradient(46.35% 478.71% at 50% 62.85%, #E3E3E3 0%, #D7FDF4 73.4%)',
      },
      boxShadow:{        
        'custom': '0px 4px 4px 0px #00000040',
        'custom2': '0px 6px 40px 0px #00000026',
        'custom3': ' 0px 3px 30px 0px #2D27471A',
      },
      screens:{
        // 'max-1280px':{'max':'1280px'},
        'max-1220px':{'max':'1220px'},
        'max-900px':{'max':'900px'},
        'max-700px':{'max':'700px'},
        'max-490px':{'max':'490px'},
        'max-400px':{'max':'400px'},
      },
      fontFamily:{
        'custom': ''
      }
    },
  },
  plugins: [],
}