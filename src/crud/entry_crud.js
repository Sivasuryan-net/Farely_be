const Entry = require('../models/Entry');
const queryFactory = require('./../db/queryFactory');

module.exports = {
    createEntry: async (entryData) => queryFactory.createRecord(Entry, entryData),
    getEntries: async (query) => queryFactory.findRecords(Entry, query),
    getEntryById: async (id) => queryFactory.findRecordById(Entry, id),
    updateEntry: async (id, entryData) => queryFactory.updateRecord(Entry, id, entryData),
    deleteEntry: async (id) => queryFactory.deleteRecord(Entry, id)
};