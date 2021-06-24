import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState, useEffect } from "react";
import clsx from "clsx";
import styled from "styled-components";
import randomNumber from "./randomNumber";

const CustomLoadingButton = styled(Button)`
  background: linear-gradient(
    -90deg,
    rgba(230, 230, 230, 1) 0%,
    rgba(121, 140, 194, 1) 0%,
    rgba(217, 218, 223, 1) 50%,
    rgba(121, 140, 194, 1) 100%
  );
  min-height: 7rem;
  height: 10rem;
  width: 100%;
  background-size: 400% 400%;
  animation: slide 2.5s ease-in infinite;
  @keyframes slide {
    from {
      background-position: 0% 0%;
    }
    to {
      background-position: -135% 0%;
    }
  } ;
`;
const useStyles = makeStyles((theme) => ({
  customButton: {
    minHeight: "7rem",
    height: "10rem",
    width: "100%",
    textTransform: "lowercase",
    background: "#798CC2",
    "&:hover": {
      background: "#5C6FAA",
    },
  },
  customButtonCorrect: {
    background:
      "linear-gradient(50deg, rgba(230,230,230,1) 0%, rgba(50,230,94,1) 0%)",
  },
  customButtonIncorrect: {
    background:
      "linear-gradient(50deg, rgba(230,230,230,1) 0%, rgba(230,50,50,1) 0%)",
  },
  buttonText: {
    color: "#fceceb",
    fontWeight: "600",
    fontSize: "clamp(1rem, 4vw, 2rem)",
  },
}));
export default function CustomButton(props) {
  const classes = useStyles();
  const { children, handleClick, isCorrect, isDisabled } = props;
  const [correct, setCorrect] = useState(null);
  const [correct1, setCorrect1] = useState(null);
  const [correct2, setCorrect2] = useState(null);
  const [wrong, setWrong] = useState(null);

  useEffect(() => {
    setCorrect1(new Audio("/audio/correct1.mp3"));
    setCorrect2(new Audio("/audio/correct2.mp3"));
    setWrong(new Audio("/audio/wrong.mp3"));
  }, []);

  const handleAnswer = () => {
    setCorrect(isCorrect);
    if (isCorrect == true) {
      if (randomNumber(1, 2) == 1) {
        correct1.play();
      } else {
        correct2.play();
      }
    } else {
      wrong.play();
    }
    handleClick(...arguments);
  };
  // using answered from parent to determine isDisabled, answered also communicates whether question is answered
  useEffect(() => {
    if (isDisabled == false) {
      setCorrect(null);
    } else if (isDisabled == true) {
      if (isCorrect == true) {
        setCorrect(isCorrect);
      }
    }
  }, [isDisabled]);
  // check if correct then just display
  if (props.loading) {
    return (
      <Grid item xs={6}>
        <CustomLoadingButton variant="contained" />
      </Grid>
    );
  }
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
        disabled={isDisabled}>
        <Typography className={classes.buttonText}>{children}</Typography>
      </Button>
    </Grid>
  );
}
