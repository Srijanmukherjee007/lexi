import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	quizCard: {
		background: "#715845",
		color: "white",
		borderRadius: "12px",
		padding: "0",
	},

	quizLink: {
		display: "block",
		width: "100%",
		height: "100%",
		textAlign: "center",
		padding: "5rem",
		fontSize: "2rem",
	},
}));

export default function QuizzesListingItem(props) {
	const { slug, title } = props;
	const classes = useStyles();
	return (
		<Grid item className={classes.quizCard}>
			<a href={"/quizzes/mode/" + slug} className={classes.quizLink}>
				{title}
			</a>
		</Grid>
	);
}
