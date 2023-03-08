const todos = require("../models/todos.models");


class todosServices {
    static async create(newTodos) {
        try {
            const result = await todos.create(newTodos);
            return result
        } catch (error) {
            throw error

        }
    }
}


module.exports = todosServices;