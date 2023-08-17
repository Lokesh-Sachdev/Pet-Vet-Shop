import React from 'react';
import './Home.css'; // Your custom CSS
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="sub_heading">Welcome to Pet Veterinary Shop</h2>
      <p>We offer a wide range of services for your beloved pets.</p>
      <button className="home_btn">Learn More</button>
      <div className="card-container">
        <div className="card">
          <h3>Our Customers</h3>
          <p>Meet the furry friends we care for.</p>
          <Link to="/dashboard/customer-pets">View Customers</Link>
        </div>
        <div className="card">
          <h3>Our Services</h3>
          <p>Explore the services we offer.</p>
          <Link to="/dashboard/services">View Services</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
