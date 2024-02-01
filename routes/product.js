const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

router.post('/', ProductController.createProduct);
router.get('/', ProductController.getProducts);
router.get('/:productId', ProductController.getProduct);
router.patch('/:productId', ProductController.updateProduct);
router.delete('/:productId', ProductController.deleteProduct);

module.exports = router;