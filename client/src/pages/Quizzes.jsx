import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { useQuery, gql } from "@apollo/client";
import Footer from "@components/Commons/Footer";
import Navbar from "@components/Commons/Navbar";
import QuizItem from "@components/Quizzes/QuizItem";

import styles from "@styles/Quizzes.module.scss";

const QUIZZES_QUERY = gql`
  query {
    quizzes {
      id
      name
      slug
    }
  }
`;

function QuizList() {
  const { loading, error, data } = useQuery(QUIZZES_QUERY);

  if (error) {
    return <p>something went wrong</p>;
  }

  if (data == undefined || loading) {
    return <p>loading...</p>;
  }

  return (
    <>
      <div className={styles.heading}>Quizzes</div>
      <div className={styles.quizList}>
        {data.quizzes.map((quiz, key) => (
          <QuizItem
            key={key}
            title={quiz.name}
            url={"/quizzes/mode/" + quiz.slug}
            styles={styles}
          />
        ))}
        {data.quizzes.map((quiz, key) => (
          <QuizItem
            key={key}
            title={quiz.name}
            url={"/quizzes/mode/" + quiz.slug}
            styles={styles}
          />
        ))}
        {data.quizzes.map((quiz, key) => (
          <QuizItem
            key={key}
            title={quiz.name}
            url={"/quizzes/mode/" + quiz.slug}
            styles={styles}
          />
        ))}
        {data.quizzes.map((quiz, key) => (
          <QuizItem
            key={key}
            title={quiz.name}
            url={"/quizzes/mode/" + quiz.slug}
            styles={styles}
          />
        ))}
        {data.quizzes.map((quiz, key) => (
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

export default function Quizzes() {
  return (
    <>
      <Navbar activeNavLink="quizzes" />
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Container style={{ padding: "60px 3em 0 3em", margin: "0" }}>
          <QuizList />
        </Container>
        <Footer />
      </div>
    </>
  );
}
