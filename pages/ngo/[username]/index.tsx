import Image from 'next/image';

export default function NgoMainPage() {
	return (
		<section className='bg-primary'>
			<section className='bg-primaryBg body-font text-gray-400'>
				<div className='container mx-auto flex flex-col px-5 py-24'>
					<div className='mx-auto lg:w-4/6'>
						<div className=' mx-auto mb-10 flex items-center justify-center'>
							<h1 className='title-font justify-center text-center font-cutmark text-5xl font-medium text-white  sm:text-5xl lg:mb-0 lg:w-1/3'>
								NGO Name
							</h1>
						</div>
						<div className='h-64 overflow-hidden rounded-lg'>
							<Image
								alt='content'
								className='h-full w-full object-cover object-center'
								src='https://dummyimage.com/1200x500/000/fff'
								width={100}
								height={100}
							/>
						</div>
						<div className='mt-10 flex flex-col sm:flex-row'>
							<div className='text-center sm:w-1/3 sm:py-8 sm:pr-8'>
								<div className='inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-800 text-gray-600'>
									<svg
										fill='none'
										stroke='currentColor'
										strokeLinecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										className='h-10 w-10'
										viewBox='0 0 24 24'
									>
										<path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
										<circle cx='12' cy='7' r='4'></circle>
									</svg>
								</div>
								<div className='flex flex-col items-center justify-center text-center'>
									<h2 className='title-font mt-4 text-lg font-medium text-white'>
										Zeus Anna
									</h2>
									<div className='mt-2 mb-4 h-1 w-12 rounded bg-blue-500'></div>
									<p className='text-base text-gray-400'>
										Lorem, ipsum dolor sit amet consectetur
										adipisicing elit. Provident sapiente
										facilis quae soluta mollitia tempora
										eius sequi hic earum illo quasi, tempore
										repudiandae saepe officia aspernatur,
										temporibus, quidem vitae aliquam.
									</p>
								</div>
								<button className='group relative inline-block text-lg'>
									<span className='relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white'>
										<span className='absolute inset-0 h-full w-full rounded-lg bg-gray-50 px-5 py-3'></span>
										<span className='ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-blue-500 transition-all duration-300 group-hover:-rotate-180'></span>
										<span className='relative'>Donate</span>
									</span>
									<span
										className='absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-blue-500 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0'
										data-rounded='rounded-lg'
									></span>
								</button>
							</div>
							<div className='mt-4 border-t border-gray-800 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left'>
								<p className='mb-4 text-lg leading-relaxed'>
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Aliquid architecto dolore,
									quaerat accusamus possimus excepturi
									molestias nemo quisquam ullam? Sequi minus
									commodi atque amet odit deleniti
									reprehenderit natus. Nesciunt totam
									architecto esse error explicabo, recusandae
									laudantium commodi, maxime quibusdam ducimus
									fuga voluptatem atque ratione ipsam
									blanditiis eligendi est numquam! Ipsa quasi
									alias distinctio nobis aperiam vel iusto
									aliquam reprehenderit quia sed quod maiores
									inventore soluta cum magni vitae dolores
									harum architecto voluptate consequuntur
									quibusdam in velit, quaerat porro. Illum nam
									earum obcaecati facilis hic, iure,
									voluptatem esse officia reprehenderit animi
									consequatur mollitia inventore veniam, est
									voluptas distinctio nemo necessitatibus
									doloremque! Dolorem, quam animi eaque vero
									dignissimos, nobis ea, quis exercitationem
									magni repellendus odit minima fugit vitae
									recusandae? Adipisci unde consequatur
									repellat quasi placeat sit accusantium ea ut
									asperiores at deserunt, quo ad rerum hic.
									Atque ad laudantium doloribus harum
									explicabo, minima quos earum excepturi
									aliquam, ab soluta. Ullam dolorum veritatis
									porro expedita excepturi sapiente vitae
									accusantium
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='bg-primaryBg body-font text-gray-400'>
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
			</section>
		</section>
	);
}
