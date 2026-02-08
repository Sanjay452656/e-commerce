import express from 'express'
import { createProduct, getProducts, getProductsById } from '../controllers/product.controller.js';

const router = express.Router();

router.get('/',getProducts)
router.get('/:id',getProductsById)
router.post('/',createProduct);

export default router