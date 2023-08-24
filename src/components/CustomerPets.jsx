import React, { useState, useEffect } from 'react';
import { getCustomers } from '../utils/services';

function CustomerPets() {
  const [customers, setCustomers] = useState([]);
  const [petName, setPetName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    getCustomers().then((data) => {
      setCustomers(data);
    });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (index) => {
    const customerToEdit = customers[index];
    setPetName(customerToEdit.petName);
    setCustomerName(customerToEdit.name);
    setCustomerEmail(customerToEdit.email);
    setEditingIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    clearForm();
  };

  const handleAddPet = () => {
    const newPet = {
      name: customerName,
      petName: petName,
      email: customerEmail,
    };

    setCustomers([...customers, newPet]);
    handleCloseModal();
  };

  const handleEditPet = (index) => {
    const editedCustomers = [...customers];
    editedCustomers[index] = {
      name: customerName,
      petName: petName,
      email: customerEmail,
    };

    setCustomers(editedCustomers);
    setEditingIndex(null);
    clearForm();
  };

  const handleDeletePet = (index) => {
    const updatedCustomers = customers.filter((_, i) => i !== index);
    setCustomers(updatedCustomers);
  };

  const handleSaveChanges = () => {
    // Update customer details and close modal
    handleEditPet(editingIndex);
    handleCloseModal();
  };

  const clearForm = () => {
    setPetName('');
    setCustomerName('');
    setCustomerEmail('');
    setEditingIndex(null);
  };

  return (
    <div className="flex_container">
      <h2 className="sub_heading">Customer Pets</h2>
      <button className="add_btn" onClick={() => setIsModalOpen(true)}>
        Add Customer & Pet
      </button>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Pet-Name</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.petName}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>
                <button
                  className="edit_btn"
                  onClick={() => handleOpenModal(index)}
                >
                  Edit
                </button>
                <button
                  className="delete_btn"
                  onClick={() => handleDeletePet(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3 className="modal_header">
              {editingIndex !== null ? 'Edit' : 'Add'} Customer & Pet
            </h3>
            <div>
              <input
                type="text"
                placeholder="Pet Name"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Customer Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Customer Email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
              />
              <button
                className="edit_btn"
                onClick={
                  editingIndex !== null ? handleSaveChanges : handleAddPet
                }
              >
                {editingIndex !== null ? 'Save Changes' : 'Add'}
              </button>
              <button className="delete_btn" onClick={handleCloseModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomerPets;
