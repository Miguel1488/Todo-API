const Users = require("../models/user.models");
const Todos = require("../models/todos.models");
const Categories = require("../models/categories.models");



const initModels = () => {

    Users.hasMany(Todos, { foreignKey: "user_id" });

    Todos.belongsTo(Users, { foreignKey: "user_id" });

    Categories.hasMany(Todos, { foreignKey: "categories_id" });

    Todos.belongsTo(Categories, { foreignKey: "categories_id" })

}

module.exports = initModels;