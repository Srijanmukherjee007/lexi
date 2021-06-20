import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
	typography: {
		fontFamily: ['Koho'],
	},

	palette: {
		primary: {
			main: '#176087',
		},
		darkBlue: {
			main: '#0A2239',
		},
		secondary: {
			main: '#53A2BE',
		},

		themeDeepGreen: {
			main: '#132E32',
		},

		themeBlack: {
			main: '#444140',
			dark: '#1E1E24',
		},
	},
});

export default theme;
