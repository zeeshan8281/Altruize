import { useState, useEffect } from 'react';
import Image from 'next/image';
// RainbowKit
// import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useBalance } from 'wagmi';
// DiceBear
import { createAvatar } from '@dicebear/core';
import { thumbs } from '@dicebear/collection';
// Firebase
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase.config';
// Hydration Error Hook
import useIsMounted from '@/hooks/useIsMounted';
import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import { updateUserDetails } from '@/store/features/user';
import Link from 'next/link';

export default function UserDetails() {
	const mounted = useIsMounted();
	const dispatch = useAppDispatch();
	const { user } = useAppSelector((state) => state.user);

	// Random Avatar
	const [dataUri, setDataUri] = useState('');
	useEffect(() => {
		const date = new Date();
		const avatar = createAvatar(thumbs, {
			seed: `${date.getTime()}`,
		});
		const uri = avatar.toDataUriSync();
		setDataUri(uri);
	}, []);

	// Wallet Address and Balance States
	const { address } = useAccount();
	const { data } = useBalance({
		address: address,
	});

	// Fetch User Details
	useEffect(() => {
		const fetchData = async () => {
			const walletaddress = address!.toString();
			const docRef = doc(db, 'users', walletaddress);
			const docSnap = await getDoc(docRef);
			const data = docSnap.data();
			dispatch(
				updateUserDetails({ email: data?.email, name: data?.name })
			);
		};
		fetchData();
	}, [address, dispatch]);

	console.log(user);

	// Name and Email Sates
	const [nameEdit, setNameEdit] = useState(false);
	const [emailEdit, setEmailEdit] = useState(false);

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateUserDetails({ name: e.target.value }));
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateUserDetails({ email: e.target.value }));
	};

	const handleNameEdit = () => {
		setNameEdit(!nameEdit);
	};

	const handleNameSave = async () => {
		setNameEdit(false);
		const walletaddress = address!.toString();
		await updateDoc(doc(db, 'users', walletaddress), {
			name: user?.name,
		});
	};

	const handleEmailEdit = () => {
		setEmailEdit(!emailEdit);
	};

	const handleEmailSave = async () => {
		setEmailEdit(false);
		const walletaddress = address!.toString();
		await updateDoc(doc(db, 'users', walletaddress), {
			email: user?.email,
		});
	};

	return (
		<div className='mx-auto min-h-screen max-w-[1200px] pt-[5%]'>
			<div className='flex flex-col items-center justify-between border-b px-[2%] pb-[2%] md:flex-row'>
				<h1 className='font-cutmark text-5xl font-bold uppercase text-white md:text-7xl'>
					User Details
				</h1>
			</div>
			<section className='flex flex-col items-center justify-center pt-[3%] md:justify-between lg:flex-row'>
				<div className='pl-[2%] lg:w-[60%]'>
					<p className='my-[2%] flex w-full'>
						<label className='mr-[2%] font-nunitoSans text-base font-semibold text-gray-300 md:text-xl'>
							Your Name:
						</label>
						<input
							className='w-[40%] rounded-lg px-[2%]'
							placeholder={
								address ? user?.name : 'Enter your name.'
							}
							value={user?.name}
							onChange={address ? handleNameChange : undefined}
							disabled={!nameEdit}
						/>
						<button
							className='ml-[2%] w-min rounded-lg bg-secondary p-1'
							onClick={handleNameEdit}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								className='h-6 w-6'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
								/>
							</svg>
						</button>
						{address && nameEdit ? (
							<button
								className='ml-[2%] w-min rounded-lg bg-green-400 p-1'
								onClick={handleNameSave}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									className='h-6 w-6'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M4.5 12.75l6 6 9-13.5'
									/>
								</svg>
							</button>
						) : null}
					</p>
					<p className='my-[2%] flex'>
						<label className='mr-[2.5%] font-nunitoSans text-base font-semibold text-gray-300 md:text-xl'>
							Your Email:
						</label>

						<input
							className='w-[40%] rounded-lg px-[2%]'
							placeholder={
								address
									? user?.email
									: 'Enter your email address.'
							}
							value={user?.email}
							disabled={!emailEdit}
							onChange={address ? handleEmailChange : undefined}
						/>

						<button
							className='ml-[2%] w-min rounded-lg bg-secondary p-1'
							onClick={handleEmailEdit}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								className='h-6 w-6'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
								/>
							</svg>
						</button>
						{address && emailEdit ? (
							<button
								className='ml-[2%] w-min rounded-lg bg-green-400 p-1'
								onClick={handleEmailSave}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									className='h-6 w-6'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M4.5 12.75l6 6 9-13.5'
									/>
								</svg>
							</button>
						) : null}
					</p>
					{address && mounted ? (
						<>
							<p className='my-[2%] flex items-center text-white'>
								<p className='mr-[2%] font-nunitoSans text-base font-semibold text-gray-300 md:text-xl'>
									Wallet Address:
								</p>
								<p
									title={address}
									className='max-w-[10ch] overflow-hidden text-ellipsis whitespace-nowrap rounded-lg bg-white px-2 py-1 font-nunitoSans text-base text-[#5C5B63] md:text-xl'
								>
									{address}
								</p>
							</p>
							<p className='my-[2%] flex items-center text-white'>
								<p className='mr-[2.5%] font-nunitoSans text-base font-semibold text-gray-300 md:text-xl'>
									Wallet Balance:
								</p>
								<p className='rounded-lg bg-white px-2 py-1 font-nunitoSans text-base text-[#5C5B63] md:text-xl'>{`${data?.formatted} ${data?.symbol}`}</p>
							</p>
						</>
					) : null}
					<Link
						href='/ngo/famous-ngo/dashboard'
						className='group relative mt-4 inline-block font-cutmark text-lg'
					>
						<span className='relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white'>
							<span className='absolute inset-0 h-full w-full rounded-lg bg-gray-50 px-5 py-3'></span>
							<span className='ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-blue-500 transition-all duration-300 group-hover:-rotate-180'></span>
							<span className='relative'>Ngo Dashboard</span>
						</span>
						<span
							className='absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-blue-500 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0'
							data-rounded='rounded-lg'
						></span>
					</Link>
				</div>
				<div className='mr-[2%] mt-8 flex justify-center lg:w-[30%] 2xl:w-[40%]'>
					<div className='h-full w-full max-w-xs overflow-hidden rounded-full drop-shadow-[0_40px_70px_rgba(67,38,243,0.8)]'>
						<Image
							className='h-auto w-full object-contain'
							src={dataUri}
							alt='Avatar'
							width={400}
							height={400}
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
