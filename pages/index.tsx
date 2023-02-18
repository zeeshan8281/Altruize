import About from '@/components/landing/About';
import Intro from '@/components/landing/Intro';
import PublicLayout from '@/layouts/PublicLayout';
import Head from 'next/head';
// RainbowKit
import { ConnectButton } from '@rainbow-me/rainbowkit';

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
				<ConnectButton/>
				<Intro />
				<About />
			</PublicLayout>
		</>
	);
}
