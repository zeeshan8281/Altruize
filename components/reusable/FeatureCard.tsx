import React from 'react';
import { IconType } from 'react-icons/lib/esm/iconBase';

interface FeatureProps {
	title: string;
	description: string;
	Icon: IconType;
}

const FeatureCard: React.FC<FeatureProps> = ({ Icon, title, description }) => {
	return (
		<div className='group flex h-full w-full flex-col gap-4 rounded-3xl bg-gradient-to-br from-gray-700 to-primary p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-md hover:shadow-gray-800'>
			<div className='flex w-fit items-center justify-center rounded-full border-2 border-white border-opacity-40 bg-white bg-opacity-10 p-3 text-tertiary shadow-md shadow-black transition-all duration-300 group-hover:scale-[0.99] group-hover:shadow-inner'>
				<Icon className='text-7xl' />
			</div>
			<h3 className='font-cutmark text-lg font-medium md:text-2xl'>
				{title}
			</h3>
			<p className='text-sm text-gray-300 md:text-lg'>{description}</p>
		</div>
	);
};

export default FeatureCard;
