import React from "react";
import { FaHandshake, FaChartLine } from "react-icons/fa";

const Mission = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div>
            <img
              src="https://public.readdy.ai/ai/img_res/80bc208c93b129e7c6bf6030e8d5db98.jpg"
              alt="About Us"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
          {/* Text Content Section */}
          <div>
            <h2 className="text-4xl font-bold text-[#1a237e] mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-8">
              At DISHAREAI WELFARE FOUNDATION, we believe in creating opportunities for growth and prosperity. Our mission is to provide accessible financial solutions that empower individuals and businesses to achieve their goals.
            </p>
            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <FaHandshake className="text-3xl text-[#1a237e] mb-4" />
                <h3 className="text-xl font-bold mb-2">Trust</h3>
                <p className="text-gray-600">
                  Building lasting relationships through transparency and integrity.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <FaChartLine className="text-3xl text-[#1a237e] mb-4" />
                <h3 className="text-xl font-bold mb-2">Growth</h3>
                <p className="text-gray-600">
                  Facilitating success through strategic financial support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
