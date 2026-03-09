import { Table } from '../models/table.model.js';

export const tableRepository = {
    create: async (tableData) => {
        const table = new Table(tableData);
        return await table.save();
    },
    find: async (id) => {
        return await Table.findById(id);
    },
    update: async (id, updateData) => {
        return await Table.findByIdAndUpdate(id, updateData, { new: true });
    },
    delete: async (id) => {
        return await Table.findByIdAndDelete(id);
    }
};