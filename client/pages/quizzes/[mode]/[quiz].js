import React from "react";
import Quiz from "../../../src/pages/Quiz";
import { useRouter } from "next/router";
import axios from "axios";

export default function SlugQuiz({ questions, questionLoadError }) {
  const router = useRouter();
  const { quiz } = router.query;

  return (
    <>
      {quiz == undefined ? (
        <p>loading...</p>
      ) : (
        <div>
          <Quiz slug={quiz} questions={questions} />
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const { quiz } = context.query;

  const questionsAPI = `https://vocabulary-strapi-cms.herokuapp.com/quiz/slug/${quiz}/randomquestion?count=10`;
  const questionsResponse = await axios.get(questionsAPI);

  const { status, data } = questionsResponse;
  if (
    status === 200 &&
    !Object.keys(data).includes("error") &&
    Object.keys(data).includes("questions")
  ) {
    return {
      props: {
        questions: data.questions,
      },
    };
  }

  return {
    props: {
      questionLoadError: true,
    },
  };
}
