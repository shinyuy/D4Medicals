import '@/styles/globals.css';
import "react-day-picker/style.css";
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Provider from '@/redux/provider';
import { Footer } from '@/components/common';
import { Setup } from '@/components/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'D4 Medical Forms',
	description: 'D4 Medical Forms',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Provider>
					<Setup />
					<div className=''>
						{children}
					</div>
					<Footer />
				</Provider>
			</body>
		</html>
	);
}
