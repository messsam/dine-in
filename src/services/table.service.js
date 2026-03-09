import { tableRepository } from '../repositories/table.repository.js';

export const tableService = {
    createTable: async (tableData) => {
        return await tableRepository.create(tableData);
    },
    findTable: async (id) => {
        return await tableRepository.find(id);
    },
    updateTable: async (id, updateData) => {
        return await tableRepository.update(id, updateData);
    },
    deleteTable: async (id) => {
        return await tableRepository.delete(id);
    }
}