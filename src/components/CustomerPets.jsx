import React, { useState, useEffect } from 'react';
import { getCustomers } from '../utils/services';

function CustomerPets() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers().then((data) => {
      console.log(data);
      setCustomers(data);
    });
  }, []);

  return (
    <div>
      <h2 className="sub_heading">Customer</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerPets;
