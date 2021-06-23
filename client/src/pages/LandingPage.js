import React from "react";
import dynamic from "next/dynamic";
import {
  makeStyles,
  ThemeProvider,
  Typography,
  Grid,
  Container,
  Button,
} from "@material-ui/core";
import myTheme from "../theme";
import clsx from "clsx";
import Link from "next/link";
import Navbar from "../components/Navbar";
const AnimatedLogo = dynamic(() => import("../components/AnimatedLogo"), {
  ssr: false,
});
const useStyles = makeStyles((theme) => ({
  logoContainer: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    marginTop: "25vh",
    minWidth: "100%",
  },
  sloganContainer: {
    display: "flex",
    justifyContent: "center",
    width: "max-content",
  },
  outer: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    marginTop: "51vh", //adjust so that it's just under lexi
    minWidth: "100%",
  },
  buttonContainer: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    marginTop: "67vh",
    minWidth: "100%",
  },
  aboutUs: {
    display: "flex",
    width: "100%",
  },

  desc: {
    color: "black",
  },
  title: {
    color: "black",
    fontSize: "2.5rem",
    fontWeight: "600",
  },
  getStarted: {
    position: "absolute",
    fontSize: "clamp(1rem, 2vw, 4rem)",
    textTransform: "capitalize",
    background: "#c98620",
    "&:hover": {
      background: `#a16b18`,
    },
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  return (
    <html style={{ background: "#f2d6af" }}>
      <ThemeProvider theme={myTheme}>
        <Navbar />
        {/* <div className={classes.mixin} /> */}
        <div className="background_main">
          <div className={classes.logoContainer}>
            <AnimatedLogo />
          </div>
          <div className={classes.outer}>
            <div className={classes.sloganContainer}>
              <p className="slogan">Let's talk vocabulary.</p>
            </div>
          </div>

          <div className={classes.buttonContainer}>
            <Link href={"/quizzes"}>
              <Button
                variant="contained"
                className={clsx(classes.getStarted, "getStartedButton")}
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
        <div className={classes.aboutUs}>
          <Container>
            <Grid item xs={12}>
              <Typography className={classes.title}>About Us</Typography>
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography className={classes.desc}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque nisi mi, aliquet sed dolor at, consequat congue nisl.
                  Proin sed pretium ligula, eu varius leo. Sed sollicitudin enim
                  ut quam dignissim, eu faucibus purus molestie. Morbi placerat
                  ipsum id pretium imperdiet. Phasellus ipsum arcu, mattis vitae
                  dictum vel, consequat eu lectus. Nulla facilisi. Vivamus eget
                  libero a orci condimentum sollicitudin. Mauris eu ex quis
                  turpis eleifend dapibus nec id arcu. Nunc justo urna, ultrices
                  in tortor ut, bibendum egestas massa. Mauris finibus erat in
                  ultrices feugiat. Morbi bibendum, orci quis ultrices maximus,
                  massa nibh finibus ex, sed semper diam erat quis ex.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography className={classes.desc}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque nisi mi, aliquet sed dolor at, consequat congue nisl.
                  Proin sed pretium ligula, eu varius leo. Sed sollicitudin enim
                  ut quam dignissim, eu faucibus purus molestie. Morbi placerat
                  ipsum id pretium imperdiet. Phasellus ipsum arcu, mattis vitae
                  dictum vel, consequat eu lectus. Nulla facilisi. Vivamus eget
                  libero a orci condimentum sollicitudin. Mauris eu ex quis
                  turpis eleifend dapibus nec id arcu. Nunc justo urna, ultrices
                  in tortor ut, bibendum egestas massa. Mauris finibus erat in
                  ultrices feugiat. Morbi bibendum, orci quis ultrices maximus,
                  massa nibh finibus ex, sed semper diam erat quis ex.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
      </ThemeProvider>
    </html>
  );
}
