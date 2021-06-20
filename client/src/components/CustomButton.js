import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
	customButton: {
		margin: '10px',
		minHeight: '7rem',
		height: '10rem',
		width: '100%',
		textTransform: 'capitalize',
		background:
			'linear-gradient(50deg, rgba(2,0,36,1) 0%, rgba(46,46,57,1) 45%, rgba(29,107,130,1) 100%, rgba(0,212,255,1) 100%)',
	},
	customButtonCorrect: {
		background:
			'linear-gradient(50deg, rgba(230,230,230,1) 0%, rgba(85,255,127,1) 0%, rgba(41,163,53,1) 100%)',
	},
	customButtonIncorrect: {
		background:
			'linear-gradient(50deg, rgba(230,230,230,1) 0%, rgba(255,95,85,1) 0%, rgba(190,22,22,1) 100%)',
	},
	buttonText: {
		color: '#fceceb',
		fontWeight: '600',
		fontSize: '2rem',
	},
}));
export default function CustomButton(props) {
	const classes = useStyles();
	const { children, handleClick, isCorrect, isDisabled } = props;
	const [correct, setCorrect] = useState(null);
	const handleAnswer = () => {
		setCorrect(isCorrect);
		handleClick();
	};
	// using answered from parent to determine isDisabled
	useEffect(() => {
		if (isDisabled == false) {
			setCorrect(null);
		}
	}, [isDisabled]);

	return (
		<Grid item xs={6}>
			<Button
				variant="contained"
				className={clsx(
					classes.customButton,
					{ [classes.customButtonCorrect]: correct == true },
					{ [classes.customButtonIncorrect]: correct == false }
				)}
				onClick={handleAnswer}
				disabled={isDisabled}
			>
				<Typography className={classes.buttonText}>{children}</Typography>
			</Button>
		</Grid>
	);
}
