import React, { PropsWithChildren } from 'react';
import { NextPage } from 'next';
import Navbar from '@/components/layouts/public/Navbar';
import Footer from '@/components/layouts/public/Footer';

const PublicLayout: NextPage<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className='w-full bg-primary'>{children}</main>
			<Footer />
		</>
	);
};

export default PublicLayout;
