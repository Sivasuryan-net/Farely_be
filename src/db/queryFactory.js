const createRecord = async (model, data) => {
    try {
        const record = new model(data);
        await record.save();
        return record;
    } catch (error) {
        throw new Error(`Error creating record: ${error.message}`);
    }
};

const findRecords = async (model, query) => {
    try {
        const records = await model.find(query);
        return records;
    }
    catch (error) {
        throw new Error(`Error finding records: ${error.message}`);
    }
};

const findRecordById = async (model, id) => {
    try {
        const record = await model.find
        .findById(id);
        return record;
    } catch (error) {
        throw new Error(`Error finding record by ID: ${error.message}`);
    }
};

const updateRecord = async (model, id, data) => {
    try {
        const updatedRecord = await model.findByIdAndUpdate(id, data, { new: true });
        return updatedRecord;
    } catch (error) {
        throw new Error(`Error updating record: ${error.message}`);
    }
};

const deleteRecord = async (model, id) => {
    try {
        await model.findByIdAndDelete(id);
        return { message: 'Record deleted successfully' };
    } catch (error) {
        throw new Error(`Error deleting record: ${error.message}`);
    }
};

module.exports = {
    createRecord,
    findRecords,
    findRecordById,
    updateRecord,
    deleteRecord
};