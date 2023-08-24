import React from 'react';
import './Dashboard.css'; // Your custom CSS
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.avif';

const Dashboard = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <nav>
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/dashboard/customer-pets">Customer</Link>
          </li>
          <li>
            <Link to="/dashboard/services">Services</Link>
          </li>
          <li>
            {isLoggedIn ? (
              <Link onClick={handleLogout}>Logout</Link>
            ) : (
              <Link to="/auth">Sign In</Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
