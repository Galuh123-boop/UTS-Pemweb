import express from 'express';
import { createCategory, deleteCategory, getCategory, showCategory, updateCategory } from '../controllers/categoryController.js';

const router = express.Router();

router.get('/', getCategory);
router.post('/', createCategory);
router.get('/:id', showCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

export default router;