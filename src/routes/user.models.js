const { Router } = require("express");
const { createUsers, obtinenusers} = require("../controllers/users.controllers");

const routerusers = Router();
routerusers.get("/api/v1/users/:id/todos", obtinenusers);

routerusers.post("/api/v1/users",  createUsers);




module.exports = routerusers;