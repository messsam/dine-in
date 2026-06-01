import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const customerService = {
  getAll: () => api.get('/customers'),
  getById: (id) => api.get(`/customers/${id}`),
  create: (data) => api.post('/customers', data),
};

export const restaurantService = {
  getAll: () => api.get('/restaurants'),
  getById: (id) => api.get(`/restaurants/${id}`),
};

export const reservationService = {
  getAll: () => api.get('/reservations'),
  getByCustomer: (customerId) => api.get(`/reservations?customerId=${customerId}`), // Adjust based on backend capabilities
  getByRestaurant: (restaurantId) => api.get(`/reservations?restaurantId=${restaurantId}`), // Adjust based on backend capabilities
  create: (data) => api.post('/reservations', data),
  cancel: (id) => api.delete(`/reservations/${id}`),
};

export const tableService = {
  getByRestaurant: (restaurantId) => api.get(`/tables?restaurantId=${restaurantId}`), // Adjust based on backend capabilities
  update: (id, data) => api.put(`/tables/${id}`, data),
};

export default api;
