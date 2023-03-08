const todosServices = require("../services/todos.services");

const createTodos = async (req, res) => {
    try {
        const newTodos = req.body
        const result = await
            todosServices.create
                (newTodos);
        res.status(201).send(result)
    } catch (error) {
        res.status(400).json(error)

    }
}

module.exports = createTodos;