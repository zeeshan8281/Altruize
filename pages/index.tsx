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
			<main>
				<h1 className='font-cutmark text-7xl'>Hello there!</h1>
				<ConnectButton/>
			</main>
		</>
	);
}
