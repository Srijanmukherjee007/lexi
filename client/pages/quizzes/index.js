import Head from 'next/head';
import QuizzesListing from '../../src/pages/QuizzesListing';

export default function Home() {
	return (
		<>
			<Head>
				<title>Lexi</title>
			</Head>
			<QuizzesListing />
		</>
	);
}
