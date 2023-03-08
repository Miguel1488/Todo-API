const Todos = require("../models/todos.models");
const users = require("../models/user.models");
const Categories = require("../models/categories.models");


class usersServices {
    static async create(newUsers) {
        try {
            const result = await users.create(newUsers);
            return result
        } catch (error) {
            throw error

        }
    }
    static async getUsers(id) {
        try {
            const result = await users.findByPk(id, {

                include: [
                    {
                        model: Todos,
                        include: [
                            {
                                model: Categories

                            }
                        ]

                    }
                ]
            })
            return result
        } catch (error) {
            throw (error)
        }
    }
}


module.exports = usersServices;