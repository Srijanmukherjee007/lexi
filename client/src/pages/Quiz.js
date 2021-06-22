import React, { useState, useEffect } from "react";
import CustomButton from "../components/CustomButton";
import { IconButton, makeStyles } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import DetailsIcon from "@material-ui/icons/Details";
import clsx from "clsx";
import axios from "axios";

const buttons = [1, 2, 3, 4];
const useStyles = makeStyles((theme) => ({
	container: {
		position: "absolute",
		minWidth: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
	},

	textContainer: {
		display: "flex",
		minHeight: "33%",
		justifyContent: "center",
		// border: '5px solid pink',
	},
	question: {
		fontWeight: 600,
		fontSize: "3rem",
	},
	buttonContainer: {
		alignSelf: "flex-end",
	},
	next: {
		fontSize: "4rem",
		color: "black",
		transform: "rotate(-90deg)",
	},
	nextButton: {
		position: "absolute",
		left: "91%",
		top: "3%",
	},
}));

function shuffle(array) {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}

export default function Quiz({ slug }) {
	const classes = useStyles();
	const [currentQuestion, setCurrentQuestion] = useState(null);
	const [answered, setAnswered] = useState(false);
	const [quizDetails, setQuizDetails] = useState(null);
	const [score, setScore] = useState(0);

	const handleUserAnswer = (event) => {
		setAnswered(true);
		if (event.isAnswer) {
			setScore((prevScore) => prevScore + 1);
		}
	};
	const setRandomQuestion = () => {
		setCurrentQuestion(null);

		axios
			.get(
				`https://vocabulary-strapi-cms.herokuapp.com/quiz/slug/${slug}/randomquestion`
			)
			.then((response) => {
				const { status, data } = response;

				if (status == 200 && !Object.keys(data).includes("error")) {
					setCurrentQuestion({
						question: data.question,
						options: shuffle(data.options),
					});
				} else {
					setCurrentQuestion(undefined);
				}
				setAnswered(false);
			});
	};

	useEffect(() => {
		axios
			.get(`https://vocabulary-strapi-cms.herokuapp.com/quiz/slug/${slug}/`)
			.then((response) => {
				const { status, data } = response;
				if (status === 200 && !Object.keys(data).includes("error")) {
					setQuizDetails(data);
				} else {
					setQuizDetails(undefined);
				}
			});
	}, [setQuizDetails]);

	useEffect(() => {
		if (quizDetails == undefined || quizDetails == null) {
			return;
		}

		setRandomQuestion();
	}, [quizDetails]);

	if (quizDetails == null || currentQuestion == null) {
		return <p>loading...</p>;
	}

	if (quizDetails == undefined) {
		return <p>quiz cannot be loaded</p>;
	}

	if (currentQuestion == undefined) {
		return <p>error loading question</p>;
	}

	return (
		<div className={classes.container}>
			<div hidden={!answered}>
				<IconButton className={classes.nextButton} onClick={setRandomQuestion}>
					<DetailsIcon className={clsx(classes.next)} />
				</IconButton>
			</div>
			<div className={classes.textContainer}>
				<Typography className={classes.question}>
					{quizDetails.base_question}
					<br />
					<small>{currentQuestion.question}</small>
				</Typography>
			</div>
			{/* you can add logic to check if answer is correct, just using random numbers rn*/}
			<Container className={classes.buttonContainer}>
				<Grid container spacing={5}>
					{currentQuestion.options.map((option, index) => (
						<CustomButton
							key={index}
							isCorrect={option.isAnswer == true}
							handleClick={handleUserAnswer}
							isDisabled={answered}
						>
							{option.text}
						</CustomButton>
					))}
				</Grid>
			</Container>
		</div>
	);
}
