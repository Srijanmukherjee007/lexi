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
	Divider,
	Button,
} from '@material-ui/core';
import myTheme from '../theme';
import clsx from 'clsx';
import Link from 'next/link';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Image from 'next/image';
import asdhj from '../../utils/11070_1.svg';
const AnimatedLogo = dynamic(() => import('../components/AnimatedLogo'), {
	ssr: false,
});
const useStyles = makeStyles((theme) => ({
	logoContainer: {
		position: 'absolute',
		display: 'flex',
		justifyContent: 'center',
		marginTop: '25vh',
		minWidth: '100%',
	},
	sloganContainer: {
		display: 'flex',
		justifyContent: 'center',
		width: 'max-content',
	},
	outer: {
		position: 'absolute',
		display: 'flex',
		justifyContent: 'center',
		marginTop: '51vh', //adjust so that it's just under lexi
		minWidth: '100%',
	},
	buttonContainer: {
		position: 'absolute',
		display: 'flex',
		justifyContent: 'center',
		marginTop: '67vh',
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
		color: 'black',
		cursor: 'pointer',
		'&:hover': {
			background: `#b39e81`,
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

	desc: {
		color: 'black',
	},
	title: {
		color: 'black',
		fontSize: '2.5rem',
		fontWeight: '600',
	},
	getStarted: {
		position: 'absolute',
		fontSize: 'clamp(1rem, 2vw, 4rem)',
		textTransform: 'capitalize',
		background: '#c98620',
		'&:hover': {
			background: `#a16b18`,
		},
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
	const classes = useStyles();
	return (
		<html style={{ background: '#f2d6af' }}>
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
					<div className={classes.outer}>
						<div className={classes.sloganContainer}>
							<p className="slogan">Let's talk vocabulary.</p>
						</div>
					</div>

					<div className={classes.buttonContainer}>
						<Button
							variant="contained"
							className={clsx(classes.getStarted, 'getStartedButton')}
						>
							Get Started
						</Button>
					</div>
				</div>
				<Divider
					variant="middle"
					style={{
						border: '1px solid black',
						marginBottom: '10px',
					}}
				/>
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
