const usersServices = require("../services/users.services");
const obtinenusers = async (req, res) => {
    try {
        const { id } = req.params;
        const users = await usersServices.getUsers(id)
        res.json(users)
    } catch (error) {
        res.status(400).json(error)

    }
}

const createUsers = async (req, res) => {
    try {
        const newUsers = req.body
        const result = await
            usersServices.create
                (newUsers);
        res.status(201).send(result)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    obtinenusers,
    createUsers

}