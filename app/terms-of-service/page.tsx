// pages/terms-of-service.js

import Head from 'next/head';
import { Navbar } from '../../components/common';

export default function TermsOfService() {
    return (
        <>
            <Head>
                <title>Terms of Service</title>
            </Head>
            <Navbar />
            <main className="container mx-auto p-6 max-w-4xl py-12 mx-auto p-6 rounded-lg  md:min-h-[80vh]">
                <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>

                <p>Last updated: [Insert Date]</p>

                <p>
                    <b>THIS AGREEMENT</b> is made between <b>D4 Medical Forms LTD</b>, with its registered address at 17 Cotton Fields, Manchester, Greater Manchester, United Kingdom, M28 3UA (hereinafter referred to as "the Company"), and the individual scheduling a medical appointment (hereinafter referred to as "the Client").
                </p>
                <br />
                <p>
                    By booking a medical consultation with the Company, the Client agrees to the following terms and conditions:
                </p>

                <h2 className="text-2xl font-semibold mt-6">1. Scope of the Consultation</h2><br />
                <p>
                    1.1 The Company provides medical consultations for the purpose of completing driver medical assessments required by the Driver and Vehicle Licensing Agency (DVLA) or local authorities for lorry, bus, and taxi drivers.
                </p><br />
                <p>
                    1.2 The consultation includes a medical assessment as required by DVLA Group 2 standards or local regulations for taxi drivers. The assessment may include, but is not limited to:
                </p>
                <ul className="list-disc list-inside pl-8">
                    <li>Blood pressure check</li>
                    <li>Vision assessment</li>
                    <li>Medical history review</li>
                    <li>Any other examinations necessary to assess the Client’s fitness to drive in accordance with DVLA or local authority guidelines.</li>
                </ul>
                <br />
                <p>
                    1.3 The medical certificate issued at the end of the consultation is based on the results of the medical assessment and the Company does not guarantee that every Client will pass the medical examination.
                </p>

                <h2 className="text-2xl font-semibold mt-6">2. Payment Terms</h2><br />
                <p>
                    2.1 The Client agrees to make full payment online at the time of scheduling the appointment. All payments are processed via the payment system on the Company’s website.
                </p><br />
                <p>
                    2.2 The payment amount covers the cost of the consultation, regardless of the outcome of the assessment.
                </p><br />
                <p>
                    2.3 Failure to make payment prior to the appointment will result in cancellation of the booking.                </p><br />

                <h2 className="text-2xl font-semibold mt-6">3. Required Documents</h2><br />
                <p>
                    3.1 The Client is responsible for bringing all required documents to the appointment, which include but are not limited to:
                </p><br />
                <ul className="list-disc list-inside pl-8">
                    <li>Valid identification (e.g., driver’s license or passport)</li>
                    <li>Current medical history or relevant reports</li>
                    <li>Any forms required by the DVLA or the relevant authority (e.g., D4 medical form)</li>
                </ul>
                <p>
                    3.2 If the Client fails to bring the required documents to the appointment, the full payment for the appointment will still be charged, and the Client may need to reschedule the appointment at an additional cost.
                </p><br />

                <h2 className="text-2xl font-semibold mt-6">4. Cancellations and Rescheduling</h2><br />
                <p>
                    4.1 The Client may cancel or reschedule their appointment by providing a minimum of 72 hours’ notice prior to the scheduled appointment time.
                </p><br />
                <p>
                    4.2 Cancellations or rescheduling requests made less than 72 hours before the appointment time will result in a cancellation fee to cover the cost of the time to recruit the doctor (equivalent to the appointment rates at the time) and the Client will not be eligible for any refund.                </p><br />
                <p>
                    4.3 If the Company needs to cancel or reschedule an appointment due to unforeseen circumstances, the Client will be offered an alternative appointment or a full refund.                    </p><br />

                <h2 className="text-2xl font-semibold mt-6">5. No Show Policy</h2><br />
                <p>
                    5.1 If the Client fails to attend the appointment without giving prior notice in accordance with Section 4, the full consultation fee will be charged, and no refund will be provided.
                </p><br />
                <p>
                    5.2 The Client will be required to pay in full for any future bookings before a new appointment can be scheduled.
                </p><br />

                <h2 className="text-2xl font-semibold mt-6">6. Liability</h2><br />
                <p>
                    6.1 The Company’s liability is limited to the services provided during the medical consultation. The Company will not be liable for any indirect, incidental, or consequential damages arising from the Client’s use of the services.
                </p><br />
                <p>
                    6.2 The Company does not guarantee the issuance of a medical certificate and is not responsible for any decisions made by the DVLA or local authorities regarding the Client’s fitness to drive. Again this means the Company does not take liability for any damages including financial loss for the Client in such scenario.
                </p><br />

                <h2 className="text-2xl font-semibold mt-6">7. Data Protection</h2><br />
                <p>
                    7.1 The Company is committed to protecting the privacy and personal data of its Clients. All data collected during the medical assessment process will be handled in accordance with the Company’s <b>Privacy Policy</b>.
                </p><br />
                <p>
                    7.2 The Client consents to the processing of their personal data for the purpose of the medical assessment and acknowledges that such data may be shared with relevant authorities, including the DVLA or local licensing bodies, as required by law.
                </p><br />

                <h2 className="text-2xl font-semibold mt-6">8. Governing Law and Jurisdiction</h2><br />
                <p>
                    8.1 This Agreement is governed by and construed in accordance with the laws of <b>England and Wales</b>.
                </p><br />
                <p>
                    8.2 Any disputes arising under or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p><br />

                <h2 className="text-2xl font-semibold mt-6">9. Amendments to the Terms</h2><br />
                <p>
                    9.1 The Company reserves the right to amend or update these Terms of Service at any time without prior notice.
                </p><br />
                <p>
                    9.2 It is the responsibility of the Client to review the Terms of Service before booking an appointment. Continued use of the Company’s services following any changes to the terms will constitute acceptance of the revised Terms of Service.
                </p><br />
                <p><b>By booking an appointment with D4 Medical Forms Ltd, the Client confirms that they have read, understood, and agree to these Terms of Service.</b></p>
            </main>
        </>
    );
}
