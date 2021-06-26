import React from "react";
import Quiz from "@pages/Quiz";
import axios from "axios";
import Head from "next/head";

export default function SlugQuiz({ questions, quiz, loadError }) {
  return (
    <>
      <Head>
        <title>Quiz | Lexi</title>
      </Head>
      {quiz == undefined ? (
        <p>loading...</p>
      ) : (
        <div>
          <Quiz quiz={quiz} questions={questions} loadError={loadError} />
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const { quiz } = context.query;

  const questionsAPI = `https://vocabulary-strapi-cms.herokuapp.com/quiz/slug/${quiz}/randomquestion?count=10`;
  const questionsResponse = await axios.get(questionsAPI);

  const quizDetailAPI = `https://vocabulary-strapi-cms.herokuapp.com/quiz/slug/${quiz}/`;
  const quizDetailResponse = await axios.get(quizDetailAPI);

  const { status: statusQuestions, data: dataQuestions } = questionsResponse;
  const { status: statusQuizDetail, data: dataQuizDetail } = quizDetailResponse;

  if (
    statusQuestions === 200 &&
    statusQuizDetail === 200 &&
    !Object.keys(dataQuestions).includes("error") &&
    !Object.keys(dataQuizDetail).includes("error") &&
    Object.keys(dataQuestions).includes("questions")
  ) {
    return {
      props: {
        questions: dataQuestions.questions,
        quiz: dataQuizDetail,
      },
    };
  }

  return {
    props: {
      loadError: true,
    },
  };
}
