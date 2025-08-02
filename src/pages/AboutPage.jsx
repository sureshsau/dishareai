import React from "react";
import Layout from "../components/layouts/Layout";
import Banner from "../components/HomePage/Banner";
import {
  FaHeadset,
  FaCheckCircle,
  FaRedo,
  FaLaptop,
  FaUsers,
  FaAward,
  FaUserTie,
} from "react-icons/fa";

const AboutPage = () => {
  const teamMembers = [
    { name: "John Doe", role: "CEO & Founder", img: "https://via.placeholder.com/150" },
    { name: "Jane Smith", role: "Chief Financial Officer", img: "https://via.placeholder.com/150" },
    { name: "Robert Brown", role: "Head of Operations", img: "https://via.placeholder.com/150" },
    { name: "Emily Davis", role: "Marketing Manager", img: "https://via.placeholder.com/150" },
  ];

  return (
    <Layout>
      <div className="w-screen flex flex-col items-center">
        <Banner />
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 px-4 md:px-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl font-bold text-center text-[#1a237e]">
              Welcome to
            </h2>
            <h2 className="text-xl font-bold text-center text-[#1a237e] mb-6">
              DISHAREAI WELFARE FOUNDATION
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
  DISHAREAI WELFARE FOUNDATION is a trusted platform that provides customers with high-quality new mobile phones and laptops. 
  We offer a reliable solution for those looking for budget-friendly technology, ensuring that all devices are thoroughly tested and certified. 
  Our goal is to make affordable technology accessible to everyone while promoting sustainability through the reuse of electronic devices.
</p>


            {/* Services Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[ 
                { icon: FaHeadset, title: "24X7 Support", text: "Our dedicated team is available around the clock to assist you with your financial needs." },
                
                { icon: FaRedo, title: "Easy Repayment", text: "Flexible repayment options tailored to your financial convenience." },
                
              ].map(({ icon: Icon, title, text }, index) => (
                <div key={index} className="flex flex-col items-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Icon className="text-4xl text-[#1a237e] mb-4" />
                  <h3 className="text-xl font-bold text-[#1a237e] mb-2">{title}</h3>
                  <p className="text-gray-700 text-center">{text}</p>
                </div>
              ))}
            </div>

            {/* Experience Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
                  <h3 className="text-5xl font-bold text-[#1a237e]">20</h3>
                  <p className="text-xl text-gray-700">Years of Experience</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1a237e] mb-4">
                    We're Here To Assist You With Exploring Protection
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We offer comprehensive assistance in researching and locating the best financial alternatives. Rely on us for knowledgeable guidance and support throughout the process to ensure your security and peace of mind.
                  </p>
                </div>
              </div>
            </div>

            {/* Statistics Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[ 
                { icon: FaUsers, title: "1200+", text: "Happy Clients" },
                { icon: FaCheckCircle, title: "100+", text: "Projects Succeeded" },
                { icon: FaAward, title: "25", text: "Awards Achieved" },
                { icon: FaUserTie, title: "120", text: "Team Members" },
              ].map(({ icon: Icon, title, text }, index) => (
                <div key={index} className="flex flex-col items-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Icon className="text-4xl text-[#1a237e] mb-4" />
                  <h3 className="text-3xl font-bold text-[#1a237e]">{title}</h3>
                  <p className="text-gray-700">{text}</p>
                </div>
              ))}
            </div>

            {/* Team Section */}
            

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
