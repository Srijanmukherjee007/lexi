import Head from 'next/head';
import MainPage from '../src/pages/MainPage';

export default function Home() {
	return (
		<>
			<Head>
				<title>Lexi</title>
			</Head>
			<MainPage />
		</>
	);
}
