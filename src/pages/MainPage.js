import React from 'react';
import CustomButton from '../components/CustomButton';
import { makeStyles } from '@material-ui/core';
import { Container, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
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
}));
export default function MainPage() {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.textContainer}>
				<Typography className={classes.question}>This is a sentence</Typography>
			</div>
			<Container className={classes.buttonContainer}>
				<Grid container spacing={5}>
					{buttons.map((d, i) => (
						<CustomButton key={i}>This is Requiem</CustomButton>
					))}
				</Grid>
			</Container>
		</div>
	);
}
