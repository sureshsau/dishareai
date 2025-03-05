import React from "react";
import { FaUndo, FaShieldAlt, FaTag, FaCheckCircle } from "react-icons/fa";

// Importing phone images
import phone1 from "../../assets/image/phones/phone1.jpeg";
import phone2 from "../../assets/image/phones/phone2.jpeg";
import phone3 from "../../assets/image/phones/phone3.jpeg";
import phone4 from "../../assets/image/phones/phone4.jpeg";
import phone5 from "../../assets/image/phones/phone5.jpeg";
import phone6 from "../../assets/image/phones/phone6.jpeg";
import phone7 from "../../assets/image/phones/phone7.jpeg";
import phone8 from "../../assets/image/phones/phone8.jpeg";

const UsedTechSales = () => {
  const mobileProducts = [phone1, phone2, phone3, phone4, phone5, phone6, phone7, phone8];

  const benefits = [
    { icon: <FaUndo className="text-[#ffd700] text-4xl" />, title: "Easy Returns", desc: "Hassle-free returns & exchanges." },
    { icon: <FaShieldAlt className="text-[#ffd700] text-4xl" />, title: "1-Year Warranty", desc: "Enjoy peace of mind with our warranty." },
    { icon: <FaTag className="text-[#ffd700] text-4xl" />, title: "Best Price", desc: "Affordable pricing on all devices." },
    { icon: <FaCheckCircle className="text-[#ffd700] text-4xl" />, title: "Quality Checked", desc: "Each phone is tested & certified." },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* 📢 Campaign Slogan */}
        <h2 className="text-5xl font-extrabold text-[#1a237e] mb-6 uppercase tracking-wide">
          Low Price, Best Choice
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover our collection of high-quality, pre-owned and new smartphones at unbeatable prices.
        </p>

        {/* 🌟 Benefits Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* 📱 Used Mobile Phones Section */}
        <div>
          {/* Section Heading */}
          <div className="text-center my-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a237e] relative inline-block">
              Our Services
              <div className="w-24 md:w-32 h-1 bg-yellow-400 rounded-full mx-auto mt-2"></div>
            </h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
              Discover a range of services tailored to meet your needs, from affordable refurbished mobile phones to easy financing solutions.
            </p>
          </div>

          {/* 📱 Phone Grid */}
          <h3 className="text-3xl font-semibold text-[#1a237e] mb-6">
            Available Mobile Phones
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {mobileProducts.map((image, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-4 flex justify-center items-center hover:shadow-2xl transition-transform transform hover:scale-105"
              >
                <img
                  src={image}
                  alt={`Phone ${index + 1}`}
                  className="w-full h-48 object-cover rounded-md border border-gray-200"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default UsedTechSales;
