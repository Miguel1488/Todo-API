const { Router } = require("express");
const createTodos = require("../controllers/todos.cotrollers");

const routerTodos = Router();

routerTodos.post("/api/v1/todos", createTodos);



module.exports = routerTodos;