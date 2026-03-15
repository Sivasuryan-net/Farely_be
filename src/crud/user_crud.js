const User = require('../models/User');
const queryFactory = require('./../db/queryFactory');
// CRUD operations for User model using queryFactory
module.exports = {
    createUser: async (userData) => queryFactory.createRecord(User, userData),
    getUsers: async (query) => queryFactory.findRecords(User, query),
    getUserById: async (id) => queryFactory.findRecordById(User, id),
    updateUser: async (id, userData) => queryFactory.updateRecord(User, id, userData),
    deleteUser: async (id) => queryFactory.deleteRecord(User, id)
};