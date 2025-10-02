import express from 'express';
import { body } from 'express-validator';
import { authenticate, authorize } from '../middleware/auth';

const router = express.Router();

// Validation rules
const contactValidation = [
  body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('subject').trim().isLength({ min: 5 }).withMessage('Subject must be at least 5 characters'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters'),
  body('phone').optional().trim(),
];

// Placeholder controllers
const submitContactForm = (req: any, res: any) => res.json({ success: true, message: 'Contact form submitted' });
const getAllContacts = (req: any, res: any) => res.json({ success: true, data: [], count: 0 });

// Public routes
router.post('/', contactValidation, submitContactForm);

// Protected routes
router.get('/', authenticate, authorize('admin', 'manager'), getAllContacts);

export default router;
