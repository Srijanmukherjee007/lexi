import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
	quizCard: {
		position: 'relative',
		width: '70vw',
		background: '#715845',
		height: '25vh',
		display: 'flex',
		justifyContent: 'center',
		transition: 'transform 300ms ease-in-out',
		cursor: 'pointer',
		color: 'white',
		flexWrap: 'wrap',
		'&:hover': {
			transform: 'scale(1.15)',
		},
	},
	cardDesc: {
		opacity: 0,
		transform: 'translateY(10%)',
		transition: 'all 150ms ease-in-out',
	},
	cardDescHover: {
		transform: 'translateY(0%)',
		opacity: 1,
	},
	cardLabel: {
		fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
		transform: 'translateY(50%)',
		transition: 'transform 150ms ease-in-out',
	},
	cardHovered: {
		transform: 'translateY(25%)',
	},
}));

export default function QuizzesListingItem(props) {
	const { desc, title } = props;
	const classes = useStyles();
	const [hovered, setHovered] = useState(false);
	const handleHover = () => {
		setHovered(true);
	};
	const handleLeave = () => {
		setHovered(false);
	};
	return (
		<Grid item xs={10} style={{ marginTop: '5vh' }}>
			<div
				className={classes.quizCard}
				onMouseEnter={handleHover}
				onMouseLeave={handleLeave}
			>
				<div
					style={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Typography
						className={clsx(classes.cardLabel, {
							[classes.cardHovered]: hovered,
						})}
					>
						{title}
					</Typography>
				</div>

				<Typography
					className={clsx(classes.cardDesc, {
						[classes.cardDescHover]: hovered,
					})}
				>
					{desc}
				</Typography>
			</div>
		</Grid>
	);
}
