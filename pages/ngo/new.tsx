import PublicLayout from '@/layouts/PublicLayout';
import React from 'react';
import Head from 'next/head';

const NewNgoPage = () => {
	const handleNewNgo = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<PublicLayout>
			<Head>
				<title>Create NGO Profile | Altruize</title>
			</Head>
			<section className='min-h-screen w-full bg-primary'>
				<div className='mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0'>
					<div className='w-full rounded-lg  bg-steelGray shadow dark:border dark:border-gray-700 sm:max-w-md md:mt-0 xl:p-0'>
						<div className='space-y-4 p-6 sm:p-8 md:space-y-6'>
							<h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl'>
								Create a NGO
							</h1>
							<form
								className='space-y-4 drop-shadow-[0_40px_70px_rgba(67,38,243,0.8)] md:space-y-6'
								onSubmit={handleNewNgo}
							>
								<div>
									<label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
										Your NGO Name
									</label>
									<input
										type='text'
										name='ngoName'
										id='ngoName'
										className='focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm'
										placeholder='AgilePaws'
									/>
								</div>
								<div>
									<label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
										NGO email Address
									</label>
									<input
										type='email'
										name='email'
										id='email'
										className='focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm'
										placeholder='name@company.com'
									/>
								</div>
								<div>
									<label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
										Ngo Description
									</label>
									<input
										type='text'
										name='ngoDes'
										id='ngoDes'
										className='focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm'
										placeholder='It helps animals.'
									/>
								</div>
								<div>
									<label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
										Upload Registration Certificate
									</label>
									<input
										type='file'
										name='ngoFile'
										id='ngoFile'
										className='focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm'
										placeholder='Upload Files'
									/>
								</div>
								<div>
									<label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
										Upload NGO Images
									</label>
									<input
										type='file'
										name='ngoImgs'
										id='ngoImgs'
										className='focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm'
										placeholder='Upload Files'
									/>
								</div>
								<div className='flex flex-col items-center'>
									<button className='group relative inline-block text-lg'>
										<span className='relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white'>
											<span className='absolute inset-0 h-full w-full rounded-lg bg-gray-50 px-5 py-3'></span>
											<span className='ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-blue-500 transition-all duration-300 group-hover:-rotate-180'></span>
											<span className='relative'>
												Create NGO
											</span>
										</span>
										<span
											className='absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-blue-500 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0'
											data-rounded='rounded-lg'
										></span>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</PublicLayout>
	);
};

export default NewNgoPage;
