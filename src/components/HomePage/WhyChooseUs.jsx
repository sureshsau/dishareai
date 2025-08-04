import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { 
  FaShieldAlt, 
  FaBolt, 
  FaHandHoldingUsd, 
  FaHeadset, 
  FaChartLine, 
  FaUsers 
} from "react-icons/fa";

// Sample data for company growth
const growthData = [
  { year: "2020", value: 1200 },
  { year: "2021", value: 2300 },
  { year: "2022", value: 3800 },
  { year: "2023", value: 5200 },
  { year: "2024", value: 7500 },
];

const GrowthChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={growthData}>
      <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
      <XAxis dataKey="year" stroke="#1a237e" />
      <YAxis stroke="#1a237e" />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#1a237e"
        strokeWidth={3}
        dot={{ r: 5 }}
        activeDot={{ r: 8 }}
      />
    </LineChart>
  </ResponsiveContainer>
);

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-3xl text-[#ffd700] mb-4" />,
      title: "Secure Process",
      desc: "Bank-grade security protocols",
    },
    {
      icon: <FaBolt className="text-3xl text-[#ffd700] mb-4" />,
      title: "Quick Approval",
      desc: "24-hour processing time",
    },
    {
      icon: <FaHeadset className="text-3xl text-[#ffd700] mb-4" />,
      title: "24/7 Support",
      desc: "Always here to help you",
    },
    {
      icon: <FaChartLine className="text-3xl text-[#ffd700] mb-4" />,
      title: "Expert Guidance",
      desc: "Professional advice from experienced consultants",
    },
    {
      icon: <FaUsers className="text-3xl text-[#ffd700] mb-4" />,
      title: "Community Focus",
      desc: "Building strong relationships with our customers",
    },
  ];

  return (
    <section className="md:my-5 py-16 bg-gradient-to-br from-[#1a237e] to-[#283593] text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Why Choose Us
        </h1>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-transform"
            >
              {feature.icon}
              <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Growth Chart Section */}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
