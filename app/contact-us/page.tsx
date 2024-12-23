import ContactForm from "@/components/forms/ContactForm";
import Navbar from "../../components/common/Navbar"
import Link from "next/link";

const Page = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen py-10">
                <div className="container mx-auto px-4 lg:px-8">
                    <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Contact Us</h1>
                    <div className="bg-white  rounded-lg p-6 lg:p-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mb-6">
                            <div>
                                <p>
                                    Call/Email us today for any questions you may have about your medical or booking. We are available Mon-Sun 9am - 6pm by:
                                </p><br />
                                <p>Telephone: <Link className="font-bold underline text-green-900" href={"tel:03333 403 456"}>03333 403 456</Link></p><br />
                                <p>Email: <Link className="font-bold underline text-green-900" href={"email:support@d4medicalforms.co.uk"}>support@d4medicalforms.co.uk</Link></p><br />
                                <p>Alternatively, you can simply fill out the form below and we will respond promptly.</p>
                                <ContactForm bg={"bg-white"} />
                            </div>
                            <img
                                src="/street.jpg"
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

                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
