import React from 'react';
import Image from 'next/image';

const Footer = () => {
	return (
		<footer className='bg-primary text-white'>
			<div className='container mx-auto flex flex-col flex-wrap py-4 px-5 sm:flex-row'>
				<div className='flex-grow'>
					<h4 className='mb-2 text-lg font-medium'>Section 1</h4>
					<div className='mb-4 flex items-center'>
						<Image
							className='mr-2 h-8 w-8'
							src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
							alt='Logo'
							width={100}
							height={100}
						/>
						<a
							className='hover:text-gray-500'
							href='https://github.com/your-github'
						>
							GitHub Link
						</a>
					</div>
					<p className='text-sm'>
						&copy; 2023 Your Company. All rights reserved.
					</p>
				</div>
				<div className='flex-grow'>
					<h4 className='mb-2 text-lg font-medium'>
						Section 2 - Page Links
					</h4>
					<nav className='flex flex-wrap'>
						<a className='mr-4 mb-2 hover:text-gray-500' href='#'>
							Link 1
						</a>
						<a className='mr-4 mb-2 hover:text-gray-500' href='#'>
							Link 2
						</a>
						<a className='mr-4 mb-2 hover:text-gray-500' href='#'>
							Link 3
						</a>
						<a className='mr-4 mb-2 hover:text-gray-500' href='#'>
							Link 4
						</a>
					</nav>
				</div>
				<div className='flex-grow'>
					<h4 className='mb-2 text-lg font-medium'>
						Section 3 - Team Links
					</h4>
					<nav className='flex flex-wrap'>
						<a className='mr-4 mb-2 hover:text-gray-500' href='#'>
							Member 1
						</a>
						<a className='mr-4 mb-2 hover:text-gray-500' href='#'>
							Member 2
						</a>
						<a className='mr-4 mb-2 hover:text-gray-500' href='#'>
							Member 3
						</a>
					</nav>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
