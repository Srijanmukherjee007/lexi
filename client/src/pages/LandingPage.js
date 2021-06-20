import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import {
	AppBar,
	makeStyles,
	Toolbar,
	ThemeProvider,
	Typography,
	Slide,
	Grid,
	Container,
} from '@material-ui/core';
import myTheme from '../theme';
import clsx from 'clsx';
import Link from 'next/link';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const AnimatedLogo = dynamic(() => import('../components/AnimatedLogo'), {
	ssr: false,
});
const useStyles = makeStyles((theme) => ({
	logoContainer: {
		position: 'absolute',
		display: 'flex',
		justifyContent: 'center',
		marginTop: '15%',
		minWidth: '100%',
	},
	mixin: {
		...theme.mixins.toolbar,
	},
	appbar: {
		background: 'transparent',
	},
	appbarContentsLabel: {
		...theme.mixins.toolbar,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '1.12rem',
		textTransform: 'uppercase',
		padding: '0 2.5%',
		// borderRight: '1px solid white',
		// borderLeft: '1px solid white',
		background: 'transparent',
		transition: 'background 200ms ease-in-out',
		'&:hover': {
			background: `red`,
		},
	},
	startDiv: {
		marginLeft: 'auto',
		// borderLeft: '1px solid white',
	},
	endDiv: {
		marginRight: '3rem',
	},
	aboutUs: {
		display: 'flex',
		width: '100%',
	},
	sloganContainer: {
		position: 'absolute',
		display: 'flex',
		justifyContent: 'center',
		marginTop: '25%', //adjust so that it's just under lexi
		minWidth: '100%',
	},
	desc: {
		color: 'white',
	},
	title: {
		color: 'white',
		fontSize: '2.5rem',
		fontWeight: '600',
	},
}));

function HideOnScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

export default function LandingPage() {
	const classes = useStyles(myTheme);
	return (
		<html style={{ background: '#0A2239' }}>
			<ThemeProvider theme={myTheme}>
				<HideOnScroll>
					<AppBar className={classes.appbar} elevation={0}>
						<Toolbar>
							<Link href="#">
								<div
									className={clsx(
										classes.appbarContentsLabel,
										classes.startDiv
									)}
								>
									<Typography>Home</Typography>
								</div>
							</Link>
							<Link href="#">
								<div className={clsx(classes.appbarContentsLabel)}>
									<Typography>Quizzes</Typography>
								</div>
							</Link>
							<div
								className={clsx(classes.appbarContentsLabel, classes.endDiv)}
							>
								<Typography>About</Typography>
							</div>
						</Toolbar>
					</AppBar>
				</HideOnScroll>
				{/* <div className={classes.mixin} /> */}
				<div className="background_main">
					<div className={classes.logoContainer}>
						<AnimatedLogo />
					</div>
					<div className={classes.sloganContainer}>
						<h4 className="slogan">Let's talk vocabulary.</h4>
					</div>
				</div>
				<div className={classes.aboutUs}>
					<Container>
						<Grid item xs={12}>
							<Typography className={classes.title}>About Us</Typography>
						</Grid>
						<Grid container spacing={4}>
							<Grid item xs={12} md={6}>
								<Typography className={classes.desc}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Quisque nisi mi, aliquet sed dolor at, consequat congue nisl.
									Proin sed pretium ligula, eu varius leo. Sed sollicitudin enim
									ut quam dignissim, eu faucibus purus molestie. Morbi placerat
									ipsum id pretium imperdiet. Phasellus ipsum arcu, mattis vitae
									dictum vel, consequat eu lectus. Nulla facilisi. Vivamus eget
									libero a orci condimentum sollicitudin. Mauris eu ex quis
									turpis eleifend dapibus nec id arcu. Nunc justo urna, ultrices
									in tortor ut, bibendum egestas massa. Mauris finibus erat in
									ultrices feugiat. Morbi bibendum, orci quis ultrices maximus,
									massa nibh finibus ex, sed semper diam erat quis ex.
								</Typography>
							</Grid>
							<Grid item xs={12} md={6}>
								<Typography className={classes.desc}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Quisque nisi mi, aliquet sed dolor at, consequat congue nisl.
									Proin sed pretium ligula, eu varius leo. Sed sollicitudin enim
									ut quam dignissim, eu faucibus purus molestie. Morbi placerat
									ipsum id pretium imperdiet. Phasellus ipsum arcu, mattis vitae
									dictum vel, consequat eu lectus. Nulla facilisi. Vivamus eget
									libero a orci condimentum sollicitudin. Mauris eu ex quis
									turpis eleifend dapibus nec id arcu. Nunc justo urna, ultrices
									in tortor ut, bibendum egestas massa. Mauris finibus erat in
									ultrices feugiat. Morbi bibendum, orci quis ultrices maximus,
									massa nibh finibus ex, sed semper diam erat quis ex.
								</Typography>
							</Grid>
						</Grid>
					</Container>
				</div>
			</ThemeProvider>
		</html>
	);
}
