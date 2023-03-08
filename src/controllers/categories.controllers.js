const categoriesServices = require("../services/categories.services");

const createCategories = async (req, res) => {
    try {
        const newCategories = req.body
        const result = await categoriesServices.create(newCategories);
        res.status(201).send(result)
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = createCategories;
