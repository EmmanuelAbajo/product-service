const { ProductRepo } = require('../repository/product-repository');
const { ObjectID } = require('mongodb');

const ProductService = {
    getAllProducts: (req, res) => {
        ProductRepo.getAllProducts()
            .then((data) => {
                res.status(200).json(data);
            }).catch((error) => {
                res.status(400).json({ error });
            })
    },

    getProductById: (req, res) => {
        let id = req.params.id;
        if (!ObjectID.isValid(id))
            return res.status(404).json({
                error: "Invalid id"
            });
        ProductRepo.getProductById(id)
            .then((data) => {
                res.status(200).json(data);
            }).catch((error) => {
                res.status(400).json(error);
            })
    }
}


module.exports =  ProductService; 