import Link from 'next/link';
import { RegisterForm } from '../../../components/forms';
import { SocialButtons } from '../../../components/common';
import type { Metadata } from 'next';
import { Navbar } from '../../../components/common';

export const metadata: Metadata = {
	title: 'D4 Medical Forms | Register',
	description: 'D4 Medical Forms register page',
};

export default function Page() {
	return (
		<>
			<Navbar />
			<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					<img
						className='mx-auto h-10 w-auto rounded'
						src='/logo.png'
						alt='D4 Medical Forms'
					/>
					<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
						Sign up for your account
					</h2>
				</div>

				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<RegisterForm />
					<SocialButtons />

					<p className='mt-10 text-center text-sm text-gray-500'>
						Already have an account?{' '}
						<Link
							href='/auth/login'
							className='font-semibold leading-6 text-green-900 hover:text-green-800'
						>
							Login here
						</Link>
					</p>
				</div>
			</div>
		</>
	);
}
