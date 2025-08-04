import React from 'react';
import { Smartphone, Wallet, ShieldCheck, Percent, Banknote } from 'lucide-react';

const MobileSubscriptionCard = () => {
  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-gradient-to-br from-white to-gray-50 shadow-blue-200 shadow-xl rounded-2xl border border-gray-200">
      <div className="flex items-center space-x-2 mb-4">
        
        <h2 className="text-xl font-bold text-gray-800 text-center">Mobile Purchase Subscription Plan</h2>
      </div>

      <p className="text-gray-600 mb-4 text-sm">
        Get the latest smartphones with affordable EMI options and exclusive benefits.
      </p>

      <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <h3 className="flex items-center text-sm font-semibold text-gray-700 mb-1">
          <Banknote className="w-4 h-4 mr-2 text-green-600" /> Pricing Example
        </h3>
        <p className="text-gray-700 text-sm">📱 Model: <strong>Vivo V50PH</strong></p>
        <p className="text-gray-700 text-sm">💰 Price: ₹34,999</p>
        <p className="text-gray-700 text-sm">💳 Down Payment: ₹4,999</p>
        <p className="text-gray-700 text-sm">📆 EMI: ₹3,000/month for 10 months</p>
        <p className="text-gray-500 text-xs italic">Auto-debited from your bank</p>
      </div>

      <div className="mb-4">
        <h3 className="flex items-center font-semibold text-gray-700 text-sm mb-2">
          <ShieldCheck className="w-4 h-4 mr-2 text-indigo-600" /> Features
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          <li>Latest mobile phones</li>
          <li>Flexible EMI options</li>
          <li>Priority customer support</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="flex items-center font-semibold text-gray-700 text-sm mb-2">
          <Percent className="w-4 h-4 mr-2 text-pink-600" /> Benefits
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          <li>Exclusive discounts</li>
          <li>No extra cost</li>
          <li>No processing fee</li>
        </ul>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 shadow-sm ">
        <h3 className="flex items-center font-semibold text-gray-700 text-sm mb-2">
          <Wallet className="w-4 h-4 mr-2 text-yellow-600" /> EMI Option Details
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          <li>Tenure: 6, 12, or 24 months</li>
          <li>Interest Rate: 0% (No Interest)</li>
          <li>Low Down Payment</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileSubscriptionCard;
