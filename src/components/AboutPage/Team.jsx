import React from 'react'

const Team = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#1a237e] mb-6 text-center">
                Meet Our Professional Team Members
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mb-4" />
                    <h4 className="text-lg font-bold text-[#1a237e]">{member.name}</h4>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
  )
}

export default Team