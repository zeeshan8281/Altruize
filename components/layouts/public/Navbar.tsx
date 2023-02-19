import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
	
	const [menu, setMenu] = useState(false);

	const handleClick = () => {
		!menu
			? setMenu(true)
			: setMenu(false);
	}

	const navOptions = [
		{
			name: 'Home',
			url: '/',
		},
		{
			name: 'About',
			url: '/#about',
		},
		{
			name: 'Features',
			url: '/#features',
		},
		{
			name: 'FAQs',
			url: '/#faqs',
		},
		{
			name: 'NGOs',
			url: '/ngo',
		},
		{
			name: 'Profile',
			url: '/user',
		},
	];

	return (
		<div className='w-full bg-primary/70 backdrop-blur-xl'>
			<div className='container mx-auto px-2 sm:px-6 lg:px-8'>
				<div className='flex relative h-16 items-center justify-between'>
					<div className='flex flex-shrink-0 items-center'>
						<Link href='/' className='mr-1'>
							<Image
								className='justify-left h-8 w-auto'
								src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
								alt='Workflow'
								width={100}
								height={100}
							/>
						</Link>
						{navOptions.map((option, index) => (
							<>
								<Link
									key={index}
									href={option.url}
									className='hidden sm:block w-auto rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
								>
									{option.name}
								</Link>
							</>
						))}
						<button 
							onClick={handleClick}
							className='sm:hidden w-auto rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
							</svg>
						</button>
					</div>
					<ConnectButton 
						chainStatus={{
							smallScreen: "icon", 
							largeScreen: "full"
						}}   
						accountStatus={{
							smallScreen: 'avatar',
							largeScreen: 'avatar',
						}}
					/>
				</div>
				{ menu 
					? 	<>
							<div className="fixed top-0 left-0 flex flex-col items-center justify-center bg-primary w-full h-screen">
								<div className="fixed top-0 left-0 w-full flex items-center justify-between p-[1.35%]">
									<div className='flex items-center'>
										<Image
											className='justify-left h-8 w-auto mr-1'
											src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
											alt='Workflow'
											width={100}
											height={100}
										/>
										<button 
											onClick={handleClick}
											className='w-auto rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
												<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
											</svg>
										</button>
									</div>
									<ConnectButton 
										chainStatus={{
											smallScreen: "icon", 
											largeScreen: "full"
										}}   
										accountStatus={{
											smallScreen: 'avatar',
											largeScreen: 'avatar',
										}}
									/>
								</div>
								<div className='flex flex-col items-center justify-center'>
									{navOptions.map((option, index) => (
											<Link
												key={index}
												href={option.url}
												className='w-auto rounded-md text-3xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white py-[10%]'
												onClick={handleClick}
											>
												{option.name}
											</Link>
									))}
								</div>
							</div>
						</>
					: null
				}
			</div>
		</div>
	);
};

export default Navbar;
