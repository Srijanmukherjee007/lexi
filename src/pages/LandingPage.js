import anime from 'animejs/lib/anime';
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import theme from '../theme';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';

const AnimatedLogo = dynamic(() => import('../components/AnimatedLogo'), {
	ssr: false,
});
const useStyles = makeStyles((theme) => ({
	logoContainer: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: '15%',
	},
	mixin: {
		height: theme.mixins.toolbar,
	},
	appbar: {
		background: theme.palette.primary.dark,
	},
	appbarContentsLabel: {
		minHeight: theme.mixins.toolbar,
		fontSize: '1.12rem',
		textTransform: 'uppercase',
		padding: '0 5%',
		borderRight: '1px solid white',
		background: 'transparent',
		'&:hover': {
			background: 'red',
		},
	},
}));
export default function LandingPage() {
	const classes = useStyles();
	return (
		<html style={{ background: theme.palette.primary.dark }}>
			<AppBar className={classes.appbar} elevation={3}>
				<Toolbar>
					<div className={classes.appbarContentsLabel}>Quizzes</div>
					<div className={classes.appbarContentsLabel}>About</div>
				</Toolbar>
			</AppBar>
			<div className={classes.mixin} />
			<div className={classes.logoContainer}>
				<AnimatedLogo />
			</div>
		</html>
	);
}
