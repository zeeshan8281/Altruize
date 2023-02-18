import React from 'react';
import Image from 'next/image';

const About = () => {
	const descriptions = [
		'Introducing "Altruize", the innovative web3 platform that brings together the concepts of altruism and capitalization for a meaningful cause. With a mission to make charitable giving more accessible and transparent, Altruize allows users to make donations to NGOs seamlessly using web3 concepts.',
		'Not only that, but NGOs can also sign up to the platform to receive donations and track their impact. By using the latest technology and blockchain infrastructure, Altruize ensures secure and transparent transactions that are accessible to everyone, making a positive impact on the world. Join the movement and start giving back today with Altruize.',
	];

	const features = [
		'Web3-based donation platform',
		'NGOs can sign up to receive donations',
		'Use of blockchain infrastructure',
		'Transparent and secure transactions',
		'Increased accessibility to charitable giving',
		'User-friendly interface',
		'Combining altruism and capitalization for a meaningful cause',
	];

	return (
		<section
			id='about'
			className='md:gird-cols-2 container mx-auto grid w-full grid-cols-1 gap-10 p-5 text-white md:grid-cols-2'
		>
			<div className='flex h-full w-full items-center justify-center'>
				<div className='max-h-96 w-full max-w-xl overflow-hidden rounded-[40px]'>
					<Image
						src='/assets/about.jpg'
						alt='Altruize'
						width={100}
						height={100}
						className='h-auto w-full -translate-y-1/4 object-cover'
						unoptimized={true}
					/>
				</div>
			</div>
			<div className='flex w-full flex-col gap-4'>
				<p className='font-cutmark text-lg text-tertiary md:text-2xl'>
					About Us
				</p>
				<h2 className='font-cutmark text-5xl md:text-7xl'>Altruize</h2>
				{descriptions.map((desc, index) => (
					<p
						key={index}
						className='text-sm text-gray-300 md:text-base'
					>
						{desc}
					</p>
				))}
				<ul className='flex flex-wrap gap-2'>
					{features.map((feature, index) => (
						<li
							key={index}
							className='text-cutmark cursor-pointer whitespace-nowrap rounded-full bg-slate-400 px-4 py-2 text-[8px] shadow-sm shadow-secondary transition-all duration-300 hover:scale-105 hover:shadow-md md:text-xs'
						>
							{feature}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default About;
