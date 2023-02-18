import About from '@/components/landing/About';
import FAQ from '@/components/landing/FAQ';
import Intro from '@/components/landing/Intro';
import NgoFeatures from '@/components/landing/NgoFeatures';
import UserFeatures from '@/components/landing/UserFeatures';
import PublicLayout from '@/layouts/PublicLayout';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Altruize</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<PublicLayout>
				<Intro />
				<About />
				<NgoFeatures />
				<UserFeatures />
				<FAQ />
			</PublicLayout>
		</>
	);
}
