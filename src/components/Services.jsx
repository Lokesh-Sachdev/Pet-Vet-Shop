import React, { useState, useEffect } from 'react';
import { getServices } from '../utils/services';
import ServiceCard from './Card/ServiceCard';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices().then((data) => {
      setServices(data);
    });
  }, []);

  return (
    <div className="services-container">
      <h2 className="sub_heading">Services</h2>
      <div className="service-cards">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
