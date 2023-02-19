import PublicLayout from '@/layouts/PublicLayout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import {
// 	GetServerSideProps,
// 	InferGetServerSidePropsType,
// 	NextPage,
// } from 'next';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { db } from '@/firebase.config';

const NgoPage = () => {
	const ngoDetails = [
		{
			id: 1,
			ngoLogo:
				'https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg',
			ngoName: 'Famous Ngo',
			ngoEmail: 'ngo@email.com',
			ngoDonation: '$1,000',
			ngoDonatePageUrl: '',
		},
		{
			id: 2,
			ngoLogo:
				'https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg',
			ngoName: 'Famous Ngo',
			ngoEmail: 'ngo@email.com',
			ngoDonation: '$1,000',
			ngoDonatePageUrl: '',
		},
		{
			id: 3,
			ngoLogo:
				'https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg',
			ngoName: 'Famous Ngo',
			ngoEmail: 'ngo@email.com',
			ngoDonation: '$1,000',
			ngoDonatePageUrl: '',
		},
		{
			id: 4,
			ngoLogo:
				'https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg',
			ngoName: 'Famous Ngo',
			ngoEmail: 'ngo@email.com',
			ngoDonation: '$1,000',
			ngoDonatePageUrl: '',
		},
		{
			id: 5,
			ngoLogo:
				'https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg',
			ngoName: 'Famous Ngo',
			ngoEmail: 'ngo@email.com',
			ngoDonation: '$1,000',
			ngoDonatePageUrl: '',
		},
		{
			id: 6,
			ngoLogo:
				'https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg',
			ngoName: 'Famous Ngo',
			ngoEmail: 'ngo@email.com',
			ngoDonation: '$1,000',
			ngoDonatePageUrl: '',
		},
		{
			id: 7,
			ngoLogo:
				'https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg',
			ngoName: 'Famous Ngo',
			ngoEmail: 'ngo@email.com',
			ngoDonation: '$1,000',
		},
	];
	return (
		<PublicLayout>
			<Head>
				<title>NGOs | Altruize</title>
			</Head>
			<div className='container mx-auto min-h-screen bg-primary pt-[5%]'>
				<div className='w-full border-b px-[2%] pb-[2%]'>
					<h1 className='w-ful text-left font-cutmark text-5xl font-bold uppercase text-white md:text-center md:text-7xl'>
						NGO LeaderBoard
					</h1>
				</div>
				<section className='flex  flex-col justify-center  p-4 pt-10 text-gray-600 antialiased drop-shadow-[0_40px_70px_rgba(67,38,243,0.8)]'>
					<div className='h-full'>
						<div className='mx-auto w-full max-w-4xl  rounded-lg border border-black bg-steelGray shadow-xl'>
							<div className='p-3'>
								<div className='overflow-x-auto'>
									<table className='w-full table-auto '>
										<thead className='text-md bg-steelGray font-semibold uppercase text-white'>
											<tr>
												<th className='whitespace-nowrap p-2'>
													<div className='text-center font-semibold'>
														Name
													</div>
												</th>
												<th className='whitespace-nowrap p-2'>
													<div className='text-center font-semibold'>
														Email
													</div>
												</th>
												<th className='whitespace-nowrap p-2'>
													<div className='text-center font-semibold'>
														Donations Received{' '}
													</div>
												</th>
												<th className='whitespace-nowrap p-2'>
													<div className='text-center font-semibold'>
														Donate
													</div>
												</th>
											</tr>
										</thead>
										<tbody className='divide-y divide-gray-100 text-sm'>
											{ngoDetails.map((ngo) => (
												<tr key={ngo.id}>
													<td className='whitespace-nowrap p-2'>
														<div className='flex items-center'>
															<div className='mr-2 h-10 w-10 flex-shrink-0 sm:mr-3'>
																<Image
																	className='rounded-full'
																	src={
																		ngo.ngoLogo
																	}
																	width={40}
																	height={40}
																	alt={
																		ngo.ngoName
																	}
																/>
															</div>
															<div className='font-medium text-white'>
																{ngo.ngoName}
															</div>
														</div>
													</td>
													<td className='whitespace-nowrap p-2'>
														<div className='text-center text-white'>
															{ngo.ngoEmail}
														</div>
													</td>
													<td className='whitespace-nowrap p-2 text-center'>
														<div className=' text-center font-medium text-green-500'>
															{ngo.ngoDonation}
														</div>
													</td>
													<td className='items-center whitespace-nowrap p-2'>
														<button className='group relative inline-block text-lg'>
															<span className='relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white'>
																<span className='absolute inset-0 h-full w-full rounded-lg bg-gray-50 px-5 py-3'></span>
																<span className='ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-blue-500 transition-all duration-300 group-hover:-rotate-180'></span>
																<Link
																	href='/ngo/famous-ngo'
																	className='relative'
																>
																	Visit Page
																</Link>
															</span>
															<span
																className='absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-blue-500 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0'
																data-rounded='rounded-lg'
															></span>
														</button>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</PublicLayout>
	);
};

export default NgoPage;
