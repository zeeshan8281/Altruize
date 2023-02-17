import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Nunito_Sans } from '@next/font/google';
import localFont from '@next/font/local';

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

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main
			className={`${nunitoSans.variable} ${cutmark.variable} font-nunitoSans`}
		>
			<Component {...pageProps} />
		</main>
	);
}
