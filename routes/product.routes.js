const router = require('express').Router();
const { upload } = require('../config/imageConfig');
const productController = require('../controllers/product.controller');

router.get('/product',productController.getAllProducts);
router.get('/product/:id',productController.getProductById);
router.post('/product',upload.single('image'),productController.createProduct);

module.exports = router;


