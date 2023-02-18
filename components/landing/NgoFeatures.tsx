import React from 'react';
import { GiReceiveMoney } from 'react-icons/gi';
import { MdManageSearch, MdSecurity } from 'react-icons/md';
import FeatureCard from '../reusable/FeatureCard';

const NgoFeatures = () => {
	const features = [
		{
			title: 'Sign up to receive donations',
			description:
				'NGOs can easily sign up to Altruize and start receiving donations from users who want to contribute to their cause. This allows NGOs to reach a wider audience and receive more support.',
			Icon: GiReceiveMoney,
		},
		{
			title: 'Easy and seamless donation management',
			description:
				'Altruize provides a user-friendly dashboard for NGOs to manage their donations easily and efficiently. They can view the details of each donation, track their impact, and communicate with donors.',
			Icon: MdManageSearch,
		},
		{
			title: 'Blockchain technology for security',
			description:
				'Altruize uses the latest blockchain technology to ensure that all transactions are secure and transparent. This means that all donations are tracked and recorded on a tamper-proof ledger, providing complete transparency to both NGOs and donors.',
			Icon: MdSecurity,
		},
	];

	return (
		<section
			id='features'
			className='container mx-auto mt-20 flex w-full grid-cols-1 flex-col items-center p-5 text-white'
		>
			<p className='text-center font-cutmark text-lg text-tertiary md:text-2xl'>
				NGO Features
			</p>
			<h2 className='text-center font-cutmark text-5xl md:text-7xl'>
				Create a Community
			</h2>
			<div className='mx-auto mt-8 grid w-full grid-cols-1 place-items-center gap-6 md:grid-cols-3'>
				{features.map((feature, index) => (
					<FeatureCard key={index} {...feature} />
				))}
			</div>
		</section>
	);
};

export default NgoFeatures;
