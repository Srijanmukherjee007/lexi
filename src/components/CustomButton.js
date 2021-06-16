import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	customButton: {
		margin: '10px',
		minHeight: '7rem',
		height: '10rem',
		width: '100%',
		textTransform: 'capitalize',
		background:
			'linear-gradient(50deg, rgba(2,0,36,1) 0%, rgba(46,46,57,1) 45%, rgba(29,107,130,1) 100%, rgba(0,212,255,1) 100%);',
	},
	buttonText: {
		color: '#fceceb',
		fontWeight: '600',
		fontSize: '2rem',
	},
}));
export default function CustomButton(props) {
	const classes = useStyles();
	const { children, ...other } = props;
	const handleClick = (event) => {
		console.log(event.target.textContent);
	};
	return (
		<Grid item xs={6}>
			<Button
				variant="contained"
				className={classes.customButton}
				onClick={handleClick}
			>
				<Typography className={classes.buttonText} {...other}>
					{children}
				</Typography>
			</Button>
		</Grid>
	);
}
