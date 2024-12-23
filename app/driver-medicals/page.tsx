
import type { Metadata } from 'next';
import { Navbar, /*NavButton*/ } from '../../components/common';

import BookingForm from '../../components/forms/BookingForm';
export const metadata: Metadata = {
    title: 'D4 Medical Forms | Drivers Medicals ',
    description: 'D4 Medical Forms Drivers Medicals page',
};

export default function Page() {
    return (
        <main className='bg-white'>
            <Navbar />
            <div className='flex text-center md:text-right flex-col items-center py-12'>
                <h2 className='text-green-900 text-5xl font-bold'>D4 Medical Forms</h2>
                <p className='text-2xl'>Book your Driver Medical Same Day for £54.99</p>
                <p className='text-2xl'>(includes free eye test and free re-test)</p>
                <p>Same Day Appointments for Liverpool clinic below:</p>
            </div>

            <BookingForm />

        </main>
    );
}
