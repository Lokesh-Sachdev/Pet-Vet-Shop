import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'; // Your custom CSS
import Home from './pages/Home/Home';
import CustomerPets from './pages/CustomerPets';
import Services from './pages/Services';
import Dashboard from './components/Dashboard/Dashboard';
import Auth from './pages/auth/Auth';
import ProtectedRoute from './routes/ProtectedRoute';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      <Dashboard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route
          path="/auth"
          element={
            <Auth isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route exact path="/" Component={Home} />
        <Route
          path="/dashboard/customer-pets"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <CustomerPets />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/services"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Services />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
