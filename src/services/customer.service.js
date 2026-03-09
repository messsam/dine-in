import { customerRepository } from '../repositories/customer.repository.js';

export const customerService = {
    createCustomer: async (customerData) => {
        if (customerData.age < 18 || customerData.age > 120) {
            throw new Error('Invalid age. Customer must be between 18-120 years old.');
        }
        return await customerRepository.create(customerData);
    },
    findCustomer: async (id) => {
        return await customerRepository.find(id);
    },
    updateCustomer: async (id, updateData) => {
        return await customerRepository.update(id, updateData);
    },
    deleteCustomer: async (id) => {
        return await customerRepository.delete(id);
    }
}