import Head from "next/head";
import QuizzesListing from "../../src/pages/QuizzesListing";

export default function Home() {
	return (
		<>
			<Head>
				<title>Quizzes | Lexi</title>
			</Head>
			<QuizzesListing />
		</>
	);
}
