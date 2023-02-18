import About from '@/components/landing/About';
import Intro from '@/components/landing/Intro';
import NgoFeatures from '@/components/landing/NgoFeatures';
import UserFeatures from '@/components/landing/UserFeatures';
import PublicLayout from '@/layouts/PublicLayout';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<Head>
				<title>Care For Them</title>
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
			</PublicLayout>
		</>
	);
}
