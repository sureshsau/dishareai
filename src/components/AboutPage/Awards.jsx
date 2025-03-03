import React from "react";

const Awards = () => (
  <section className="py-12">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Certifications & Accreditations</h2>
      <p className="text-gray-700 mb-4">
        Our commitment to excellence is reflected in our industry certifications and awards. We adhere to strict regulatory guidelines and maintain high standards across all facets of our business.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="flex items-center space-x-3">
          <img src="https://via.placeholder.com/50" alt="ISO Certified" className="w-12 h-12" />
          <span className="text-gray-700">ISO Certified</span>
        </div>
        <div className="flex items-center space-x-3">
          <img src="https://via.placeholder.com/50" alt="RBI Approved" className="w-12 h-12" />
          <span className="text-gray-700">RBI Approved</span>
        </div>
      </div>
    </div>
  </section>
);

export default Awards;
