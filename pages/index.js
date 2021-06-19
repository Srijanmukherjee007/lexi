import Head from "next/head";
// import MainPage from "../src/pages/MainPage";
import HomePage from "../src/pages/HomePage";

export default function Home() {
	return (
		<>
			<Head>
				<title>Lexi</title>
			</Head>
			{/* <MainPage /> */}
			<HomePage />
		</>
	);
}
