import React from "react";
import Layout from "../components/layouts/Layout";
import {
  FaUserShield,
  FaLock,
  FaDatabase,
  FaFileAlt,
  FaExclamationCircle,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Banner from "../components/HomePage/Banner";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="w-screen flex flex-col items-center">
        <Banner />
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            {/* 📜 Page Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#1a237e] mb-6">
              Privacy Policy
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-base sm:text-lg px-4">
              At <span className="font-semibold">DISHAREAI WELFARE FOUNDATION</span>, we prioritize your privacy.
              This policy explains how we collect, use, and safeguard your information.
            </p>

            <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8">
              {/* 🔹 Key Policy Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: <FaUserShield />, title: "Your Privacy Matters", desc: "We handle your data responsibly and securely." },
                  { icon: <FaLock />, title: "Data Security", desc: "We use advanced encryption to protect your information." },
                  { icon: <FaDatabase />, title: "No Data Selling", desc: "We never sell your personal data to third parties." },
                ].map(({ icon, title, desc }, index) => (
                  <div key={index} className="flex flex-col items-center bg-[#1a237e]/5 rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
                    <div className="text-[#1a237e] text-3xl mb-3">{icon}</div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#1a237e]">{title}</h3>
                    <p className="text-gray-700 text-sm sm:text-base">{desc}</p>
                  </div>
                ))}
              </div>

              {/* 📑 Privacy Policy Sections */}
              <div className="space-y-8">
                {[
                  { 
                    title: "1. Information We Collect", 
                    icon: <FaFileAlt />, 
                    text: "We collect personal details like name, contact info, and financial data when you interact with our services."
                  },
                  { 
                    title: "2. How We Use Your Information", 
                    icon: <FaDatabase />, 
                    text: "Your data is used to provide financial services, improve customer experience, process transactions, and comply with regulations."
                  },
                  { 
                    title: "3. Data Security", 
                    icon: <FaLock />, 
                    text: "We implement strict security measures to protect your information from unauthorized access and breaches."
                  },
                  { 
                    title: "4. Information Sharing", 
                    icon: <FaUserShield />, 
                    text: "We do not share your personal data unless required by law, regulatory authorities, or with your consent."
                  },
                  { 
                    title: "5. Your Rights", 
                    icon: <FaExclamationCircle />, 
                    text: "You have the right to access, update, or delete your personal information by contacting us."
                  },
                  { 
                    title: "6. Cookies & Tracking", 
                    icon: <FaFileAlt />, 
                    text: "We use cookies to enhance your experience, and you can manage preferences in your browser settings."
                  },
                  { 
                    title: "7. Policy Updates", 
                    icon: <FaExclamationCircle />, 
                    text: "This privacy policy may be updated periodically, and users will be notified of any significant changes."
                  },
                ].map(({ title, icon, text }, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4 text-[#1a237e] text-2xl">{icon}</div>
                    <h3 className="text-lg sm:text-2xl font-bold text-[#1a237e]">{title}</h3>
                    <p className="text-gray-700 text-sm sm:text-base">{text}</p>
                  </div>
                ))}
              </div>

              {/* 📞 Contact Section */}
              <div className="mt-12 bg-[#1a237e]/5 rounded-xl p-6 sm:p-8 shadow-lg text-center">
                <h4 className="text-lg sm:text-xl font-bold text-[#1a237e] mb-4 flex justify-center items-center">
                  <FaPhoneAlt className="mr-3" />
                  Contact Us
                </h4>
                <p className="text-gray-700 text-sm sm:text-base">
                  If you have any questions about this policy, feel free to contact us:
                </p>
                <div className="mt-4 space-y-2">
                  <p className="flex justify-center items-center text-gray-800">
                    <FaEnvelope className="mr-2 text-[#1a237e]" /> 
                    <span className="text-sm sm:text-base">dishareaiwelfarefoundation@gmail.com</span>
                  </p>
                  <p className="flex justify-center items-center text-gray-800">
                    <FaPhoneAlt className="mr-2 text-[#1a237e]" /> 
                    <span className="text-sm sm:text-base">+91 6294385793 | +91 9429694155</span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
