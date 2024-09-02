import React from 'react';
import './Services.css';

const services = [
  {
    image: 'path/to/image1.jpg',
    title: 'Service 1',
  },
  {
    image: 'path/to/image2.jpg',
    title: 'Service 2',
  },
  {
    image: 'path/to/image3.jpg',
    title: 'Service 3',
  },
  {
    image: 'path/to/image4.jpg',
    title: 'Service 4',
  },
  // Add more services as needed
];

const Services = () => {
  return (
    <div className="services-container">
      {services.map((service, index) => (
        <div key={index} className="service-item">
          <img src={service.image} alt={service.title} />
          <div className="service-title">{service.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Services;
