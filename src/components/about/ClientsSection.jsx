import React from 'react';

export const ClientsSection = () => {
  const clients = [
    "Brand One",
    "Company Two",
    "Studio Three",
    // Add your actual clients
  ];

  return (
    <section className="mb-20">
      <h2 className="text-4xl font-serif mb-12">
        proud to work with
        <span className="text-pink-500"> amazing</span> brands
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {clients.map((client, index) => (
          <div key={index} className="p-4 text-center">
            {/* Replace with actual client logos */}
            <div className="h-20 hover:bg-gray-50 hover:text-black transition-colors border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center">
              {client}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};