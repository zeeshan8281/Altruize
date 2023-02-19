import PublicLayout from '@/layouts/PublicLayout';
import Image from 'next/image';
import {
	GetServerSideProps,
	InferGetServerSidePropsType,
	NextPage,
} from 'next';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase.config';
import Link from 'next/link';
import Head from 'next/head';

const NgoMainPage: NextPage<
	InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ ngo }) => {
	return (
		<PublicLayout>
			<Head>
				<title>
					{ngo?.name} - {ngo?.description} | Altruize
				</title>
			</Head>
			<section className='bg-primary'>
				<section className='bg-primaryBg body-font text-gray-400'>
					<div className='container mx-auto flex flex-col px-5 py-24'>
						<div className='mx-auto lg:w-4/6'>
							<div className=' mx-auto mb-10 flex items-center justify-center'>
								<h1 className='title-font justify-center text-center font-cutmark text-5xl font-medium text-white sm:text-5xl lg:mb-0 lg:w-1/3'>
									{ngo?.name ?? 'NGO Page'}
								</h1>
							</div>
							<div className='h-64 overflow-hidden rounded-lg'>
								<Image
									alt='content'
									className='h-full w-full object-cover object-center'
									src='https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
									width={100}
									height={100}
									unoptimized={true}
								/>
							</div>
							<div className='mt-10 flex flex-col sm:flex-row'>
								<div className='text-center sm:w-1/3 sm:py-8 sm:pr-8'>
									<div className='mx-auto h-20 w-20 overflow-hidden rounded-full bg-gray-800 text-gray-600'>
										<Image
											src={ngo.photo}
											width={100}
											height={100}
											alt={ngo.name}
											className='h-auto w-full object-contain'
										/>
									</div>
									<div className='flex flex-col items-center justify-center'>
										<h2 className='title-font mt-4 text-center text-lg font-medium text-white'>
											{ngo?.name ?? 'NGO Page'}
										</h2>
										<div className='mt-2 mb-4 h-1 w-12 rounded bg-blue-500'></div>
										<p className='text-base capitalize text-gray-400'>
											<span className='font-bold'>
												Category:
											</span>{' '}
											{ngo.category}
										</p>
										<p className='text-base text-gray-400'>
											<span className='font-bold'>
												Certificate:
											</span>{' '}
											<Link
												href={ngo.certificate}
												target='_blank'
												className='block w-full max-w-[20ch] overflow-hidden text-ellipsis whitespace-nowrap'
											>
												{ngo.certificate}
											</Link>
										</p>
									</div>
									<input
										type='number'
										className='mt-4 block w-full rounded-md px-4 py-2 font-cutmark'
										placeholder='Enter your amount'
									/>
									<button className='group relative mt-4 inline-block font-cutmark text-lg'>
										<span className='relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white'>
											<span className='absolute inset-0 h-full w-full rounded-lg bg-gray-50 px-5 py-3'></span>
											<span className='ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-blue-500 transition-all duration-300 group-hover:-rotate-180'></span>
											<span className='relative'>
												Donate
											</span>
										</span>
										<span
											className='absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-blue-500 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0'
											data-rounded='rounded-lg'
										></span>
									</button>
								</div>
								<div className='mt-4 border-t border-gray-800 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left'>
									<p className='mb-4 text-lg leading-relaxed'>
										{ngo?.description ?? ''}
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <section className='bg-primaryBg body-font text-gray-400'>
					<div className='container mx-auto flex flex-wrap px-5 py-20'>
						<div className='mb-20 flex w-full flex-wrap'>
							<h1 className='title-font mb-4 text-2xl font-medium text-white sm:text-3xl lg:mb-0 lg:w-1/3'>
								Image Gallery.
							</h1>
						</div>
						<div className='-m-1 flex flex-wrap md:-m-2'>
							<div className='flex w-1/2 flex-wrap'>
								<div className='w-1/2 p-1 md:p-2'>
									<Image
										alt='gallery'
										className='block h-full w-full object-cover object-center'
										src='https://dummyimage.com/500x300/000/fff'
										width={100}
										height={100}
									/>
								</div>
								<div className='w-1/2 p-1 md:p-2'>
									<Image
										alt='gallery'
										className='block h-full w-full object-cover object-center'
										src='https://dummyimage.com/501x301/000/fff'
										width={100}
										height={100}
									/>
								</div>
								<div className='w-full p-1 md:p-2'>
									<Image
										alt='gallery'
										className='block h-full w-full object-cover object-center'
										src='https://dummyimage.com/600x360/000/fff'
										width={100}
										height={100}
									/>
								</div>
							</div>
							<div className='flex w-1/2 flex-wrap'>
								<div className='w-full p-1 md:p-2'>
									<Image
										alt='gallery'
										className='block h-full w-full object-cover object-center'
										src='https://dummyimage.com/601x301/000/fff'
										width={100}
										height={100}
									/>
								</div>
								<div className='w-1/2 p-1 md:p-2'>
									<Image
										alt='gallery'
										className='block h-full w-full object-cover object-center'
										src='https://dummyimage.com/502x302/000/fff'
										width={100}
										height={100}
									/>
								</div>
								<div className='w-1/2 p-1 md:p-2'>
									<Image
										alt='gallery'
										className='block h-full w-full object-cover object-center'
										src='https://dummyimage.com/503x303/000/fff'
										width={100}
										height={100}
									/>
								</div>
							</div>
						</div>
					</div>
				</section> */}
			</section>
		</PublicLayout>
	);
};

export default NgoMainPage;

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
