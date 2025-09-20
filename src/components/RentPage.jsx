import React from 'react';

export function RentPage({ onNavigate }) {
  return (
    <div className="max-w-4xl mx-auto py-24 px-4">
      <h1 className="text-4xl font-bold mb-6">Rent a Vehicle</h1>
      <p className="mb-6 text-gray-700">Choose a short-term rental plan and start your journey. This is a placeholder demo page—connect to your rental booking flow here.</p>
      <div className="space-x-4">
        <button className="bg-lime-600 text-white px-4 py-2 rounded" onClick={() => onNavigate('vehicles')}>Browse Vehicles</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => onNavigate('pricing')}>See Pricing</button>
      </div>
    </div>
  );
}

export default RentPage;
