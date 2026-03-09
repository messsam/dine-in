import { tableService } from '../services/table.service.js';

export const tableController = {
    createTable: async (req, res) => {
        try {
            const table = await tableService.createTable(req.body);
            res.status(201).json(table);
        } catch (error) {
            res.status(400).json({ error: "Invalid table data", details: error.message });
        }
    },
    findTable: async (req, res) => {
        try {
            const table = await tableService.findTable(req.params.id);
            if (!table) return res.status(404).json({ error: "Table not found" });
            res.json(table);
        } catch (error) {
            res.status(404).json({ error: "Table not found", details: error.message });
        }
    },
    updateTable: async (req, res) => {
        try {
            const table = await tableService.updateTable(req.params.id, req.body);
            if (!table) return res.status(404).json({ error: "Table not found" });
            res.json(table);
        } catch (error) {
            res.status(400).json({ error: "Invalid table data", details: error.message });
        }
    },
    deleteTable: async (req, res) => {
        try {
            const table = await tableService.deleteTable(req.params.id);
            if (!table) return res.status(404).json({ error: "Table not found" });
            res.json(table);
        } catch (error) {
            res.status(404).json({ error: "Table not found", details: error.message });
        }
    }
};
