# [Pet Veterinary Shop Dashboard](https://wonderful-cajeta-c4dec6.netlify.app/)

Welcome to the Pet Veterinary Shop Dashboard, a React.js application for managing customers and services a pet veterinary shop provides.

## Features

- **Authentication:** User authentication system with login and logout functionality.
- **Dashboard:** A modern and innovative dashboard interface for managing customer pets and services.
- **Protected Routes:** Secure navigation to customer pets and services pages with an authentication check.
- **Customer Pets:** View a list of customer pets along with their names and emails.
- **Services:** Explore a list of services the veterinary shop provides and their prices.

## Getting Started

1. Clone the repository:
   git clone https://github.com/your-username/pet-vet-shop-dashboard.git
   cd pet-vet-shop-dashboard

2. Install dependencies:
   npm install

3. Start the development server:
   npm start

   The app will be accessible at `http://localhost:3000`.

## Project Structure

- `/src`: Source code directory.
  - `/components`: React components for different application sections.
  - `/pages`: Contains page components like Home.
  - `/auth`: Contains the authentication logic and components.
  - `/routes`: Custom route components for handling protected routes.
  - `/utils`: Simulated service data.
  - `/App.js`: Root component of the application.
  - `/index.js`: Entry point of the React app.

## Dependencies

- React
- React Router DOM
- React Icons
- Swiper

## Usage

1. Authentication
   * Access the /auth route to Sign in or register.
   * Once logged in, navigate to different sections of the dashboard.

2. Customer Pets
   * View a list of customer pets on the dashboard.
   * Click "Add Pet" to add a new pet.
   * Click "Edit" to modify the pet's details.
   * Click "Delete" to remove a pet from the list.

3. Services
   * Explore a list of services offered by the veterinary shop.
   * Click "Add Service" to include a new service.
   * Click "Edit" to modify a service's details.
   * Click "Delete" to remove a service from the list.


## API Endpoints

The application communicates with the backend through the following API endpoints:

- **Authentication:**
  - `POST-'https://64e702f7b0fd9648b78f2e71.mockapi.io/sign'`: User Sign In.
  
Please feel free to reach out if you have any questions or need further clarification.

