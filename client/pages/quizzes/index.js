import Head from "next/head";
import Quizzes from "@pages/Quizzes";
import { apolloClient } from "../_app";
import { gql } from "@apollo/client";

const QUIZZES_QUERY = gql`
  query {
    quizzes {
      id
      name
      slug
    }
  }
`;

export default function QuizzesPage({ quizzes, error }) {
  return (
    <>
      <Head>
        <title>Quizzes | Lexi</title>
      </Head>
      <Quizzes quizzes={quizzes} error={error} />
    </>
  );
}

export async function getServerSideProps(ctx) {
  const response = await apolloClient.query({
    query: QUIZZES_QUERY,
  });

  let error = null;
  let quizzes = null;

  if (response.data) {
    quizzes = response.data.quizzes;
  } else {
    error = "Quizzes data could not be loaded";
  }

  return {
    props: {
      quizzes,
      error,
    },
  };
}
