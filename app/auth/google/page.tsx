'use client';

import { useSocialAuthenticateMutation } from '../../../redux/features/authApiSlice';
import { useSocialAuth } from '../../../hooks';
import { Spinner } from '../../../components/common';

export default function Page() {
	const [googleAuthenticate] = useSocialAuthenticateMutation();
	useSocialAuth(googleAuthenticate, 'google-oauth2');

	return (
		<div className='flex justify-center my-8 flex justify-center items-center w-full min-w-[100vw] h-full min-h-[80vh]'>
			<Spinner lg />
		</div>
	);
}
