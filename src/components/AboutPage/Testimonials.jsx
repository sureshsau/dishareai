import React from "react";

const Testimonials = () => (
  <section className="py-12 bg-gray-50">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-700 italic mb-4">
            "DISHAREAI WELFARE FOUNDATION transformed our business. Their quick approval process and flexible terms helped us secure the funds we needed."
          </p>
          <p className="text-gray-800 font-bold">- A Satisfied Customer</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-700 italic mb-4">
            "Their customer service is outstanding! I felt supported throughout the entire process."
          </p>
          <p className="text-gray-800 font-bold">- Another Happy Client</p>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
