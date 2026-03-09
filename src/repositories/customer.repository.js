import { Customer } from '../models/customer.model.js';

export const customerRepository = {
    create: async (customerData) => {
        const customer = new Customer(customerData);
        return await customer.save();
    },
    find: async (id) => {
        return await Customer.findById(id);
    },
    update: async (id, updateData) => {
        return await Customer.findByIdAndUpdate(id, updateData, { new: true });
    },
    delete: async (id) => {
        return await Customer.findByIdAndDelete(id);
    }
};