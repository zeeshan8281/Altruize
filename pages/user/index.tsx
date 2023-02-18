import Head from 'next/head';
import UserDetails from '@/components/user/UserDetails'
import PublicLayout from '@/layouts/PublicLayout';

const UserPage = () => {
	return (
		<>
			<Head>
				<title>Altruize | User Details</title>
				<meta name='viewport' content='width=device-width, initial-scale=1'/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<PublicLayout>
				<UserDetails/>
			</PublicLayout>
		</>
)};

export default UserPage;
