import Link from "next/link";

import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { landingTheme as theme } from "../theme";

const useStyles = makeStyles((theme) => ({
    navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    navItems: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "space-between",

        "& li": {
            color: theme.palette.primary,
            fontSize: "1rem",
            marginLeft: "40px",
        },

        "& li.active": {
            color: theme.palette.secondary,
            fontWeight: "bold",
        },
    },
}));

export default function Navbar({ innerRef }) {
    const classes = useStyles();
    return (
        <div ref={innerRef}>
            <Container className={classes.navbar}>
                <Typography variant="h3">Lexi</Typography>

                <ul className={classes.navItems}>
                    <li className="active">
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/quizzes">Quiz</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/login">Login</Link>
                    </li>
                </ul>
            </Container>
        </div>
    );
}
