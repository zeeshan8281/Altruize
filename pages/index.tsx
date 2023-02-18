import About from '@/components/landing/About';
import Intro from '@/components/landing/Intro';
import User from '@/components/Profile';
import PublicLayout from '@/layouts/PublicLayout';
import Head from 'next/head';
// RainbowKit
import { ConnectButton } from '@rainbow-me/rainbowkit';
import useIsMounted from '@/hooks/useIsMounted';


export default function Home() {
	const mounted = useIsMounted();
	return (
		<>
			<Head>
				<title>Altruize</title>
				<meta name='viewport' content='width=device-width, initial-scale=1'/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<PublicLayout>
				<ConnectButton/>
				{mounted ? <User/> : null}
				<Intro />
				<About />
			</PublicLayout>
		</>
	);
}
