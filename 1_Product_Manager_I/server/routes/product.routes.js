const ProductController = require('../controllers/product.controller');
module.exports = (app) => {
    app.get('/api/products', ProductController.getAllProducts);
    app.post('/api/products', ProductController.createNewProduct);
    app.get('/api/products/:id', ProductController.getProductByID);
    app.put('/api/products/:id', ProductController.updateExistingProduct);
    app.delete('/api/products/:id', ProductController.deleteAnExistingProduct);}