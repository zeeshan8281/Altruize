import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
	return (
		<nav className='w-full bg-primary/70 backdrop-blur-xl'>
			<div className='container mx-auto px-2 sm:px-6 lg:px-8'>
				<div className='relative flex h-16 items-center justify-between'>
					<div className='flex flex-shrink-0 items-center'>
						{/* Your logo here */}
						<Link href='/'>
							<Image
								className='justify-left h-8 w-auto'
								src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
								alt='Workflow'
								width={100}
								height={100}
							/>
						</Link>
						<Link
							href='/'
							className='w-auto rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
						>
							Home
						</Link>
						<Link
							href='/'
							className='w-auto rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
						>
							About
						</Link>
						<Link
							href='/'
							className='w-auto rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
						>
							Features
						</Link>
						<Link
							href='/'
							className='w-auto rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
						>
							Our Team
						</Link>
					</div>
					<ConnectButton />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
