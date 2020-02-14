const express = require('express');
const { ObjectID } = require('mongodb');
const { upload } = require('../config/imageConfig');
const ProductRepo = require('../repository/product-repository');


function routes(Product) {
    const ProductRouter = express.Router();

    ProductRouter.route('/product')
        .get((req, res) => {
            ProductRepo.getAllProducts()
                .then((data) => {
                    res.status(200).json(data);
                }).catch((error) => {
                    res.status(400).json({ error });
                })
        })

        .post(upload.single('image'), (req, res) => {
            const url = req.protocol + '://' + req.get('host');
            let product = new Product({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                category: req.body.category,
                image: url + '/uploads/' + req.file.filename,
                color: req.body.color
            });
            product.save().then((data) => {
                res.status(201).json(data)
            }).catch((err) => {
                res.status(400).json({
                    error: err
                });
            });
        });

    ProductRouter.route('/product/:id')
        .get((req, res) => {
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
        });

    return ProductRouter;
}

module.exports = routes;