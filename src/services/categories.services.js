const categories = require("../models/categories.models");



class categoriesServices{
    static async create(newCategories){
        try {
            const result = await categories.create(newCategories);
            return result
        } catch (error) {
            throw error
            
        }
    }

    
}

module.exports = categoriesServices;

