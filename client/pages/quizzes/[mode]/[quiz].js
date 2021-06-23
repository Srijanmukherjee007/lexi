import React from "react";
import Quiz from "@pages/Quiz";
import { useRouter } from "next/router";

export default function SlugQuiz() {
  const router = useRouter();
  const { quiz } = router.query;

  return (
    <>
      {quiz == undefined ? (
        <p>loading...</p>
      ) : (
        <div>
          <Quiz slug={quiz} />
        </div>
      )}
    </>
  );
}
