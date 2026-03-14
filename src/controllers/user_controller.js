const crud = require('../crud/user_crud');

const createUser = async (req, res) => {
    // #swagger.tags = ['Users']
    // #swagger.description = 'Endpoint to create a new user.'
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Name, email, and password are required' });
        }
        const user = await crud.createUser({
            name,
            email,
            password
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUsers = async (req, res) => {
    // #swagger.tags = ['Users']
    // #swagger.description = 'Endpoint to retrieve a list of users. Supports query parameters for filtering.'
    try {
        const users = await crud.getUsers(req.query);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserById = async (req, res) => {
    // #swagger.tags = ['Users']
    // #swagger.description = 'Endpoint to retrieve a user by their unique ID.'
    try {
        const user = await crud.getUserById(req.params.id);
        if (!user) {    
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    // #swagger.tags = ['Users']
    // #swagger.description = 'Endpoint to update a user by their unique ID.'
    try {
        const { name, email, password } = req.body;
        if (!name && !email && !password) {
            return res.status(400).json({ error: 'At least one of name, email, or password must be provided for update' });
        }
        const updatedUser = await crud.updateUser(req.params.id, {
            name,
            email,
            password
        });
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    // #swagger.tags = ['Users']
    // #swagger.description = 'Endpoint to delete a user by their unique ID.'
    try {
        const result = await crud.deleteUser(req.params.id);
        if (result.error) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};
