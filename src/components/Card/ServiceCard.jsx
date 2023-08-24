import './ServiceCard.css';

const ServiceCard = ({ service, onEdit, onDelete }) => {
  return (
    <div className="service-card">
      <div className="service-content">
        <h3>{service.name}</h3>
        <p>Price: ${service.price}</p>
        <div>
          <button className="edit_btn" onClick={onEdit}>
            Edit
          </button>
          <button className="delete_btn" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
      <div className="service-image">
        <img src={service.image} alt={service.name} />
      </div>
    </div>
  );
};

export default ServiceCard;
