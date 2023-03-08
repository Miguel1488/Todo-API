const {Router} = require("express");
const createCategories = require("../controllers/categories.controllers");

const routercategories = Router();

routercategories.post("/api/v1/categories", createCategories);



module.exports = routercategories; 

