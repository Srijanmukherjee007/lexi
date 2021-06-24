import React, { useState, useEffect } from "react";
import CustomButton from "@components/CustomButton";
import CountdownTimer from "@components/CountdownTimer";
import Navbar from "@components/Commons/Navbar";
import QuizLoadingSkeleton from "./QuizLoadingSkeleton";
import { IconButton, makeStyles } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import DetailsIcon from "@material-ui/icons/Details";
import clsx from "clsx";
import axios from "axios";

import styles from "@styles/Quiz.module.scss";

const useStyles = makeStyles((theme) => ({
  countdownContainer: {
    alignSelf: "flex-start",
    justifySelf: "flex-start",
    marginLeft: "1rem",
  },
  container: {
    position: "absolute",
    minWidth: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },

  textContainer: {
    display: "flex",
    justifyContent: "center",
    // border: '5px solid pink',
  },
  answerContainer: {
    display: "flex",
    minHeight: "33%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // border: '5px solid pink',
  },
  answerContainerInner: {
    display: "flex",
    minHeight: "60%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    border: "4px solid #798CC2",
  },
  question: {
    fontWeight: 600,
    fontSize: "clamp(1rem, 4vw, 2.5rem)",
  },
  answer: {
    fontWeight: 650,
    fontSize: "clamp(1.5rem, 10vw, 4rem)",
  },
  buttonContainer: {
    alignSelf: "flex-end",
  },
  next: {
    fontSize: "4rem",
    color: "black",
    transform: "rotate(-90deg)",
  },
  nextButton: {
    position: "absolute",
    left: "91%",
    top: "3%",
  },
}));

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default function Quiz({ slug, questions }) {
  const classes = useStyles();
  const [questionList, setQuestionList] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [quizDetails, setQuizDetails] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [maxIndex, setMaxIndex] = useState(null);

  const [timerController, setTimerController] = useState(null);

  const handleUserAnswer = (event) => {
    if (timerController) {
      timerController.pause();
    }
    setAnswered(true);
    if (event.isAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  useEffect(() => {
    setQuestionList(questions);
  }, [setQuestionList]);

  const setNextQuestion = () => {
    if (questionList) {
      setMaxIndex(questionList.length - 1);
      if (questionIndex <= maxIndex) {
        const data = questionList[questionIndex];
        setCurrentQuestion({
          question: data.question,
          options: shuffle(data.options),
        });
        setQuestionIndex(questionIndex + 1);
      } else {
        handleQuizComplete();
      }
    } else {
      setCurrentQuestion(null);
    }
    setAnswered(false);

    if (timerController) {
      timerController.reset();
    }
  };

  const handleQuizComplete = () => {
    setCurrentQuestion(undefined);
  };
  useEffect(() => {
    axios
      .get(`https://vocabulary-strapi-cms.herokuapp.com/quiz/slug/${slug}/`)
      .then((response) => {
        const { status, data } = response;
        if (status === 200 && !Object.keys(data).includes("error")) {
          setQuizDetails(data);
        } else {
          setQuizDetails(undefined);
        }
      });
  }, [setQuizDetails]);

  useEffect(() => {
    if (quizDetails == undefined || quizDetails == null) {
      return;
    }

    // setRandomQuestion();
    setNextQuestion();
  }, [quizDetails]);

  if (quizDetails == null || currentQuestion == null) {
    return <QuizLoadingSkeleton />;
  }

  if (quizDetails == undefined) {
    return <p>quiz cannot be loaded</p>;
  }

  if (currentQuestion == undefined) {
    return <p>error loading question</p>;
  }

  return (
    <>
      <Navbar />
      <div className={styles.quiz}>
        <div className={classes.countdownContainer}>
          <CountdownTimer
            variant="h3"
            onTimerInitialize={(timer) => {
              setTimerController(timer);
            }}
            onTimerComplete={handleUserAnswer}
          />
        </div>
        {/* <div hidden={!answered}>
          <IconButton className={classes.nextButton} onClick={setNextQuestion}>
            <DetailsIcon className={clsx(classes.next)} />
          </IconButton>
        </div> */}
        <div className={classes.textContainer}>
          <Typography className={classes.question}>
            {quizDetails.base_question}
          </Typography>
        </div>
        <div className={classes.answerContainer}>
          <div className={classes.answerContainerInner}>
            <Typography className={classes.answer}>
              {currentQuestion.question}
            </Typography>
          </div>
        </div>
        <Container className={classes.buttonContainer}>
          <Grid container spacing={5}>
            {currentQuestion.options.map((option, index) => (
              <CustomButton
                key={index}
                isCorrect={option.isAnswer == true}
                handleClick={handleUserAnswer}
                isDisabled={answered}
              >
                {option.text}
              </CustomButton>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}
