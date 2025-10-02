import express from 'express';
import { body } from 'express-validator';
import { authenticate, authorize } from '../middleware/auth';

const router = express.Router();

// Validation rules
const testimonialValidation = [
  body('clientName').trim().isLength({ min: 2 }).withMessage('Client name must be at least 2 characters'),
  body('content').trim().isLength({ min: 10, max: 500 }).withMessage('Content must be 10-500 characters'),
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
  body('clientPosition').optional().trim(),
  body('clientCompany').optional().trim(),
  body('projectType').optional().trim(),
];

// Placeholder controllers
const getAllTestimonials = (req: any, res: any) => res.json({ success: true, data: [], count: 0 });
const getTestimonialById = (req: any, res: any) => res.json({ success: true, data: {} });
const createTestimonial = (req: any, res: any) => res.json({ success: true, message: 'Testimonial created' });
const updateTestimonial = (req: any, res: any) => res.json({ success: true, message: 'Testimonial updated' });
const deleteTestimonial = (req: any, res: any) => res.json({ success: true, message: 'Testimonial deleted' });

// Public routes
router.get('/', getAllTestimonials);
router.get('/:id', getTestimonialById);

// Protected routes
router.post('/', authenticate, authorize('admin', 'manager'), testimonialValidation, createTestimonial);
router.put('/:id', authenticate, authorize('admin', 'manager'), testimonialValidation, updateTestimonial);
router.delete('/:id', authenticate, authorize('admin'), deleteTestimonial);

export default router;
