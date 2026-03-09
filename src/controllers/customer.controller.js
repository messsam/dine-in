import { customerService } from'../services/customer.service.js';

export const customerController = {
    createCustomer: async (req, res) => {
        try {
            const customer = await customerService.createCustomer(req.body);
            res.status(201).json(customer);
        } catch (error) {
            res.status(400).json({ error: "Invalid customer data", details: error.message });
        }
    },
    findCustomer: async (req, res) => {
        try {
            const customer = await customerService.findCustomer(req.params.id);
            if (!customer) return res.status(404).json({ error: "Customer not found" });
            res.json(customer);
        } catch (error) {
            res.status(404).json({ error: "Customer not found", details: error.message });
        }
    },
    updateCustomer: async (req, res) => {
        try {
            const customer = await customerService.updateCustomer(req.params.id, req.body);
            if (!customer) return res.status(404).json({ error: "Customer not found" });
            res.json(customer);
        } catch (error) {
            res.status(400).json({ error: "Invalid customer data", details: error.message });
        }
    },
    deleteCustomer: async (req, res) => {
        try {
            const customer = await customerService.deleteCustomer(req.params.id);
            if (!customer) return res.status(404).json({ error: "Customer not found" });
            res.json(customer);
        } catch (error) {
            res.status(404).json({ error: "Customer not found", details: error.message });
        }
    }
};
