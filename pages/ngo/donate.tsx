export default function Donate() {
	return (
	  <>
		<section className="text-gray-400 bg-primaryBg body-font">
		  <div className="container px-5 py-24 mx-auto flex flex-col">
			<div className="lg:w-4/6 mx-auto">
			  <div className=" justify-center mx-auto mb-10 items-center flex">
				<h1 className="sm:text-5xl text-5xl font-medium title-font text-white lg:w-1/3 lg:mb-0  justify-center text-center">
				  NGO Name
				</h1>
			  </div>
			  <div className="rounded-lg h-64 overflow-hidden">
				<img
				  alt="content"
				  className="object-cover object-center h-full w-full"
				  src="https://dummyimage.com/1200x500/000/fff"
				/>
			  </div>
			  <div className="flex flex-col sm:flex-row mt-10">
				<div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
				  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
					<svg
					  fill="none"
					  stroke="currentColor"
					  strokeLinecap="round"
					  stroke-linejoin="round"
					  stroke-width="2"
					  className="w-10 h-10"
					  viewBox="0 0 24 24"
					>
					  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
					  <circle cx="12" cy="7" r="4"></circle>
					</svg>
				  </div>
				  <div className="flex flex-col items-center text-center justify-center">
					<h2 className="font-medium title-font mt-4 text-white text-lg">
					  Zeus Anna
					</h2>
					<div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
					<p className="text-base text-gray-400">
					  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					  Provident sapiente facilis quae soluta mollitia tempora eius
					  sequi hic earum illo quasi, tempore repudiandae saepe
					  officia aspernatur, temporibus, quidem vitae aliquam.
					</p>
				  </div>
				  <button className="relative inline-block text-lg group">
					<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
					  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
					  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-500 group-hover:-rotate-180 ease"></span>
					  <span className="relative">Donate</span>
					</span>
					<span
					  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-blue-500 rounded-lg group-hover:mb-0 group-hover:mr-0"
					  data-rounded="rounded-lg"
					></span>
				  </button>
				</div>
				<div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
				  <p className="leading-relaxed text-lg mb-4">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Aliquid architecto dolore, quaerat accusamus possimus
					excepturi molestias nemo quisquam ullam? Sequi minus commodi
					atque amet odit deleniti reprehenderit natus. Nesciunt totam
					architecto esse error explicabo, recusandae laudantium
					commodi, maxime quibusdam ducimus fuga voluptatem atque
					ratione ipsam blanditiis eligendi est numquam! Ipsa quasi
					alias distinctio nobis aperiam vel iusto aliquam reprehenderit
					quia sed quod maiores inventore soluta cum magni vitae dolores
					harum architecto voluptate consequuntur quibusdam in velit,
					quaerat porro. Illum nam earum obcaecati facilis hic, iure,
					voluptatem esse officia reprehenderit animi consequatur
					mollitia inventore veniam, est voluptas distinctio nemo
					necessitatibus doloremque! Dolorem, quam animi eaque vero
					dignissimos, nobis ea, quis exercitationem magni repellendus
					odit minima fugit vitae recusandae? Adipisci unde consequatur
					repellat quasi placeat sit accusantium ea ut asperiores at
					deserunt, quo ad rerum hic. Atque ad laudantium doloribus
					harum explicabo, minima quos earum excepturi aliquam, ab
					soluta. Ullam dolorum veritatis porro expedita excepturi
					sapiente vitae accusantium
				  </p>
				</div>
			  </div>
			</div>
		  </div>
		</section>
		<section className="text-gray-400 bg-primaryBg body-font">
		  <div className="container px-5 py-20 mx-auto flex flex-wrap">
			<div className="flex w-full mb-20 flex-wrap">
			  <h1 className="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">
				Image Gallery.
			  </h1>
			</div>
			<div className="flex flex-wrap md:-m-2 -m-1">
			  <div className="flex flex-wrap w-1/2">
				<div className="md:p-2 p-1 w-1/2">
				  <img
					alt="gallery"
					className="w-full object-cover h-full object-center block"
					src="https://dummyimage.com/500x300/000/fff"
				  />
				</div>
				<div className="md:p-2 p-1 w-1/2">
				  <img
					alt="gallery"
					className="w-full object-cover h-full object-center block"
					src="https://dummyimage.com/501x301/000/fff"
				  />
				</div>
				<div className="md:p-2 p-1 w-full">
				  <img
					alt="gallery"
					className="w-full h-full object-cover object-center block"
					src="https://dummyimage.com/600x360/000/fff"
				  />
				</div>
			  </div>
			  <div className="flex flex-wrap w-1/2">
				<div className="md:p-2 p-1 w-full">
				  <img
					alt="gallery"
					className="w-full h-full object-cover object-center block"
					src="https://dummyimage.com/601x301/000/fff"
				  />
				</div>
				<div className="md:p-2 p-1 w-1/2">
				  <img
					alt="gallery"
					className="w-full object-cover h-full object-center block"
					src="https://dummyimage.com/502x302/000/fff"
				  />
				</div>
				<div className="md:p-2 p-1 w-1/2">
				  <img
					alt="gallery"
					className="w-full object-cover h-full object-center block"
					src="https://dummyimage.com/503x303/000/fff"
				  />
				</div>
			  </div>
			</div>
		  </div>
		</section>
	  </>
	);
  }
  