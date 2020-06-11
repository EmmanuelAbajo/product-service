const { Product } = require('../entities/product.entity');
const { ObjectID } = require('mongodb');
const ProductRepo = require('../repositories/product.repository');
const fs = require('fs');


exports.getAllProducts = (req, res) => {
    ProductRepo.getAllProducts()
        .then((data) => {
            res.status(200).json(data);
        }).catch((error) => {
            res.status(400).json({ error });
        })
}

// Converts a binary file to a base64 encoded string and then returns a buffer.
// Storing an image to db as base64 adds a 30% overhead. Binary is better
// Best practice is to store the image on fs and the location/ref on db
const prepImage = (req) => {
    let img = fs.readFileSync(req.file.path);
    let encodedImg = img.toString('base64');
    return Buffer.from(encodedImg,'base64');
}

exports.createProduct = (req, res) => {
    const url = req.protocol + '://' + req.get('host');
    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: {
            data: url + '/uploads/' + req.file.filename, 
            contentType: req.file.mimetype,
            size: req.file.size
        },
        color: req.body.color
    });
    product.save().then((data) => {
        res.status(201).json(data)
    }).catch((err) => {
        res.status(400).json({
            error: err
        });
    });
}

exports.getProductById = (req, res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id))
           return res.status(404).json({
            error: "Invalid id"
        });
    ProductRepo.getProductById(id)
        .then((data) => {
            res.status(200).json(data);
        }).catch((error) => {
            res.status(400).json({error:error.message});
        })
}