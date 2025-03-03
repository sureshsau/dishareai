import React from "react";
import Layout from "../components/layouts/Layout";
import {
  FaShieldAlt,
  FaHandshake,
  FaLock,
  FaExclamationCircle,
  FaBalanceScale,
  FaFileAlt,
  FaHeadset,
} from "react-icons/fa";
import Banner from "../components/HomePage/Banner";

const TermsPage = () => {
  return (
   <Layout>

      <div className="w-screen flex flex-col items-center">
        <Banner/>
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 px-4 md:px-20">
        
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#1a237e] mb-4">
            Terms and Conditions
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before applying for a loan.
            These terms govern your relationship with DISHAREAI WELFARE FOUNDATION.
          </p>

          <div className="bg-white rounded-xl shadow-2xl p-8">
            {/* Highlighted Information Blocks */}
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="flex-1 bg-[#1a237e]/5 rounded-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <FaShieldAlt className="text-2xl text-[#1a237e] mr-3" />
                  <h3 className="text-xl font-bold text-[#1a237e]">Regulatory Compliance</h3>
                </div>
                <p className="text-gray-700">
                  We operate under RBI guidelines with full compliance to banking regulations and security protocols.
                </p>
              </div>
              <div className="flex-1 bg-[#1a237e]/5 rounded-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <FaHandshake className="text-2xl text-[#1a237e] mr-3" />
                  <h3 className="text-xl font-bold text-[#1a237e]">Transparent Process</h3>
                </div>
                <p className="text-gray-700">
                  Clear documentation and full disclosure of all terms, fees, and charges before loan disbursement.
                </p>
              </div>
              <div className="flex-1 bg-[#1a237e]/5 rounded-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <FaLock className="text-2xl text-[#1a237e] mr-3" />
                  <h3 className="text-xl font-bold text-[#1a237e]">Data Security</h3>
                </div>
                <p className="text-gray-700">
                  Advanced encryption and security measures to protect your personal and financial information.
                </p>
              </div>
            </div>

            {/* Terms Details */}
            <div className="prose max-w-none">
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-[#1a237e] mb-4">
                    1. Loan Agreement Overview
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    This agreement constitutes a legally binding contract between DISHAREAI WELFARE FOUNDATION
                    (hereinafter referred to as "the Company") and the Borrower. By accepting a loan, you agree to be bound by these terms and conditions.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-[#1a237e] mb-4">
                    2. Loan Eligibility & Documentation
                  </h3>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700">
                    <li>Applicant must be an Indian citizen aged 21 years or above</li>
                    <li>Valid government-issued ID proof and address proof are mandatory</li>
                    <li>Minimum monthly income requirements as per loan scheme</li>
                    <li>Clean credit history with no major defaults</li>
                    <li>Additional documents may be required based on loan amount and type</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-[#1a237e] mb-4">
                    3. Interest Rates & Charges
                  </h3>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700">
                    <li>Interest rates range from 10.99% to 24% per annum based on loan type and applicant profile</li>
                    <li>Processing fee: 1-2% of loan amount (non-refundable)</li>
                    <li>Late payment charges: 2% per month on overdue amount</li>
                    <li>Pre-closure charges: 2% of outstanding principal amount</li>
                    <li>GST applicable on all fees and charges as per government regulations</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-[#1a237e] mb-4">
                    4. Loan Disbursement & Repayment
                  </h3>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700">
                    <li>Loan amount will be disbursed to the registered bank account after documentation</li>
                    <li>EMI payment through auto-debit mandate is mandatory</li>
                    <li>Repayment tenure: 12 to 60 months based on loan scheme</li>
                    <li>Advance EMI payment facility available with applicable terms</li>
                    <li>Borrower must maintain sufficient balance for EMI on due date</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-[#1a237e] mb-4">
                    5. Default & Legal Consequences
                  </h3>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700">
                    <li>Loan account will be marked as defaulted after 90 days of continuous non-payment</li>
                    <li>Legal proceedings may be initiated for recovery of dues</li>
                    <li>Default will be reported to credit bureaus affecting credit score</li>
                    <li>Company reserves the right to recall the entire loan amount</li>
                    <li>Recovery charges will be borne by the borrower</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-[#1a237e] mb-4">
                    6. Privacy & Data Protection
                  </h3>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700">
                    <li>Personal information collected will be used only for loan processing</li>
                    <li>Data sharing with credit bureaus and regulatory authorities as mandated</li>
                    <li>Implementation of industry-standard security measures</li>
                    <li>Regular security audits and updates to protect customer data</li>
                    <li>Option to update or correct personal information through customer service</li>
                  </ul>
                </div>
              </div>

              {/* Important Disclaimers and Support */}
              <div className="mt-12 space-y-8">
                <div className="bg-[#1a237e]/5 rounded-xl p-8 shadow-lg">
                  <h4 className="text-xl font-bold text-[#1a237e] mb-4 flex items-center">
                    <FaExclamationCircle className="mr-3" />
                    Important Disclaimers
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    The Company reserves the right to modify these terms and conditions at any time.
                    Changes will be communicated through registered email/SMS. Continued use of our services after such modifications constitutes acceptance of the updated terms.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <FaBalanceScale className="text-2xl text-[#1a237e] mr-3" />
                      <h5 className="font-bold">Legal Compliance</h5>
                    </div>
                    <p className="text-sm text-gray-600">
                      All terms comply with Indian banking and financial regulations.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <FaFileAlt className="text-2xl text-[#1a237e] mr-3" />
                      <h5 className="font-bold">Documentation</h5>
                    </div>
                    <p className="text-sm text-gray-600">
                      Digital copies of all documents are available in the customer portal.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <FaHeadset className="text-2xl text-[#1a237e] mr-3" />
                      <h5 className="font-bold">24/7 Support</h5>
                    </div>
                    <p className="text-sm text-gray-600">
                      Dedicated support team available for clarification of terms and conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
   </Layout>
    
  );
};

export default TermsPage;
