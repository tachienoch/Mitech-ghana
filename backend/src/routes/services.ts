import express from 'express';
import { body } from 'express-validator';
import { 
  getAllServices, 
  getServiceById, 
  createService, 
  updateService, 
  deleteService 
} from '../controllers/serviceController';
import { authenticate, authorize } from '../middleware/auth';

const router = express.Router();

// Validation rules
const serviceValidation = [
  body('title').trim().isLength({ min: 2 }).withMessage('Title must be at least 2 characters'),
  body('description').trim().isLength({ min: 10 }).withMessage('Description must be at least 10 characters'),
  body('shortDescription').trim().isLength({ min: 5, max: 200 }).withMessage('Short description must be 5-200 characters'),
  body('icon').notEmpty().withMessage('Icon is required'),
  body('features').isArray({ min: 1 }).withMessage('At least one feature is required'),
  body('category').isIn(['software-development', 'web-development', 'digital-marketing', 'ready-made-systems']),
  body('order').optional().isNumeric(),
];

// Public routes
router.get('/', getAllServices);
router.get('/:id', getServiceById);

// Protected routes (admin/manager only)
router.post('/', authenticate, authorize('admin', 'manager'), serviceValidation, createService);
router.put('/:id', authenticate, authorize('admin', 'manager'), serviceValidation, updateService);
router.delete('/:id', authenticate, authorize('admin'), deleteService);

export default router;
