const { Sequelize } = require("sequelize");

const db = new Sequelize({
    database: "todo_list",
    port: 5432,
    host: "localhost",
    username: "postgres",
    password: "admin",
    dialect: "postgres"

});

module.exports = db;