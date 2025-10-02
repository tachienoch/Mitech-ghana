import express from 'express';
import { body } from 'express-validator';
import { 
  getAllInquiries, 
  getInquiryById, 
  createInquiry, 
  updateInquiry, 
  deleteInquiry 
} from '../controllers/inquiryController';
import { authenticate, authorize } from '../middleware/auth';

const router = express.Router();

// Validation rules
const inquiryValidation = [
  body('clientName').trim().isLength({ min: 2 }).withMessage('Client name must be at least 2 characters'),
  body('clientEmail').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('subject').trim().isLength({ min: 5 }).withMessage('Subject must be at least 5 characters'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters'),
  body('clientPhone').optional().trim(),
  body('company').optional().trim(),
  body('serviceType').optional().trim(),
  body('timeline').optional().trim(),
];

const updateInquiryValidation = [
  body('status').optional().isIn(['new', 'in-progress', 'quoted', 'closed', 'converted']),
  body('priority').optional().isIn(['low', 'medium', 'high']),
  body('assignedTo').optional().isMongoId(),
  body('notes').optional().trim(),
];

// Public routes
router.post('/', inquiryValidation, createInquiry);

// Protected routes (admin/manager only)
router.get('/', authenticate, authorize('admin', 'manager'), getAllInquiries);
router.get('/:id', authenticate, authorize('admin', 'manager'), getInquiryById);
router.put('/:id', authenticate, authorize('admin', 'manager'), updateInquiryValidation, updateInquiry);
router.delete('/:id', authenticate, authorize('admin'), deleteInquiry);

export default router;
