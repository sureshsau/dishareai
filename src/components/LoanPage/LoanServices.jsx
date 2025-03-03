import React from "react";
import { 
  FaUser, 
  FaBriefcase, 
  FaGraduationCap, 
  FaPercentage, 
  FaRupeeSign, 
  FaCalendarAlt 
} from "react-icons/fa";

const LoanServices = () => {
  const services = [
    {
      title: "Personal Loan",
      icon: <FaUser className="text-4xl text-[#1a237e] mb-6" />,
      rate: "10.99%",
      range: "₹50,000 - ₹5,00,000",
      period: "12 - 60 months",
    },
    {
      title: "Business Loan",
      icon: <FaBriefcase className="text-4xl text-[#1a237e] mb-6" />,
      rate: "12.49%",
      range: "₹2,00,000 - ₹50,00,000",
      period: "24 - 84 months",
    },
    {
      title: "Education Loan",
      icon: <FaGraduationCap className="text-4xl text-[#1a237e] mb-6" />,
      rate: "8.99%",
      range: "₹1,00,000 - ₹20,00,000",
      period: "36 - 120 months",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#1a237e] mb-12">
          Our Loan Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              {service.icon}
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <div className="space-y-3 mb-6">
                <p className="flex items-center">
                  <FaPercentage className="text-[#1a237e] mr-2" />
                  <span>Interest Rate: {service.rate}</span>
                </p>
                <p className="flex items-center">
                  <FaRupeeSign className="text-[#1a237e] mr-2" />
                  <span>Loan Range: {service.range}</span>
                </p>
                <p className="flex items-center">
                  <FaCalendarAlt className="text-[#1a237e] mr-2" />
                  <span>Period: {service.period}</span>
                </p>
              </div>
              <button className="w-full bg-[#1a237e] text-white py-3 rounded whitespace-nowrap hover:bg-[#0d1657]">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanServices;
