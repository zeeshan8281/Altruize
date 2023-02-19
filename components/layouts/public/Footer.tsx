import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub, AiOutlineLink, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {

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

	const teamOptions = [
		{
			name: 'Kunal Keshan',
			github: 'https://github.com/kunalkeshan',
			linkedin: 'https://www.linkedin.com/in/kunalkeshan',
			twitter: 'https://twitter.com/_kunalkeshan_',
			portfolio: 'https://kunalkeshan.dev'
		},
		{
			name: 'Kevin Paul',
			github: 'https://github.com/itaintkevin',
			linkedin: 'https://www.linkedin.com/in/itaintkevin',
			twitter: 'https://twitter.com/it_aint_kevin',
			portfolio: 'https://kevinpaul.xyz'
		},
		{
			name: 'Zeeshan Javed',
			github: 'https://github.com/zeeshan8281',
			linkedin: 'https://www.linkedin.com/in/mohammad-zeeshan-jawed-bab51a1a6',
			twitter: 'https://twitter.com/zeeshan_utd?t=ByuEiYw8co0PYTrS3eAUzw&s=09',
			portfolio: ''
		},
		{
			name: 'Arnav Shukla',
			github: 'https://github.com/thelordzeus',
			linkedin: 'https://www.linkedin.com/in/arnavshukla',
			twitter: 'https://twitter.com/iamlordzeus',
			portfolio: 'https://thelordzeus.vercel.app'
		}
	];

	return (
		<footer className='bg-primary text-white min-h-[20vh]'>
			<div className='container mx-auto flex flex-col flex-wrap py-4 px-5 sm:flex-row'>
				<div className='flex-grow my-[2%]'>
					<div className='mb-4 flex items-center'>
						<Image
							className='mr-2 h-8 w-8'
							src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
							alt='Logo'
							width={100}
							height={100}
						/>
						<a
							className='text-xl font-semibold hover:text-gray-500'
							href='https://github.com/zeeshan8281/Altruize'
						>
							Altuize
						</a>
					</div>
					<p className='text-sm'>
						&copy; 2023 Your Company. All rights reserved.
					</p>
				</div>
				<div className='flex-grow my-[2%]'>
					<h4 className='mb-2 text-lg font-medium'>
						Pages
					</h4>
					<nav className='flex flex-wrap'>
						{navOptions.map((option, index) => (
							<>
								<Link
									key={index}
									href={option.url}
									className='w-auto rounded-md pr-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
								>
									{option.name}
								</Link>
							</>
						))}
					</nav>
				</div>
				<div className='flex-grow my-[2%]'>
					<h4 className='mb-2 text-lg font-medium'>
						Team
					</h4>
					<nav className='flex flex-wrap'>
						{teamOptions.map((option, index) => (
							<>
								<ul key={index} className='w-auto rounded-md pr-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
									<li className='text-white'>{option.name}</li>
									<li className='flex'>
									<Link href={option.github} className="pr-2">
										<AiFillGithub size={25}/>
									</Link>
									<Link href={option.linkedin} className="pr-2">
										<AiFillLinkedin size={25}/>
									</Link>
									<Link href={option.twitter} className="pr-2">
										<AiFillTwitterCircle size={25}/>
									</Link>
									<Link href={option.portfolio} className="pr-2">
										<AiOutlineLink size={25}/>
									</Link>
									</li>
								</ul>
							</>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
