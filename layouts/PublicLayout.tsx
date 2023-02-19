import React, { PropsWithChildren } from 'react';
import { NextPage } from 'next';
import Navbar from '@/components/layouts/public/Navbar';
import Footer from '@/components/layouts/public/Footer';
import Headroom from 'react-headroom';

const PublicLayout: NextPage<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Headroom className='bg-primary'>
				<Navbar />
			</Headroom>
			<main className='w-full flex-1 bg-primary'>{children}</main>
			<Footer />
		</>
	);
};

export default PublicLayout;
