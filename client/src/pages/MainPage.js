import React, { useState, useEffect } from 'react';
import CustomButton from '../components/CustomButton';
import { IconButton, makeStyles } from '@material-ui/core';
import { Container, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import DetailsIcon from '@material-ui/icons/Details';
import clsx from 'clsx';
import axios from 'axios';
const buttons = [1, 2, 3, 4];
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
		minHeight: '33%',
		justifyContent: 'center',
		// border: '5px solid pink',
	},
	question: {
		fontWeight: 600,
		fontSize: '3rem',
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

function getRandomInt(max, min) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function MainPage() {
	const classes = useStyles();
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answer, setAnswer] = useState(1);
	const [answered, setAnswered] = useState(false);
	const handleClick = (event) => {
		setAnswered(true);
	};
	const setNextQuestion = () => {
		setCurrentQuestion(currentQuestion + 1);
		setAnswer(getRandomInt(1, 4));
		setAnswered(false);
	};
	async function fetchData() {
		const [questions, setQuestions] = useState([]);
		const response = await axios.get(
			'https://opentdb.com/api.php?amount=10&type=multiple'
		);
		const { data } = response;
		setQuestions(data.results);
	}

	return (
		<div className={classes.container}>
			<div hidden={!answered}>
				<IconButton className={classes.nextButton} onClick={setNextQuestion}>
					<DetailsIcon className={clsx(classes.next)} />
				</IconButton>
			</div>
			<div className={classes.textContainer}>
				<Typography className={classes.question}>
					Pick a random number
				</Typography>
			</div>
			<Container className={classes.buttonContainer}>
				<Grid container spacing={5}>
					{buttons.map((d, i) => (
						<CustomButton
							key={i}
							isCorrect={d == answer}
							handleClick={handleClick}
							isDisabled={answered}
						>
							{d}
						</CustomButton>
					))}
				</Grid>
			</Container>
		</div>
	);
}
