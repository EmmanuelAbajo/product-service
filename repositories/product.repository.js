const { Product } = require('../entities/product.entity');

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
            const data = await Product.findById(id).exec();
                if (!data) throw new Error('Id not found!');
            return data;     
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductRepository;