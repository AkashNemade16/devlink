import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      'purple':'#633CFF',
      'purpleHover':'#BEADFF',
      'lightPurple':'#EFEBFF',
      'darkgrey':'#333333',
       'grey':'#737373',
       'border':'#D9D9D9',
       'lightGrey':'#FAFAFA',
       'red':'#FF3939',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
