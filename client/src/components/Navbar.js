import React from "react";
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Slide,
} from "@material-ui/core";
import clsx from "clsx";
import Link from "next/link";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import dynamic from "next/dynamic";
import theme from "src/theme";

const AnimatedLogo = dynamic(() => import("../components/AnimatedLogo"), {
  ssr: false,
});

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "transparent",
    // display: "flex",
  },
  appbarContentsLabel: {
    ...theme.mixins.toolbar,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.12rem",
    textTransform: "uppercase",
    padding: "0 2.5%",
    // borderRight: '1px solid white',
    // borderLeft: '1px solid white',
    background: "transparent",
    transition: "background 200ms ease-in-out",
    color: "black",
    cursor: "pointer",
    "&:hover": {
      background: `#ebecf0`,
    },
  },
  startDiv: {
    marginLeft: "auto",
    // borderLeft: '1px solid white',
  },
  endDiv: {
    marginRight: "3rem",
  },
  aboutUs: {
    display: "flex",
    width: "100%",
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
export default function Navbar() {
  const classes = useStyles();
  return (
    <HideOnScroll>
      <AppBar className={classes.appbar} elevation={4}>
        <Toolbar>
          <div
            style={{
              transform: "scale(0.25)",
              // alignSelf: "flex-start",
              ...theme.mixins.toolbar,
              marginTop: "-25px",
            }}
          >
            <AnimatedLogo />
          </div>
          <Link href="#">
            <div
              className={clsx(classes.appbarContentsLabel, classes.startDiv)}
            >
              <Typography>Home</Typography>
            </div>
          </Link>
          <Link href="#">
            <div className={clsx(classes.appbarContentsLabel)}>
              <Typography>Quizzes</Typography>
            </div>
          </Link>
          <div className={clsx(classes.appbarContentsLabel, classes.endDiv)}>
            <Typography>About</Typography>
          </div>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
