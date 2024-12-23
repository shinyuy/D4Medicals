'use client';

import { usePathname } from 'next/navigation';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { useLogoutMutation } from '../../redux/features/authApiSlice';
import { logout as setLogout } from '../../redux/features/authSlice';
import { NavLink, NavButton, NavDropdown } from '../common';


export default function Navbar() {
	const pathname = usePathname();
	const dispatch = useAppDispatch();

	const [logout] = useLogoutMutation();

	const { isAuthenticated } = useAppSelector(state => state.auth);

	const handleLogout = () => {
		logout(undefined)
			.unwrap()
			.then(() => {
				dispatch(setLogout());
			});
	};

	const isSelected = (path: string) => (pathname === path ? true : false);

	const authLinks = (isMobile: boolean) => (
		<>
			<NavLink
				isSelected={isSelected('/dashboard')}
				isMobile={isMobile}
				href='/dashboard'
			>
				Dashboard
			</NavLink>
			<NavLink isMobile={isMobile} onClick={handleLogout}>
				Logout
			</NavLink>
		</>
	);

	const guestLinks = (isMobile: boolean) => (
		<>

			<NavDropdown
				isSelected={isSelected('/driver-medicals')}
				isMobile={isMobile}
				href='/locations'
				title="Locations"
				options={[
					{ link: `/driver-medicals?location=Liverpool`, title: "Liverpool Driver Medical" },
					{ link: `/driver-medicals?location=Manchester`, title: "Manchester Driver Medical" }
				]} children={''}
			/>
			<NavDropdown
				isSelected={isSelected('/driver-medicals')}
				isMobile={isMobile}
				href='/driver-medicals'
				title="Driver Medicals"
				options={[
					{ link: `/taxi-medical`, title: "Taxi Driver Medical" },
					{ link: `/hgv-medical`, title: "HGV Driver Medical" },
					{ link: `/same-day-medicals`, title: "Same Day Medicals" },
				]} children={''}
			/>
			<NavLink
				isSelected={isSelected('/contact-us')}
				isMobile={isMobile}
				href='/contact-us'
			>
				Contact Us
			</NavLink>
			<NavLink
				isSelected={isSelected('/about-us')}
				isMobile={isMobile}
				href='/about-us'
			>
				About Us
			</NavLink>
			<NavButton
				isSelected={isSelected('/driver-medicals')}
				isMobile={isMobile}
				href='/driver-medicals'
				px={3}
				py={2}
			>
				Book now
			</NavButton>
		</>
	);

	return (
		<Disclosure as='nav' className='bg-black'>

			{({ open }) => (
				<>
					<div className='h-12 bg-gray-300 flex items-center justify-center'>Driver medicals conducted by GMC registered doctors</div>
					<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
						<div className='relative flex h-16 items-center justify-between'>
							<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
								<Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>
										Open main menu
									</span>
									{open ? (
										<XMarkIcon
											className='block h-6 w-6'
											aria-hidden='true'
										/>
									) : (
										<Bars3Icon
											className='block h-6 w-6'
											aria-hidden='true'
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className='flex flex-1 items-center md:justify-between sm:items-stretch sm:justify-start'>
								<div className='flex flex-shrink-0 items-center'>
									<NavLink href='/' isBanner>
										<img
											className='mx-auto h-10 w-auto rounded'
											src='/logo.png'
											alt='D4 Medical Forms'
										/>
									</NavLink>
								</div>
								<div className='hidden sm:ml-6 sm:block'>
									<div className='flex space-x-4 h-full items-center'>
										{isAuthenticated
											? authLinks(false)
											: guestLinks(false)}
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className='sm:hidden'>
						<div className='space-y-1 px-2 pb-3 pt-2'>
							{isAuthenticated
								? authLinks(true)
								: guestLinks(true)}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
