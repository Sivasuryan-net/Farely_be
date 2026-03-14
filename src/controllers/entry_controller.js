const crud = require('../crud/entry_crud');

const createEntry = async (req, res) => {
    // #swagger.tags = ['Entries']
    // #swagger.description = 'Endpoint to create a new entry.'
    try {
        const { userId, type, data } = req.body;
        const entry = await crud.createEntry({
            userId,
            type,
            data
        });
        res.status(201).json(entry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getEntries = async (req, res) => {
    // #swagger.tags = ['Entries']
    // #swagger.description = 'Endpoint to retrieve a list of entries. Supports query parameters for filtering.'
    try {
        const entries = await crud.getEntries(req.query);
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getEntryById = async (req, res) => {
    // #swagger.tags = ['Entries']
    // #swagger.description = 'Endpoint to retrieve an entry by its unique ID.'
    try {
        const entry = await crud.getEntryById(req.params.id);
        if (!entry) {
            return res.status(404).json({ error: 'Entry not found' });
        }
        res.status(200).json(entry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateEntry = async (req, res) => {
    // #swagger.tags = ['Entries']
    // #swagger.description = 'Endpoint to update an entry by its unique ID.'
    try {
        const { userId, type, data } = req.body;
        const updatedEntry = await crud.updateEntry(req.params.id, {
            userId,
            type,
            data
        });
        if (!updatedEntry) {
            return res.status(404).json({ error: 'Entry not found' });
        }
        res.status(200).json(updatedEntry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};      

const deleteEntry = async (req, res) => {
    // #swagger.tags = ['Entries']
    // #swagger.description = 'Endpoint to delete an entry by its unique ID.'
    try {
        const result = await crud.deleteEntry(req.params.id);
        if (result.error) {
            return res.status(404).json({ error: 'Entry not found' });
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createEntry,
    getEntries,
    getEntryById,
    updateEntry,
    deleteEntry
};  