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
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
	},
}));
export default function MainPage() {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Container>
				<Typography variant="h2">This is a sentence</Typography>
			</Container>
			<Container>
				<Grid container spacing={5}>
					{buttons.map((d, i) => (
						<CustomButton key={i} onClick={() => console.log('clicked ' + i)}>
							This is Requiem
						</CustomButton>
					))}
				</Grid>
			</Container>{' '}
		</div>
	);
}
