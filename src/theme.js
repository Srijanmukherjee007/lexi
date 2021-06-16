import { createMuiTheme } from '@material-ui/core'

const landingTheme = createMuiTheme({
    typography: {
      fontFamily: ['Koho', 'sans-serif'].join(',')
    },

    palette: {
      primary: {
        main: '#F7EBE8'
      },
  
      secondary: {
        main: "#FFA987"
      },

      themeRed: {
        main: '#E54B4B'
      },

      themeBlack: {
        main: '#444140',
        dark: "#1E1E24",
      }
    }
  });

export { landingTheme }