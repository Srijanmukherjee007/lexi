import React from "react";
import { Container } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import Footer from "@components/Commons/Footer";
import Navbar from "@components/Commons/Navbar";
import QuizItem from "@components/Quizzes/QuizItem";
import styles from "@styles/Quizzes.module.scss";

function QuizList({ quizzes, error }) {
  if (error) {
    return (
      <p
        style={{
          fontSize: "0.9em",
          color: "#f00",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "3em",
          width: "100%",
        }}>
        <ErrorIcon />
        {error}
      </p>
    );
  }

  return (
    <>
      <div className={styles.heading}>Quizzes</div>
      <div className={styles.quizList}>
        {quizzes.map((quiz, key) => (
          <QuizItem
            key={key}
            title={quiz.name}
            url={"/quizzes/mode/" + quiz.slug}
            styles={styles}
          />
        ))}
      </div>
    </>
  );
}

export default function Quizzes({ quizzes, error }) {
  return (
    <>
      <Navbar activeNavLink="quizzes" />
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          justifyContent: "space-between",
        }}>
        <Container style={{ padding: "60px 3em 0 3em", margin: "0" }}>
          <QuizList quizzes={quizzes} error={error} />
        </Container>
        <Footer />
      </div>
    </>
  );
}
