import Head from 'next/head';
import MainPage from '../src/pages/MainPage';
export default function Home() {
	return (
		<>
			<Head>
				<title>Lexi</title>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=KoHo&family=Kodchasan&display=swap"
				/>
			</Head>
			<MainPage />
		</>
	);
}
