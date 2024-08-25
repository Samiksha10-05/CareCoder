// components/Services.js
import React from 'react';

export default function Services() {
  const services = [
    { title: 'Search doctor', description: 'Find specialist doctors and general hospitals.', icon: 'icon-path' },
    { title: 'Online pharmacy', description: 'Order your medications online easily.', icon: 'icon-path' },
    { title: 'Consultation', description: 'Book online consultations.', icon: 'icon-path' },
    { title: 'Emergency care', description: '24/7 urgent care.', icon: 'icon-path' },
    { title: 'Tracking', description: 'Track your medical history.', icon: 'icon-path' },
  ];

  return (
    <div className="p-8 lg:p-16 bg-white mx-10 md:mx-24">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary">Our services</h2>
      <p className="text-center text-gray-600 mt-4">
        Adjust to your health needs and make sure you have access to the best care.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded-lg text-center hover:bg-primary-light">
            <img src={service.icon} alt={service.title} className="mx-auto" />
            <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
