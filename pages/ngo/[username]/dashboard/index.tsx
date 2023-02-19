import PublicLayout from '@/layouts/PublicLayout';
import { type } from 'os';
import React from 'react';
import { AiFillDollarCircle, AiOutlinePlus } from 'react-icons/ai';
import { IconType } from 'react-icons/lib';
import {
	GetServerSideProps,
	InferGetServerSidePropsType,
	NextPage,
} from 'next';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase.config';

export interface DashBoardTypes {
	title: string;
	amt: number;
	Icon: IconType;
}

const NgoDashboard: NextPage<
	InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ ngo }) => {
	const dashboardDetails: DashBoardTypes[] = [
		{
			title: 'Total Donations Received',
			amt: 55125,
			Icon: AiFillDollarCircle,
		},
		{
			title: 'Total Donators',
			amt: 100,
			Icon: AiOutlinePlus,
		},
	];

	const transactionDetails = [
		{
			walletAddress: '1Gx9FCknxSsLfFDzFdn75Xgqx95sDp38ir',
			userName: 'zeus',
			amtDonated: '0.12 ETH',
			date: '19-02-2023',
		},
		{
			walletAddress: '1Gx9FCknxSsLfFDzFdn75Xgqx95sDp38ir',
			userName: 'zeus',
			amtDonated: '0.12 ETH',
			date: '19-02-2023',
		},
		{
			walletAddress: '1Gx9FCknxSsLfFDzFdn75Xgqx95sDp38ir',
			userName: 'zeus',
			amtDonated: '0.12 ETH',
			date: '19-02-2023',
		},
		{
			walletAddress: '1Gx9FCknxSsLfFDzFdn75Xgqx95sDp38ir',
			userName: 'zeus',
			amtDonated: '0.12 ETH',
			date: '19-02-2023',
		},
		{
			walletAddress: '1Gx9FCknxSsLfFDzFdn75Xgqx95sDp38ir',
			userName: 'zeus',
			amtDonated: '0.12 ETH',
			date: '19-02-2023',
		},
	];
	return (
		<PublicLayout>
			<section className='container mx-auto min-h-screen bg-primary pt-[5%]'>
				<div className='border-b px-[2%] pb-[2%]'>
					<h1 className='text-left font-cutmark text-5xl font-bold uppercase text-white md:text-center md:text-7xl'>
						{ngo.name}
					</h1>
				</div>
				{/* dashboard section  */}
				<div className='mx-auto mt-10 grid max-w-[1200px] rounded-3xl border-2 border-black bg-steelGray px-8 pb-10'>
					<div className='flex w-full items-center justify-center'>
						<div className='grid w-full grid-cols-12 gap-6'>
							<div className='col-span-12 mx-auto mt-8 w-fit'>
								<div className='mx-auto mt-5 flex w-fit flex-col items-center gap-6 lg:flex-row'>
									{dashboardDetails.map((detail, index) => (
										<a
											key={index}
											className='intro-y min-w-[20rem] transform rounded-lg bg-blue-500 shadow-xl transition duration-300 hover:scale-105 sm:col-span-6 xl:col-span-3'
											href='#'
										>
											<div className='p-5'>
												<div className='flex justify-between'>
													<detail.Icon className='h-5 w-5' />
												</div>
												<div className='ml-2 w-full flex-1'>
													<div>
														<div className='mt-3 text-3xl font-bold leading-8'>
															{detail.amt}
														</div>
														<div className='mt-1 text-base text-gray-600'>
															{detail.title}
														</div>
													</div>
												</div>
											</div>
										</a>
									))}
								</div>
							</div>
							{/* table  */}
							<div className='col-span-12 flex w-full items-center justify-center overflow-x-scroll lg:overflow-auto'>
								<table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
									<thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
										<tr>
											<th
												scope='col'
												className='px-6 py-3'
											>
												Sender Name
											</th>
											<th
												scope='col'
												className='px-6 py-3'
											>
												Wallet Address
											</th>
											<th
												scope='col'
												className='px-6 py-3'
											>
												Date
											</th>
											<th
												scope='col'
												className='px-6 py-3'
											>
												Amount
											</th>
										</tr>
									</thead>
									<tbody>
										{transactionDetails.map(
											(tranc, index) => (
												<tr
													key={index}
													className='border-b bg-white dark:border-gray-700 dark:bg-gray-800'
												>
													<th
														scope='row'
														className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
													>
														{tranc.userName}
													</th>
													<td className='px-6 py-4'>
														{tranc.walletAddress}
													</td>
													<td className='px-6 py-4'>
														{tranc.date}
													</td>
													<td className='px-6 py-4 text-green-400'>
														{tranc.amtDonated}
													</td>
												</tr>
											)
										)}
									</tbody>
								</table>
							</div>
							{/* tills this div */}
						</div>
					</div>
				</div>
			</section>
		</PublicLayout>
	);
};

export default NgoDashboard;

export const getServerSideProps: GetServerSideProps<{ ngo: Ngo }> = async (
	context
) => {
	const { username } = context.query;
	const ngosRef = collection(db, 'ngos');
	const ngos = await getDocs(
		query(ngosRef, where('username', '==', username))
	);
	let ngo = {} as Ngo;

	if (ngos.empty) {
		return {
			redirect: {
				destination: '/ngo',
				permanent: true,
			},
		};
	}

	ngos.forEach((ngoDoc) => {
		const data = ngoDoc.data() as Ngo;
		if (data.username === username) {
			ngo = data;
		}
	});

	return {
		props: {
			ngo: JSON.parse(JSON.stringify(ngo)),
		},
	};
};
