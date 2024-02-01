const express = require('express');
const router = express.Router();
const VariantController = require('../controllers/VariantController');

router.post('/', VariantController.createVariant);
router.get('/', VariantController.getVariants);
router.get('/:variantId', VariantController.getVariant);
router.patch('/:variantId', VariantController.updateVariant);
router.delete('/:variantId', VariantController.deleteVariant);

module.exports = router;