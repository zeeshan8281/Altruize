import React, { useState } from 'react';
import { IoAdd } from 'react-icons/io5';

const FAQ = () => {
	const faqs = [
		{
			question: 'How secure is my donation on Altruize?',
			answer: 'Altruize uses the latest blockchain technology to ensure secure and transparent transactions for all donations made on the platform.',
		},
		{
			question: 'Can I donate to any NGO on Altruize?',
			answer: 'Yes, Altruize allows you to access and donate to a wide range of NGOs and causes, making it easy to support the organizations that align with your values.',
		},
		{
			question: 'How do I know that my donation is making an impact?',
			answer: 'Altruize provides users with transparency and visibility into the impact of their donations. NGOs are required to provide regular updates on the projects and initiatives they are working on to ensure that donors can see the real-world change they are supporting.',
		},
		{
			question: 'Is my personal information safe on Altruize?',
			answer: 'Yes, Altruize takes user privacy very seriously and ensures that all personal information is kept safe and secure.',
		},
		{
			question: 'How can I sign up to receive donations on Altruize?',
			answer: 'NGOs can sign up to receive donations on Altruize by creating an account on the platform and completing the necessary verification and documentation requirements.',
		},
		{
			question:
				'How can I manage and track the donations received on Altruize?',
			answer: 'Altruize provides an easy and seamless donation management system that allows NGOs to track and manage donations received on the platform, ensuring transparency and accountability.',
		},
		{
			question:
				"How can I ensure the security of my organization's information on Altruize?",
			answer: 'Altruize takes security very seriously and ensures that all NGO information is kept safe and secure using the latest encryption and security protocols.',
		},
		{
			question:
				'How does Altruize ensure that my organization is eligible to receive donations on the platform?',
			answer: 'Altruize requires NGOs to complete a verification and documentation process to ensure that they meet the necessary criteria to receive donations on the platform.',
		},
	];

	const FAQCard: React.FC<(typeof faqs)[number]> = ({ question, answer }) => {
		const [open, setOpen] = useState(false);
		return (
			<div
				onClick={() => setOpen(!open)}
				className={`${
					open ? 'bg-white bg-opacity-20' : ''
				} z-20 h-auto w-full max-w-xl cursor-pointer overflow-hidden rounded-3xl`}
			>
				<p className='z-10 flex w-full items-center justify-between bg-tertiary px-4 py-2 font-cutmark text-lg font-semibold text-black'>
					<span>{question}</span>
					<IoAdd
						className={`${
							open ? 'rotate-45' : 'rotate-0'
						} font-bold transition-all duration-300`}
					/>
				</p>
				<p
					className={`${
						open
							? 'h-fit translate-y-0 py-2 opacity-100'
							: 'h-0 -translate-y-20 opacity-0'
					} z-0 px-4 text-white transition-all duration-300`}
				>
					{answer}
				</p>
			</div>
		);
	};

	return (
		<section className='md:gird-cols-2 container mx-auto mt-20 max-h-fit w-full p-5 text-white md:grid-cols-2'>
			<p className='text-center font-cutmark text-lg text-tertiary md:text-2xl'>
				FAQs
			</p>
			<h2 className='text-center font-cutmark text-5xl md:text-7xl'>
				Frequently Asked Questions
			</h2>
			<div className='mx-auto mt-8 flex w-fit flex-wrap justify-center gap-6'>
				{faqs.map((faq, index) => (
					<FAQCard {...faq} key={index} />
				))}
			</div>
		</section>
	);
};

export default FAQ;
