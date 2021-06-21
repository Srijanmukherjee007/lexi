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
		background: '#6f4e37',
		'&:hover': {
			background: '#593f2d',
		},
	},
	customButtonCorrect: {
		background:
			'linear-gradient(50deg, rgba(230,230,230,1) 0%, rgba(50,230,94,1) 0%)',
	},
	customButtonIncorrect: {
		background:
			'linear-gradient(50deg, rgba(230,230,230,1) 0%, rgba(230,50,50,1) 0%)',
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
