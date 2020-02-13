const { Product } = require('./entities/product-detail');

class ProductRepository {
    getAllProducts() {
        Product.estimatedDocumentCount({}).then((count) => {
            Product.find()
                .select("_id name price")
                .exec()
                .then((products) => {
                   return {count,products};
                }).catch((err) => {
                    throw err;
                });
        }).catch((err) => {
            throw err;
        });
    }
}

module.exports = ProductRepository;