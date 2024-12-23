'use client';

import { useRetrieveUserQuery } from '../../redux/features/authApiSlice';
import { Spinner } from '../../components/common';
import Link from 'next/link';

export default function Page() {
	const { data: user, isLoading, isFetching } = useRetrieveUserQuery();

	if (isLoading || isFetching) {
		return (
			<div className='flex justify-center my-8'>
				<Spinner lg />
			</div>
		);
	}

	return (
		<>
			<header className='bg-white shadow'>
				<div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
					<h1 className='text-3xl font-bold tracking-tight text-gray-900'>
						Dashboard {user?.first_name}
					</h1>
				</div>
			</header>
			<main className='mx-auto max-w-7xl py-6 my-8 sm:px-6 lg:px-8'>
				{/* <List config={config} /> */}
				{/* <Link href={"/dashboard/calendar"}>Calendar</Link><br /> */}
				<Link href={"/dashboard/centers"}>Add D4 Medical Test Center</Link>
			</main>
		</>
	);
}
