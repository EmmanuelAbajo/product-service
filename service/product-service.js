const { ProductRepo } = require('../repository/product-repository');
const { ObjectID } = require('mongodb');

export class ProductService {
    getAllProducts(req,res){
        try {
            let {count,products} = ProductRepo.getAllProducts();
            res.status(200).json({count,products});
         } catch (error) {
             res.status(400).json({error});
         }
    }

    getProductById(req,res){
        let id = req.params.id;
            if (!ObjectID.isValid(id)) return res.status(404).json({
                error: "Invalid id"
            });
            try {
                let data = ProductRepo.getProductById(id);
                res.status(200).json(data);
            } catch (error) {
                res.status(400).json(error);
            }
    }
}


module.exports = { ProductService }