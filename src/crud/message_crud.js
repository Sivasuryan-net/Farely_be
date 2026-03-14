const messageModel = require('../models/Message');
const queryFactory = require('./../db/queryFactory');

module.exports = {
    createMessage: async (messageData) => queryFactory.createRecord(messageModel, messageData),
    getMessages: async (query) => queryFactory.findRecords(messageModel, query),
    getMessageById: async (id) => queryFactory.findRecordById(messageModel, id),
    updateMessage: async (id, messageData) => queryFactory.updateRecord(messageModel, id, messageData),
    deleteMessage: async (id) => queryFactory.deleteRecord(messageModel, id)
};