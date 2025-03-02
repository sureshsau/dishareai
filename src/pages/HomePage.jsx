import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-blue-900 text-white font-bold px-3 py-2 rounded-md">Financial</div>
        </div>
        <ul className="flex space-x-6">
          <li className="text-gray-700 hover:text-blue-700 cursor-pointer">Home</li>
          <li className="text-gray-700 hover:text-blue-700 cursor-pointer">Loans</li>
          <li className="text-gray-700 hover:text-blue-700 cursor-pointer">About Us</li>
          <li className="text-gray-700 hover:text-blue-700 cursor-pointer">Contact</li>
        </ul>
        <div>
          <button className="mr-4 text-gray-700 hover:text-blue-700">Login</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Apply Now
          </button>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="flex justify-center items-center mt-16 px-10">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold text-gray-900">Your Financial Future Starts Here</h1>
          <p className="text-gray-600 mt-4">Get competitive rates on personal and business loans with quick approval and flexible terms.</p>
          
          {/* Loan Calculator */}
          <div className="bg-white shadow-lg rounded-lg p-6 mt-6 w-96">
            <h3 className="font-semibold text-lg">Quick Loan Calculator</h3>
            <div className="mt-4">
              <label className="text-gray-600 text-sm">Loan Amount ($)</label>
              <input type="range" min="1000" max="50000" className="w-full" />
              <div className="text-right text-gray-700 font-medium">$50,000</div>
            </div>
            <div className="mt-4">
              <label className="text-gray-600 text-sm">Loan Term (months)</label>
              <input type="range" min="6" max="60" className="w-full" />
              <div className="text-right text-gray-700 font-medium">12 months</div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mt-4">
              <span className="text-gray-600 text-sm">Estimated Monthly Payment</span>
              <h2 className="text-xl font-bold text-blue-600">$4280.37</h2>
            </div>
          </div>
          
          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Apply Now</button>
            <button className="text-blue-600 hover:underline">Learn More →</button>
          </div>
        </div>
        
        {/* Image */}
        <div className="w-1/2 flex justify-center">
          <img src="https://religaredigital.in/wp-content/uploads/2024/06/personal-loan-mob-banner.jpg.png" alt="Business Meeting" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
