import Link from 'next/link';
import type { Metadata } from 'next';
import { Navbar } from '../components/common';
import Image from 'next/image';
import ContactForm from '../components/forms/ContactForm';


export const metadata: Metadata = {
	title: 'D4 Medical Forms | Home',
	description: 'D4 Medical Forms home page',
};

export default function Page() {
	return (
		<main className='bg-white'>
			<div style={{
				backgroundImage: `url(/lab.jpg)`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				width: '100%',
				height: '600px',
			}} className=''>
				<Navbar />
				<div className='h-full flex flex-col items-center justify-center'>
					<Link href={"https://uk.trustpilot.com/review/d4medicalforms.co.uk"}>
						<Image
							src="/trustpilot2.png"
							width={200}
							height={200}
							alt="Picture of the author"
						/>
					</Link>

					<h1 className='text-white text-3xl font-bold'>
						HGV / Taxi medicals with D4 Medical Forms
					</h1>
					<p className='text-white font-bold'>
						Click the link below to book your driver medical today:
					</p>
					<Link href='/driver-medicals' >
						<button
							// isSelected={isSelected('/driver-medicals')}
							// isMobile={isMobile}
							className='py-4 px-10 mt-4 bg-green-900 rounded-full text-white font-bold'
						>
							Book now
						</button>
					</Link>

				</div>
			</div>

			<section id="our-services" className="py-16 bg-gray-50 text-center">
				<div className="max-w-5xl mx-auto px-6">
					<h2 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h2>
					<p className="text-gray-600 text-lg mb-12">
						We specialize in providing fast and reliable D4 Medical Test bookings for drivers across the UK. Choose the service that fits your needs and get started today.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-start cursor-pointer">
							<div className="flex flex-col items-center md:flex-row">
								<img
									src="/taxi.jpg"
									alt="Taxi/Private Hire Medicals"
									className="w-full h-24 object-cover rounded-lg md:mr-6 md:w-24"
								/>
								<div className="text-left">
									<h3 className="text-xl font-semibold text-gray-800 mb-2">Taxi/Private Hire Medicals</h3>
									<p className="text-gray-600 mb-2">
										Tailored medical tests for taxi and private hire drivers, ensuring compliance with DVLA requirements.
									</p>
									<p className="text-green-500 font-bold">Quick 15-minute appointments</p>
								</div>
							</div>
							<div className="mt-4 text-right w-full">
								<p className="text-gray-500 line-through">£49.99</p>
								<p className="text-xl font-bold text-gray-800">£40.00</p>
							</div>
						</div>
						<div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-start cursor-pointer">
							<div className="flex flex-col items-center md:flex-row">
								<img
									src="/truck.jpg"
									alt="HGV/Lorry/Bus Driver Medicals"
									className="w-full h-24 object-cover rounded-lg md:mr-6 md:w-24"
								/>
								<div className="text-left">
									<h3 className="text-xl font-semibold text-gray-800 mb-2">HGV/Lorry/Bus Driver Medicals</h3>
									<p className="text-gray-600 mb-2">
										Comprehensive D4 Medicals for heavy goods vehicle, bus, and coach drivers. Stay on the road with confidence.
									</p>
									<p className="text-green-500 font-bold">Quick 15-minute appointments</p>
								</div>
							</div>
							<div className="mt-4 text-right w-full">
								<p className="text-gray-500 line-through">£49.99</p>
								<p className="text-xl font-bold text-gray-800">£40.00</p>
							</div>
						</div>
						<div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-start cursor-pointer">
							<div className="flex flex-col items-center md:flex-row">
								<img
									src="/ambulance.jpg"
									alt="C1/Ambulance Driver Medicals"
									className="w-full h-24 object-cover rounded-lg md:mr-6 md:w-24"
								/>
								<div className="text-left">
									<h3 className="text-xl font-semibold text-gray-800 mb-2">C1/Ambulance Driver Medicals</h3>
									<p className="text-gray-600 mb-2">
										Specialized medicals for C1 and ambulance drivers, ensuring fitness to operate emergency vehicles safely.
									</p>
									<p className="text-green-500 font-bold">Quick 15-minute appointments</p>
								</div>
							</div>
							<div className="mt-4 text-right w-full">
								<p className="text-gray-500 line-through">£49.99</p>
								<p className="text-xl font-bold text-gray-800">£40.00</p>
							</div>
						</div>
						<div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-start cursor-pointer">
							<div className="flex flex-col items-center md:flex-row">
								<img
									src="motorhome.jpg"
									alt="Motorhome Driver Medicals"
									className="w-full h-24 object-cover rounded-lg md:mr-6 md:w-24"
								/>
								<div className="text-left">
									<h3 className="text-xl font-semibold text-gray-800 mb-2">Motorhome Driver Medicals</h3>
									<p className="text-gray-600 mb-2">
										Book medical assessments for motorhome drivers requiring a D4 Medical Test to ensure safe travels.
									</p>
									<p className="text-green-500 font-bold">Quick 15-minute appointments</p>
								</div>
							</div>
							<div className="mt-4 text-right w-full">
								<p className="text-gray-500 line-through">£49.99</p>
								<p className="text-xl font-bold text-gray-800">£40.00</p>
							</div>
						</div>
					</div>
				</div>
			</section>


			<section className="bg-green-900 py-8 ">
				<div className="w-full flex flex-col items-center">
					<h2 className="text-white text-2xl font-bold text-center mb-6">Included for Free</h2>
					<div className="flex flex-col items-center md:flex-row sm:flex-wrap justify-center">

						<div className="flex w-full mb-12 md:mb-0 md:w-1/3 px-1 flex-col items-center rounded-lg  text-white shadow-lg">
							<span className="text-lg font-medium">Blood Pressure Test</span>
							<img src="/bp.jpg" alt="Blood Pressure Icon" className="w-full h-full rounded" />

						</div>

						<div className="flex w-full mb-12 md:mb-0  md:w-1/3 px-1 flex-col items-center rounded-lg text-white shadow-lg">
							<span className="text-lg font-medium">Free Eye Test</span>
							<img src="/eye.jpg" alt="Eye Test Icon" className="w-full h-full rounded" />

						</div>

						<div className="flex w-full mb-12 md:mb-0  md:w-1/3 px-1 flex-col items-center rounded-lg text-white shadow-lg">
							<span className="text-lg font-medium">Experienced Medical Doctor</span>
							<img src="result.jpg" alt="Doctor Icon" className="w-full h-full rounded" />
						</div>

					</div>
					<Link href='/driver-medicals' >
						<button
							// isSelected={isSelected('/driver-medicals')}
							// isMobile={isMobile}
							className='py-4 px-10 mt-12 bg-white rounded-full text-green-900 font-bold'
						>
							Book now
						</button>
					</Link>
				</div>
			</section>

			<section className='flex flex-col items-center md:flex-row mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 md:h-[80vh] my-12'>

				<img src="bp2.jpg" alt="Doctor Icon" className="w-full md:w-1/2 h-full rounded" />

				<div className='w-full md:w-1/2 px-4'>
					<h3 className='text-3xl py-4'>Who needs a Driver medical assessment</h3>
					<p className='text-2xl font-bold'>Taxi Medicals </p>
					<ul className='list-disc list-inside pb-4'>
						<li>First applying for a taxi or private hire licence.</li>
						<li>Periodically, especially as drivers age (e.g., every 3-5 years or annually after age 65)</li>
					</ul>
					<p className='text-2xl font-bold'>Professional Drivers (HGV/PCV)</p>
					<ul className='list-disc list-inside'>
						<li>First applying for a HGV/PCV/Bus licence</li>
						<li>Medicals required from age 45 and every 5 years, annually after 65.</li>
					</ul>
					<p className='pb-4'>At D4 Medical Forms, we understand the urgency and the need for efficiency in preparing for your driver medical appointments. Our service streamlines the process, allowing you to complete your assessments quickly and conveniently. </p>

					<h3 className='text-2xl font-bold'>Why choose D4 Medical Forms</h3>
					<p>By choosing D4 Medical Forms, you will benefit from</p>
					<ul className='list-disc list-inside'>
						<li><b>Expert Guidance:</b> Our professionals provide comprehensive support throughout the medical form completion process, ensuring that all necessary information is accurately captured.</li>
						<li><b>Time Efficiency: </b>We prioritise prompt service, aimed at minimizing your downtime and facilitating a swift appointment.</li>
						<li><b>Flexibility:</b> We offer various appointment options, allowing you to choose what works best for your busy schedule.</li>
					</ul>
				</div>
			</section>

			<ContactForm />




		</main>
	);
}
