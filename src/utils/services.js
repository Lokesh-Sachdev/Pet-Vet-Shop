// services.js

import { customers, services } from './data';

export function getCustomers() {
  // Simulate an API call here
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(customers);
    }, 500);
  });
}

export function getServices() {
  // Simulate an API call here
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(services);
    }, 500);
  });
}
