import React, { useState } from "react";
import {
  FaUndo,
  FaShieldAlt,
  FaTag,
  FaCheckCircle,
  FaRegCreditCard,
  FaHandsHelping,
  FaTruck,
} from "react-icons/fa";

import phone1 from "../../assets/image/phones/phone1.jpg";
import phone2 from "../../assets/image/phones/phone2.jpg";
import phone3 from "../../assets/image/phones/phone3.jpg";
import phone4 from "../../assets/image/phones/phone4.jpg";

import MobileSubscriptionPlan from "./MobileSubscriptionPlan";

const UsedTechSales = () => {
  const mobileProducts = [
    {
      image: phone1,
      name: "VIVO V50 5G",
      specs: "8GB RAM / 256GB Storage",
      price: "₹34,999",
      shortDesc: "Latest Vivo flagship with premium features.",
      fullDesc:
        "Operating System: Funtouch OS 15\nRAM: 8 GB\nCPU: Snapdragon 7 Gen3, 1.8, 2.4, 2.63 GHz\nStorage: 256 GB\nRear Camera: 50 MP + 50 MP, OIS, f/1.88, f/2.0, 4K Recording\nSelfie Camera: 50 MP Wide-Angle, AF, f/2.0\nDisplay: 6.77\" AMOLED, 387 ppi, 4500 nits\nBattery: 6000 mAh, 90W Flash Charge\nSIM: Dual Nano, 5G+5G\nSecurity: In-display fingerprint\nProcessor: Snapdragon 7 Gen3, 4nm\nCamera Modes: Photo, Portrait, Night, Dual View, etc.",
    },
    {
      image: phone2,
      name: "OPPO K13x",
      specs: "6GB RAM / 128GB Storage",
      price: "₹12,999",
      shortDesc: "Powerful mid-range phone with large battery.",
      fullDesc:
        "Operating System: Android 15\nRAM: 6 GB\nStorage: 128 GB, Expandable up to 2 TB\nDisplay: 6.67\" HD+\nCamera: 50MP + 2MP Rear, 8MP Front\nBattery: 6000 mAh\nProcessor: Dimensity 6300",
    },
    {
      image: phone3,
      name: "Realme GT6",
      specs: "8GB RAM / 256GB Storage",
      price: "₹27,999",
      shortDesc: "High-performance smartphone with sleek design.",
      fullDesc:
        "Operating System: Android 14\nRAM: 12 GB\nProcessor: Snapdragon, 2.8 GHz\nStorage: 256 GB\nColor: Fluid Silver\nSIM: Single Nano\nConnector: USB Type-C\nSecurity: Fingerprint\nWater Resistant\nExtras: Cooling System, Fast Charging\nWarranty: 1 Year",
    },
    {
      image: phone4,
      name: "Redmi A3",
      specs: "6GB RAM / 128GB Storage",
      price: "₹8,290",
      shortDesc: "Budget-friendly phone for everyday use.",
      fullDesc:
        "Brand: Redmi\nCustomer Rating: 3.3/5 (52 reviews)\nDimensions: 8mm Height\nWarranty: 1 Year Brand Warranty from Redmi",
    },
  ];

  const benefits = [
    {
      icon: <FaUndo className="text-[#ffd700] text-4xl" />,
      title: "Easy Returns",
      desc: "Hassle-free returns & exchanges.",
    },
    {
      icon: <FaShieldAlt className="text-[#ffd700] text-4xl" />,
      title: "1-Year Warranty",
      desc: "Enjoy peace of mind with our warranty.",
    },
    {
      icon: <FaTag className="text-[#ffd700] text-4xl" />,
      title: "Best Price",
      desc: "Affordable pricing on all devices.",
    },
    {
      icon: <FaCheckCircle className="text-[#ffd700] text-4xl" />,
      title: "Quality Checked",
      desc: "Each phone is tested & certified.",
    },
    {
      icon: <FaRegCreditCard className="text-[#ffd700] text-4xl" />,
      title: "Subscription Plan",
      desc: "Monthly plans with secure payments.",
    },
    {
      icon: <FaHandsHelping className="text-[#ffd700] text-4xl" />,
      title: "Purpose Driven",
      desc: "The purpose of doing business is to help common people.",
    },
    {
      icon: <FaTruck className="text-[#ffd700] text-4xl" />,
      title: "Shipping Policy",
      desc: "Same day delivery available.",
    },
  ];

  const [showMore, setShowMore] = useState(Array(mobileProducts.length).fill(false));

  const toggleReadMore = (index) => {
    const updated = [...showMore];
    updated[index] = !updated[index];
    setShowMore(updated);
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-[#1a237e] mb-6 uppercase tracking-wide">
          Low Price, Best Choice
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover our collection of high-quality, new smartphones at unbeatable prices.
        </p>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Service Info */}
        <div className="text-center my-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a237e] relative inline-block">
            Our Services
            <div className="w-24 md:w-32 h-1 bg-yellow-400 rounded-full mx-auto mt-2"></div>
          </h1>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg font-semibold leading-relaxed">
            Dear Valued Client,<br />
            We are pleased to inform you about an exclusive opportunity to purchase a smartphone
            with a low down payment through our subscription plan. This offer comes with no interest
            and no additional charges. For more details, please contact DishareAI Welfare Foundation.
            <br />
            <strong>Note:</strong> Our products are exclusively available at our offline store. Online
            purchases are not available.
          </p>
        </div>

        <MobileSubscriptionPlan />

        {/* Phone Grid */}
        <h3 className="text-3xl font-semibold text-[#1a237e] mb-6">Available Mobile Phones</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {mobileProducts.map((product, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 text-left"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-contain mb-4"
              />
              <h3 className="text-xl font-bold text-[#1a237e]">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.specs}</p>
              <p className="text-lg font-bold text-[#1a237e]">{product.price}</p>

              {/* Description */}
              <div className="text-sm text-gray-700 mt-3">
                {showMore[index] ? (
                  <ul className="list-disc list-inside space-y-1 text-left">
                    {product.fullDesc.split("\n").map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{product.shortDesc}</p>
                )}
                <button
                  onClick={() => toggleReadMore(index)}
                  className="mt-2 text-sm text-blue-600 hover:underline"
                >
                  {showMore[index] ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsedTechSales;
