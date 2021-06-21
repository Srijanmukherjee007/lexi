import React, { useState } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Navbar from '../components/Navbar';
import clsx from 'clsx';
import QuizzesListingItem from '../components/QuizzesListingItem';
const useStyles = makeStyles((theme) => ({
	mixin: {
		...theme.mixins.toolbar,
	},
}));

export default function QuizzesListing() {
	const classes = useStyles();
	// title is the large text, desc is hidden until hovered on
	return (
		<div
			style={{
				height: '100vh',
				backgroundColor: '#f2d6af',
				backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2000' height='240' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23715845' stroke-width='1' stroke-opacity='0.64'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E")`,
			}}
		>
			<Navbar />
			<div className={classes.mixin} />
			<Container>
				<Grid
					container
					style={{ display: 'flex', justifyContent: 'center' }}
					spacing={5}
				>
					<QuizzesListingItem
						title="Synonyms"
						desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
								nisi mi, aliquet sed dolor at, consequat congue nisl."
					/>
					<QuizzesListingItem
						title="Definitions"
						desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
								nisi mi, aliquet sed dolor at, consequat congue nisl."
					/>
				</Grid>
			</Container>
		</div>
	);
}
