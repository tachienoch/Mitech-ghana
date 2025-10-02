import express from 'express';
import { body } from 'express-validator';
import { 
  getAllProducts, 
  getProductById, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} from '../controllers/productController';
import { authenticate, authorize } from '../middleware/auth';

const router = express.Router();

// Validation rules
const productValidation = [
  body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('description').trim().isLength({ min: 10 }).withMessage('Description must be at least 10 characters'),
  body('shortDescription').trim().isLength({ min: 5, max: 200 }).withMessage('Short description must be 5-200 characters'),
  body('category').isIn(['POS', 'HMS', 'SMS', 'School Management', 'Other']),
  body('features').isArray({ min: 1 }).withMessage('At least one feature is required'),
  body('technologies').isArray({ min: 1 }).withMessage('At least one technology is required'),
  body('order').optional().isNumeric(),
];

// Public routes
router.get('/', getAllProducts);
router.get('/:id', getProductById);

// Protected routes (admin/manager only)
router.post('/', authenticate, authorize('admin', 'manager'), productValidation, createProduct);
router.put('/:id', authenticate, authorize('admin', 'manager'), productValidation, updateProduct);
router.delete('/:id', authenticate, authorize('admin'), deleteProduct);

export default router;
