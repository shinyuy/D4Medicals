import Link from "next/link";
import Facebook from "../utils/Facebook";
import Instagram from "../utils/Instagram"
import Image from "next/image";

export default function Footer() {
	return (
		<footer className='bg-gray-100 h-auto bg-green-900'>
			<div className='h-full px-2 text-white'>
				<div className="flex justify-between mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div className="flex">
						<Image
							src="/logo.png"
							width={200}
							height={200}
							alt="Picture of the author"
						/>
						<span className="text-6xl">Medical Forms</span>
					</div>
					<div className="flex">
						<Image
							src="/ico-registered-logo.jpg"
							width={200}
							height={200}
							alt="Picture of the author"
						/>
						<Link href={"https://uk.trustpilot.com/review/d4medicalforms.co.uk"}>
							<Image
								src="/trustpilot2.png"
								width={200}
								height={200}
								alt="Picture of the author"
							/>
						</Link></div>

				</div>
				<div className="flex flex-col md:flex-row w-full justify-between items-center px-12 py-12 md:h-[400px] mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div>
						<p>Head Office:</p><br />
						<p>Suite 30, 3A Bridgewater Street</p><br />
						<p>Liverpool</p><br />
						<p> L1 0AR</p><br />
					</div>
					<div>
						<p>Contact us:</p><br />
						<Link className="underline" href="mailto:support@d4medicalforms.co.uk">support@d4medicalforms.co.uk</Link><br /><br />
						<Link className="underline" href="tel:03333 403456">03333 403456</Link><br /><br />
					</div>
					<div>
						<p>Follow us:</p><br />
						<span className="flex">
							<Link href="https://www.facebook.com/d4medicalforms"><Facebook /></Link>&nbsp;&nbsp;
							<Link href="https://www.instagram.com/d4medicalforms/"><Instagram /></Link>
						</span><br />
						<Link className="underline" href="/terms-of-service">Terms and Conditions</Link><br /><br />
						<Link className="underline" href="/privacy-policy">Privacy Policy</Link><br /><br />
					</div>
				</div>
				<div className='flex items-center justify-center h-full'>
					<p className='text-gray-400 text-xs'>
						&copy; 2024 D4 Medical Forms. All rights reserved.
					</p><br />
				</div>
			</div>
		</footer>
	);
}
