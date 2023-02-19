import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				{/* <!-- Primary Meta Tags --> */}
				<meta
					name='title'
					content='Altruize - Web3 Based NGO Donation Platform'
				/>
				<meta
					name='description'
					content='A web3-based NGO donations app has several advantages over a web2-based app. Web3 technology, which is built on blockchain, enables secure and transparent transactions, with no need for intermediaries like banks or payment processors. This means that donors can have complete control over their donations, without worrying about fraud or misuse of funds.'
				/>

				{/* <!-- Open Graph / Facebook --> */}
				<meta property='og:type' content='website' />
				<meta
					property='og:url'
					content='https://altruize.vercel.app/'
				/>
				<meta
					property='og:title'
					content='Altruize - Web3 Based NGO Donation Platform'
				/>
				<meta
					property='og:description'
					content='A web3-based NGO donations app has several advantages over a web2-based app. Web3 technology, which is built on blockchain, enables secure and transparent transactions, with no need for intermediaries like banks or payment processors. This means that donors can have complete control over their donations, without worrying about fraud or misuse of funds.'
				/>
				<meta property='og:image' content='/thumbnail.jpeg' />

				{/* <!-- Twitter --> */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta
					property='twitter:url'
					content='https://altruize.vercel.app/'
				/>
				<meta
					property='twitter:title'
					content='Altruize - Web3 Based NGO Donation Platform'
				/>
				<meta
					property='twitter:description'
					content='A web3-based NGO donations app has several advantages over a web2-based app. Web3 technology, which is built on blockchain, enables secure and transparent transactions, with no need for intermediaries like banks or payment processors. This means that donors can have complete control over their donations, without worrying about fraud or misuse of funds.'
				/>
				<meta property='twitter:image' content='/thumbnail.jpeg' />
			</Head>
			<body className='flex min-h-screen w-full flex-col'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
