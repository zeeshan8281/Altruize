import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head />
			<body className='flex min-h-screen w-full flex-col'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
