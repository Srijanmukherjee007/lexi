import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
	typography: {
		fontFamily: ['Koho'],
	},

	palette: {
		primary: {
			main: '#F7EBE8',
		},

		secondary: {
			main: '#FFA987',
		},

		themeRed: {
			main: '#E54B4B',
		},

		themeBlack: {
			main: '#444140',
			dark: '#1E1E24',
		},
	},
});

export default theme;
