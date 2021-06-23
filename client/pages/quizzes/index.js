import Head from "next/head";
import Quizzes from "@pages/Quizzes";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quizzes | Lexi</title>
      </Head>
      <Quizzes />
    </>
  );
}
