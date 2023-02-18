import Image from 'next/image';
import React from 'react';
import LandingImage from '@/public/assets/landing-img.png';

const Intro = () => {
	return (
		<section className='container mx-auto grid min-h-[95vh] w-full grid-cols-1 gap-10 p-5 text-white md:grid-cols-2'>
			<div className='flex w-full flex-col justify-center gap-4'>
				<h1 className='font-cutmark text-5xl font-bold uppercase md:text-7xl'>
					Join the future of giving
				</h1>
				<h2 className='font-nunitoSans text-base font-semibold text-gray-300 md:text-xl'>
					Join the movement of giving back with our web3-based
					donation platform for NGOs and easy signup process for
					accepting donations.
				</h2>
				<div className='mt-4 flex items-center gap-8 text-sm font-semibold md:text-base'>
					<button className='btn whitespace-nowrap !border-secondary bg-secondary hover:!border-white hover:!bg-white hover:text-primary'>
						Get Started
					</button>
					<button className='btn whitespace-nowrap'>
						Learn More
					</button>
				</div>
			</div>
			<div className='flex w-full items-center justify-center'>
				<div className='w-full max-w-[300px] animate-float overflow-hidden drop-shadow-[0_40px_70px_rgba(67,38,243,0.8)] md:max-w-xl'>
					<Image
						src={LandingImage.src}
						alt='Care for them'
						width={100}
						height={100}
						className='h-auto w-full object-contain'
						quality={100}
						priority
						unoptimized={true}
					/>
				</div>
			</div>
		</section>
	);
};

export default Intro;
