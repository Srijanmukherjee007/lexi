import React from "react";
import { Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import clsx from "clsx";

export default function CustomButton({
  children,
  handleClick,
  isCorrect,
  isDisabled,
  styles,
}) {
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
      if (Math.random() < 0.5) {
        correct1.play();
      } else {
        correct2.play();
      }
    } else {
      wrong.play();

      // vibrate
      try {
        window.navigator.vibrate(500);
      } catch (e) {}
    }

    handleClick(isCorrect);
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

  return (
    <Button
      className={clsx(
        styles.quiz_option,
        { [styles.quiz_option_correct]: correct == true },
        { [styles.quiz_option_incorrect]: correct == false }
      )}
      onClick={handleAnswer}
      disabled={isDisabled}>
      {children}
    </Button>
  );
}
