import React, { useState, useEffect } from 'react';
import { getServices } from '../utils/services';
import ServiceCard from './Card/ServiceCard';

function Services() {
  const [services, setServices] = useState([]);
  const [serviceName, setServiceName] = useState('');
  const [servicePrice, setServicePrice] = useState('');
  const [editingServiceIndex, setEditingServiceIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getServices().then((data) => {
      setServices(data);
    });
  }, []);

  const handleOpenModal = (index) => {
    if (index !== undefined) {
      const serviceToEdit = services[index];
      setServiceName(serviceToEdit.name);
      setServicePrice(serviceToEdit.price);
      setEditingServiceIndex(index);
    } else {
      clearForm();
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    clearForm();
  };

  const handleAddService = () => {
    const newService = {
      name: serviceName,
      price: servicePrice,
    };

    setServices([...services, newService]);
    handleCloseModal();
  };

  const handleEditService = (index) => {
    const editedService = [...services];
    editedService[index] = {
      id: services[editingServiceIndex].id,
      name: serviceName,
      price: servicePrice,
    };

    setServices(editedService);
    clearForm();
    setEditingServiceIndex(null);
  };

  const handleSaveChanges = () => {
    // Update customer details and close modal
    handleEditService(editingServiceIndex);
    handleCloseModal();
  };

  const handleDeleteService = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  const clearForm = () => {
    setServiceName('');
    setServicePrice('');
    setEditingServiceIndex(null);
  };

  return (
    <div className="services-container flex_container">
      <h2 className="sub_heading">Services</h2>
      <button className="add_btn" onClick={() => handleOpenModal()}>
        Add Service
      </button>
      <div className="service-cards">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            onEdit={() => handleOpenModal(index)}
            onDelete={() => handleDeleteService(index)}
          />
        ))}
      </div>

      <div className="add-service-form">
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h3 className="modal_header">
                {editingServiceIndex !== null ? 'Edit' : 'Add'} Service
              </h3>
              <div>
                <input
                  type="text"
                  placeholder="Service Name"
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Service Price"
                  value={servicePrice}
                  onChange={(e) => setServicePrice(e.target.value)}
                />
                <button
                  className="edit_btn"
                  onClick={
                    editingServiceIndex !== null
                      ? handleSaveChanges
                      : handleAddService
                  }
                >
                  {editingServiceIndex !== null ? 'Save Changes' : 'Add'}
                </button>
                <button className="delete_btn" onClick={handleCloseModal}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;
