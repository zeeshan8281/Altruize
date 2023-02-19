import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Nunito_Sans } from '@next/font/google';
import localFont from '@next/font/local';
import { Provider } from 'react-redux';
import wrapper from '@/store';

// Rainbow Kit
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { SessionProvider } from 'next-auth/react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, webSocketProvider, provider } = configureChains(
	[mainnet, polygon, optimism, arbitrum],
	[publicProvider()]
);

const { connectors } = getDefaultWallets({
	appName: 'Altruize',
	chains,
});

const wagmiClient = createClient({
	autoConnect: true,
	webSocketProvider,
	connectors,
	provider,
});

const nunitoSans = Nunito_Sans({
	subsets: ['latin'],
	weight: ['200', '300', '400', '600', '700', '800', '900'],
	style: ['italic', 'normal'],
	variable: '--font-nunitoSans',
});

const cutmark = localFont({
	src: [
		{
			path: '../fonts/Cutmark/Cutmark-Thin.ttf',
			weight: '100',
			style: 'normal',
		},
		{
			path: '../fonts/Cutmark/Cutmark-XLight.ttf',
			weight: '200',
			style: 'normal',
		},
		{
			path: '../fonts/Cutmark/Cutmark-Light.ttf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../fonts/Cutmark/Cutmark-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../fonts/Cutmark/Cutmark-Medium.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../fonts/Cutmark/Cutmark-Bold.ttf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../fonts/Cutmark/Cutmark-XBold.ttf',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../fonts/Cutmark/Cutmark-Super.ttf',
			weight: '800',
			style: 'normal',
		},
	],
	variable: '--font-cutmark',
});

export default function App({ Component, ...rest }: AppProps) {
	const { store, props } = wrapper.useWrappedStore(rest);
	const { pageProps } = props;
	return (
		<Provider store={store}>
			<WagmiConfig client={wagmiClient}>
				<SessionProvider
					session={pageProps.session}
					refetchInterval={0}
				>
					<RainbowKitProvider chains={chains}>
						<main
							className={`${nunitoSans.variable} ${cutmark.variable}`}
						>
							<Component {...pageProps} />
						</main>
					</RainbowKitProvider>
				</SessionProvider>
			</WagmiConfig>
		</Provider>
	);
}
