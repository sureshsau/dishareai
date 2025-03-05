import React from 'react';
import Layout from '../components/layouts/Layout';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Banner from '../components/HomePage/Banner';

const RefundPage = () => {
  return (
    <Layout>
      <div className="w-screen flex flex-col items-center">
        <Banner/>
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 px-4 md:px-20">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8">
            <h2 className="text-4xl font-bold text-center text-[#1a237e] mb-4">
              Refund Policy
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Please read our refund policy carefully to understand the terms under which refunds are processed.
            </p>

            <div className="prose max-w-none">
              <h3 className="text-2xl font-bold text-[#1a237e] mb-4">1. Refund Eligibility</h3>
              <p className="text-gray-700 mb-6">
                Refunds are considered under the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>If the service was not provided as described.</li>
                <li>If there was an error in the transaction.</li>
                <li>Other valid reasons as determined by our management.</li>
              </ul>

              <h3 className="text-2xl font-bold text-[#1a237e] mb-4">2. Refund Process</h3>
              <p className="text-gray-700 mb-6">
                To initiate a refund, please contact us within 7 days of the transaction date. Provide your transaction details and the reason for the refund request. Our team will review your request and respond within 14 business days.
              </p>

              <h3 className="text-2xl font-bold text-[#1a237e] mb-4">3. Contact Information</h3>
              <p className="text-gray-700 mb-6">
                For refund requests or any inquiries, please reach out to us:
              </p>
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-[#1a237e] mr-3" />
                <p className="text-gray-700">Phone: <a href="tel:+916294385793" className="text-[#1a237e]">62943 85793</a>, <a href="tel:+919429694155" className="text-[#1a237e]">94296 94155</a></p>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-[#1a237e] mr-3" />
                <p className="text-gray-700">Email: <a href="mailto:dishareaiwelfarefoundation@gmail.com" className="text-[#1a237e]">dishareaiwelfarefoundation@gmail.com</a></p>
              </div>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-[#1a237e] mr-3" />
                <p className="text-gray-700">Address: Bagchi, Jamsherpur Arabpur, Nadia, Pin-741122</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RefundPage;
