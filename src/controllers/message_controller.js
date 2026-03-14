const crud = require('../crud/message_crud');

const createMessage = async (req, res) => {
    // #swagger.tags = ['Messages']
    // #swagger.description = 'Endpoint to create a new message.'
    try {
        const { userId, userName , text } = req.body;
        const message = await crud.createMessage({
            userId,
            userName,
            text
        });
        res.status(201).json(message);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getMessages = async (req, res) => {
    // #swagger.tags = ['Messages']
    // #swagger.description = 'Endpoint to retrieve a list of messages. Supports query parameters for filtering.'
    try {
        const messages = await crud.getMessages(req.query);
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getMessageById = async (req, res) => {
    // #swagger.tags = ['Messages']
    // #swagger.description = 'Endpoint to retrieve a message by its unique ID.'
    try {
        const message = await crud.getMessageById(req.params.id);
        if (!message) {
            return res.status(404).json({ error: 'Message not found' });
        }
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateMessage = async (req, res) => {
    // #swagger.tags = ['Messages']
    // #swagger.description = 'Endpoint to update a message by its unique ID.'
    try {
        const { userId, userName, text } = req.body;
        const updatedMessage = await crud.updateMessage(req.params.id, {
            userId,
            userName,
            text
        });
        if (!updatedMessage) {
            return res.status(404).json({ error: 'Message not found' });
        }   
        res.status(200).json(updatedMessage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteMessage = async (req, res) => {
    // #swagger.tags = ['Messages']
    // #swagger.description = 'Endpoint to delete a message by its unique ID.'
    try {       
        const result = await crud.deleteMessage(req.params.id);
        if (result.error) {
            return res.status(404).json({ error: 'Message not found' });
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createMessage,
    getMessages,
    getMessageById,
    updateMessage,
    deleteMessage
};