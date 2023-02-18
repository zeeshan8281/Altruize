import React from 'react';
import { GiPayMoney } from 'react-icons/gi';
import { CgArrangeFront } from 'react-icons/cg';
import { AiFillGift } from 'react-icons/ai';
import FeatureCard from '../reusable/FeatureCard';

const UserFeatures = () => {
	const features = [
		{
			title: 'Seamless and secure donation process',
			description:
				"Donating through Altruize is a breeze, thanks to the platform's user-friendly interface and advanced security features. With just a few clicks, you can make a donation to your chosen NGO without worrying about your personal information being compromised.",
			Icon: GiPayMoney,
		},
		{
			title: 'Access to a wide range of NGOs and causes',
			description:
				"Altruize offers a wide selection of NGOs and causes to choose from, allowing users to support the causes that resonate with them the most. Whether you're passionate about environmental conservation or social justice, you'll find an NGO that aligns with your values.",
			Icon: CgArrangeFront,
		},
		{
			title: 'Rewards and recognition for frequent donors',
			description:
				"At Altruize, we believe that every donation counts. That's why we offer rewards and recognition to users who donate frequently. By donating on a regular basis, you can earn badges, recognition, and other rewards, helping you make an even greater impact on the world.",
			Icon: AiFillGift,
		},
	];

	return (
		<section className='container mx-auto mt-20 flex w-full grid-cols-1 flex-col items-center p-5 text-white'>
			<p className='text-center font-cutmark text-lg text-tertiary md:text-2xl'>
				User Features
			</p>
			<h2 className='text-center font-cutmark text-5xl md:text-7xl'>
				Donate For a Cause
			</h2>
			<div className='mx-auto mt-8 grid w-full grid-cols-1 place-items-center gap-6 md:grid-cols-3'>
				{features.map((feature, index) => (
					<FeatureCard key={index} {...feature} />
				))}
			</div>
		</section>
	);
};

export default UserFeatures;
