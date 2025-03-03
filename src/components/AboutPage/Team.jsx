import React from "react";

const Team = () => (
  <section className="py-12">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Our Leadership</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Replace these placeholders with actual team member data */}
        <div className="text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="John Doe"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
          <p className="text-gray-600">CEO & Founder</p>
        </div>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Jane Smith"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800">Jane Smith</h3>
          <p className="text-gray-600">Chief Financial Officer</p>
        </div>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Michael Lee"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800">Michael Lee</h3>
          <p className="text-gray-600">Operations Manager</p>
        </div>
      </div>
    </div>
  </section>
);

export default Team;
