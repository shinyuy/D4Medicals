import Navbar from "../../components/common/Navbar"
import Link from "next/link";

const Page = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen py-10">
                <div className="container mx-auto px-4 lg:px-8">
                    <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">About Us</h1>
                    <div className="bg-white  rounded-lg p-6 lg:p-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mb-6">
                            <div>
                                <p>
                                    At <b>D4 Medical Forms</b>, we specialize in helping <b>HGV, lorry, and taxi drivers</b> across the UK complete their required medical forms with ease. Our team of <b>GMC-registered doctors</b> ensures that drivers receive fast, professional, and affordable medical assessments in compliance with <b>DVLA Group 2 medical standards</b>.
                                </p>
                                <p>
                                    Check our <Link href="https://uk.trustpilot.com/review/d4medicalforms.co.uk" className="text-green-900 font-bold underline">Trustpilot Reviews</Link> which reflect the work we do.
                                </p>
                                <p>
                                    We offer <b>free retest</b> if DVLA fail your medical for any reason to do with your health as long as you see a medical professional to have those issues resolved.
                                </p>
                                <p>
                                    We understand the importance of a convenient and hassle-free service, which is why we offer <b>quick and easy abpointments</b> with <b>plenty of availability</b>, allowing drivers to fit their medicals around their busy schedules. Our low prices provide a cost-effective alternative to visiting a local GP, without compromising on quality.
                                </p>
                                <p>
                                    With <b>experienced doctors</b> and a commitment to exceptional service, <b>D4 Medical Forms</b> is your go-to solution for stress-free driver medicals.
                                </p>
                                <p>We have leading clinics in Manchester and Liverpool.</p>
                            </div>
                            <img
                                src="/office.jpg"
                                alt="D4 Medical Services"
                                className="w-full h-[80vh] object-cover rounded-md"
                            />
                        </div>
                        <div className="w-full h-56 flex justify-center items-center">
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
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
                        <ul className="list-disc list-inside text-gray-700 text-lg mb-6">
                            <li>Experienced and certified medical professionals</li>
                            <li>Flexible appointment scheduling to fit your needs</li>
                            <li>Fast results with full compliance to DVLA standards</li>
                            <li>Affordable pricing without hidden costs</li>
                            <li>A welcoming and supportive environment</li>
                        </ul>
                        <img
                            src="/office.jpg"
                            alt="Our Medical Team"
                            className="w-full h-64 object-cover rounded-md mb-6"
                        />
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            Our mission is to support UK drivers by ensuring they meet all required medical standards for safe and legal driving. We aim to provide a seamless experience that helps drivers stay on the road with confidence.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
