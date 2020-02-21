const { Product } = require('../entities/product-detail');

const ProductRepository = {

    getAllProducts: async () => {
        try {
            const count = await Product.estimatedDocumentCount({});
            const products = await Product.find()
            // .select("_id name price")
            .exec();
            return { count, products }
        } catch (error) {
            throw error;
        }
    },

    getProductById: async (id) => {
        try {
            const data = await Product.findById(id)
                // .select("_id name description price category image color")
                .exec();
            return data;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductRepository;