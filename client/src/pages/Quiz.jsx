import React, { useState, useEffect, useRef } from "react";
import QuizOption from "@components/Quiz/QuizOption";
import CountdownTimer from "@components/CountdownTimer";
import Navbar from "@components/Commons/Navbar";
import Footer from "@components/Commons/Footer";
import Button from "@material-ui/core/Button";
import styles from "@styles/Quiz.module.scss";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import Head from "next/head";
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
  const [timeTaken, setTimeTaken] = useState(0);
  const [complete, setComplete] = useState(false);
  const [lastQuestionStartTime, setLastQuestionStartTime] = useState(0);
  const [stopConfetti, setStopConfetti] = useState(false);
  const timerRef = useRef();
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  useEffect(() => {
    setNextQuestion(); // set the first question
  }, []);

  useEffect(() => {
    setLastQuestionStartTime(new Date());
    setAnswered(false);

    if (timerRef.current) {
      timerRef.current.resetAndStart();
    }
  }, [currentQuestion, timerRef]);

  // user answers a question
  const handleUserAnswer = (isCorrect) => {
    if (timerRef.current) {
      timerRef.current.pause();
    }
    setAnswered(true);
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeTaken(
      (prevTime) =>
        prevTime + Math.floor((new Date() - lastQuestionStartTime) / 1000)
    );
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

  const handleTimerComplete = () => {
    setAnswered(true);
    setTimeTaken(
      (prevTime) =>
        prevTime + Math.floor((new Date() - lastQuestionStartTime) / 1000)
    );
    if (timerRef.current) {
      timerRef.current.reset();
    }
  };

  const handleQuizComplete = () => {
    setComplete(true);

    // stop the confetti after 20secs
    setTimeout(() => {
      setStopConfetti(true);
    }, 20000);
  };

  const resetQuiz = () => {
    window.location.reload();
  };

  if (currentQuestion == null) {
    return <p>loading...</p>;
  }

  if (quiz == undefined) {
    return <p>quiz cannot be loaded</p>;
  }

  return (
    <>
      <Head>
        <title>{quiz.name} Quiz | Lexi</title>
      </Head>
      <Navbar />

      <div className={styles.container}>
        {!complete ? (
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
              <CountdownTimer
                ref={timerRef}
                onTimerComplete={handleTimerComplete}
              />
            </div>
            {/* Question | options */}
            <div className={styles.question_container}>
              <div className={styles.question}>
                <div
                  className={styles.main_question}
                  title={quiz.base_question}>
                  {currentQuestion.question}
                </div>
                {/* Overlay */}
                <div
                  className={clsx({
                    [styles.overlay]: true,
                    [styles.overlay_hidden]: !answered,
                  })}>
                  <Button onClick={setNextQuestion} className={styles.next_btn}>
                    {questionIndex == questions.length ? "done" : "next"}
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
        ) : (
          <div className={styles.quiz_result}>
            {!stopConfetti && (
              <Confetti
                width={windowWidth}
                height={windowHeight}
                recycle={true}
                run={!stopConfetti}
              />
            )}
            <div className={styles.quiz__name}>
              <span>{quiz.name}</span> quiz
            </div>
            <div className={styles.quiz_score}>
              <span>{score}</span> <span>/</span>{" "}
              <span>{questions.length}</span>
            </div>
            <div className={styles.quiz_time_taken}>
              time taken <span>{timeTaken}s</span>
            </div>
            {/* retake quiz button */}
            <Button className={styles.quiz_restart_btn} onClick={resetQuiz}>
              restart
            </Button>
            {/* try other quizzes - link to quizzes page */}
            <Button
              onClick={() => {
                window.location.href = "/quizzes";
              }}
              className={styles.quiz_quizzes_btn}>
              Try other quizzes
            </Button>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}
