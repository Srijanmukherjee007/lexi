import React, { useState, useEffect, useRef } from "react";
import QuizOption from "@components/Quiz/QuizOption";
import CountdownTimer from "@components/CountdownTimer";
import Navbar from "@components/Commons/Navbar";
import Footer from "@components/Commons/Footer";
import Button from "@material-ui/core/Button";
import styles from "@styles/Quiz.module.scss";
import clsx from "clsx";

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

export default function Quiz({ quiz, questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const timerRef = useRef();

  // user answers a question
  const handleUserAnswer = (isCorrect) => {
    if (timerRef.current) {
      timerRef.current.pause();
    }
    setAnswered(true);
    if (isCorrect) {
      setScore(score + 1);
    }

    // setNextQuestion();
  };

  const setNextQuestion = () => {
    if (questionIndex < questions.length) {
      const data = questions[questionIndex];

      setCurrentQuestion({
        question: data.question,
        options: shuffle(data.options),
      });
      setQuestionIndex((prev) => prev + 1);
    } else {
      handleQuizComplete();
    }
  };

  useEffect(() => {
    setAnswered(false);

    if (timerRef.current) {
      timerRef.current.resetAndStart();
    }
  }, [currentQuestion, timerRef]);

  const handleQuizComplete = () => {
    // setCurrentQuestion(undefined);
    alert("quiz complete");
  };

  useEffect(() => {
    setNextQuestion(); // set the first question
  }, []);

  if (currentQuestion == null) {
    return <p>loading...</p>;
  }

  if (quiz == undefined) {
    return <p>quiz cannot be loaded</p>;
  }

  if (currentQuestion == undefined) {
    return <p>error loading question</p>;
  }

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.quiz}>
          {/* Show quiz name */}
          <div className={styles.quiz__name}>
            <span>{quiz.name}</span> quiz
          </div>

          {/* Quiz header */}
          <div className={styles.quiz__header}>
            {/* Score */}
            <div className={styles.quiz__score}>
              score: <span>{score}</span>
            </div>
            {/* Countdown */}
            <CountdownTimer ref={timerRef} />
          </div>
          {/* Question | options */}
          <div className={styles.question_container}>
            <div className={styles.question}>
              <div className={styles.main_question} title={quiz.base_question}>
                {currentQuestion.question}
              </div>
              {/* Overlay */}
              <div
                className={clsx({
                  [styles.overlay]: true,
                  [styles.overlay_hidden]: !answered,
                })}>
                <Button onClick={setNextQuestion} className={styles.next_btn}>
                  next
                </Button>
              </div>
            </div>
            <div className={styles.options}>
              {currentQuestion.options.map((option, index) => (
                <QuizOption
                  key={index}
                  isCorrect={option.isAnswer == true}
                  handleClick={handleUserAnswer}
                  isDisabled={answered}
                  styles={styles}>
                  {option.text}
                </QuizOption>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
