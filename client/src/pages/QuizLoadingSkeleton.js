import React, { useState, useEffect } from 'react';
import CustomButton from '../components/CustomButton';
import { IconButton, makeStyles } from '@material-ui/core';
import { Container, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import DetailsIcon from '@material-ui/icons/Details';
import clsx from 'clsx';
import styled from 'styled-components';

const BallBounce = styled.div`
	height: clamp(1rem, 4vw, 1.5rem);
	width: clamp(1rem, 4vw, 1.5rem);
	background: #5c6faa;
	border: 1px solid #5c6faa;
	border-radius: 50%;
	margin: 5px;
	animation: jumpingDots 1.4s infinite linear;

	@keyframes jumpingDots {
		20% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-20px);
		}
	}
`;

const AnimationContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;
const useStyles = makeStyles((theme) => ({
	container: {
		position: 'absolute',
		minWidth: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
	},

	textContainer: {
		display: 'flex',
		justifyContent: 'center',
		// border: '5px solid pink',
	},
	answerContainer: {
		display: 'flex',
		minHeight: '33%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		// border: '5px solid pink',
	},
	answerContainerInner: {
		display: 'flex',
		minHeight: '60%',
		width: '50%',
		justifyContent: 'center',
		alignItems: 'center',
		border: '4px solid #798CC2',
	},
	question: {
		fontWeight: 600,
		fontSize: 'clamp(1rem, 5vw, 2.5rem)',
	},
	answer: {
		fontWeight: 650,
		fontSize: 'clamp(1.5rem, 10vw, 4rem)',
	},
	buttonContainer: {
		alignSelf: 'flex-end',
	},
	next: {
		fontSize: '4rem',
		color: 'black',
		transform: 'rotate(-90deg)',
	},
	nextButton: {
		position: 'absolute',
		left: '91%',
		top: '3%',
	},
}));

const buttons = [1, 2, 3, 4];

export default function QuizLoadingSkeleton() {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div hidden>
				<IconButton className={classes.nextButton}>
					<DetailsIcon className={clsx(classes.next)} />
				</IconButton>
			</div>
			<div className={classes.textContainer} hidden={true}>
				<Typography className={classes.question}>Loading</Typography>
			</div>
			<div className={classes.answerContainer}>
				<div className={classes.answerContainerInner}>
					<AnimationContainer className="aniContainer">
						<BallBounce className="animationsBounce" />
						<BallBounce className="animationsBounce" />
						<BallBounce className="animationsBounce" />
					</AnimationContainer>
				</div>
			</div>
			<Container className={classes.buttonContainer}>
				<Grid container spacing={5}>
					{buttons.map((d, i) => (
						<CustomButton loading={true} key={i} />
					))}
				</Grid>
			</Container>
		</div>
	);
}
