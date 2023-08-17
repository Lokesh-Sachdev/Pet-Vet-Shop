import './ServiceCard.css'; // Your CSS file

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-content">
        <h3>{service.name}</h3>
        <p>Price: ${service.price}</p>
        <button>Book Appointment</button>
      </div>
      <div className="service-image">
        <img src={service.image} alt={service.name} />
      </div>
    </div>
  );
};

export default ServiceCard;
