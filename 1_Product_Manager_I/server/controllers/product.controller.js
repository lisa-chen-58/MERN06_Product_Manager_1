const Product = require("../models/product.model");

module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => {
            res.json( allProducts )
        })
        .catch((err) => {
            res.json({ message: 'Check your getAllProducts', error: err })
        });
}

module.exports.getProductByID = (req,res) => {
    Product.findOne({_id: req.params.id})
        .then(oneSingleProduct => {
            res.json( oneSingleProduct )
        })
        .catch((err) => {
            res.json({message: 'Check your oneSingleProduct', error: err})
        })
}

module.exports.createNewProduct = (req,res) => {
    Product.create(req.body)
    .then(newlyCreatedProduct => {
        res.json( newlyCreatedProduct )
    })
    .catch(err => {
        res.json({message: 'Check your createNewProduct', error: err })
    });}

module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body, { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            res.json({ updatedProduct })
        })
        .catch((err) => {
            res.json({ message: 'Check your updateExistingProduct', error: err })
        });}
    
    module.exports.deleteAnExistingProduct = (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then(result => {
                res.json({ result: result })
            })
            .catch((err) => {
                res.json({ message: 'Check your deleteOne', error: err })
            });}