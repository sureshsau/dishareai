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
        <Banner />
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 px-4 md:px-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#1a237e] mb-4">
              Terms and Conditions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our services.
              These terms govern your relationship with DISHAREAI WELFARE FOUNDATION.
            </p>

            <div className="bg-white rounded-xl shadow-2xl p-8">
              {/* Highlighted Information Blocks */}
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="flex-1 bg-[#1a237e]/5 rounded-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <FaShieldAlt className="text-2xl text-[#1a237e] mr-3" />
                    <h3 className="text-xl font-bold text-[#1a237e]">Confidentiality</h3>
                  </div>
                  <p className="text-gray-700">
                    User information is handled with confidentiality, subject to legal obligations to disclose information to regulatory authorities if necessary.
                  </p>
                </div>
                <div className="flex-1 bg-[#1a237e]/5 rounded-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <FaHandshake className="text-2xl text-[#1a237e] mr-3" />
                    <h3 className="text-xl font-bold text-[#1a237e]">Compliance</h3>
                  </div>
                  <p className="text-gray-700">
                    Users must comply with all applicable laws and regulations.
                  </p>
                </div>
                <div className="flex-1 bg-[#1a237e]/5 rounded-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <FaLock className="text-2xl text-[#1a237e] mr-3" />
                    <h3 className="text-xl font-bold text-[#1a237e]">Financial Risks</h3>
                  </div>
                  <p className="text-gray-700">
                    Users should understand the risks associated with financial products and acknowledge that investments carry inherent risks.
                  </p>
                </div>
              </div>

              {/* Terms Details */}
              <div className="prose max-w-none">
                <div className="space-y-8">
                  {[
                    { title: "1. Introduction", text: "DISHAREAI WELFARE FOUNDATION operates as MFI Section-8, providing financial services. Users must adhere to the outlined terms and conditions when using the services." },
                    { title: "2. Eligibility", text: "Users must meet legal eligibility criteria to access the services." },
                    { title: "3. Services Offered", text: "DISHAREAI WELFARE FOUNDATION offers various financial services such as loans, investments, and advisory services, subject to regulatory approvals." },
                    { title: "4. Financial Products and Risks", text: "Users should understand the risks associated with financial products and acknowledge that investments carry inherent risks." },
                    { title: "5. Confidentiality", text: "User information is handled with confidentiality, subject to legal obligations to disclose information to regulatory authorities if necessary." },
                    { title: "6. Compliance with Laws", text: "Users must comply with all applicable laws and regulations." },
                    { title: "7. Fees and Charges", text: "Users are responsible for paying applicable fees and charges, which will be transparently communicated." },
                    { title: "8. Termination of Services", text: "DISHAREAI WELFARE FOUNDATION reserves the right to terminate services for users who violate terms or engage in fraudulent activities." },
                    { title: "9. Limitation of Liability", text: "DISHAREAI WELFARE FOUNDATION is not liable for any damages arising from the use of its services." },
                    { title: "10. Amendments to Terms and Conditions", text: "DISHAREAI WELFARE FOUNDATION may update the terms and conditions without prior notice." },
                    { title: "11. Governing Law and Jurisdiction", text: "The terms are governed by the laws of a specific jurisdiction, with disputes subject to the jurisdiction of its courts. Users agree to these terms upon availing of DISHAREAI WELFARE FOUNDATION's services and can contact the company for any inquiries." },
                  ].map(({ title, text }, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
                      <h3 className="text-2xl font-bold text-[#1a237e] mb-4">{title}</h3>
                      <p className="text-gray-700">{text}</p>
                    </div>
                  ))}
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
