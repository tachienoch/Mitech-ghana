import express from 'express';
import { body } from 'express-validator';
import { authenticate, authorize } from '../middleware/auth';

const router = express.Router();

// Validation rules
const blogValidation = [
  body('title').trim().isLength({ min: 5 }).withMessage('Title must be at least 5 characters'),
  body('content').trim().isLength({ min: 50 }).withMessage('Content must be at least 50 characters'),
  body('excerpt').trim().isLength({ min: 10, max: 300 }).withMessage('Excerpt must be 10-300 characters'),
  body('category').notEmpty().withMessage('Category is required'),
  body('tags').optional().isArray(),
];

// Placeholder controllers (to be implemented)
const getAllBlogs = (req: any, res: any) => res.json({ success: true, data: [], count: 0 });
const getBlogById = (req: any, res: any) => res.json({ success: true, data: {} });
const createBlog = (req: any, res: any) => res.json({ success: true, message: 'Blog created' });
const updateBlog = (req: any, res: any) => res.json({ success: true, message: 'Blog updated' });
const deleteBlog = (req: any, res: any) => res.json({ success: true, message: 'Blog deleted' });

// Public routes
router.get('/', getAllBlogs);
router.get('/:id', getBlogById);

// Protected routes
router.post('/', authenticate, authorize('admin', 'manager'), blogValidation, createBlog);
router.put('/:id', authenticate, authorize('admin', 'manager'), blogValidation, updateBlog);
router.delete('/:id', authenticate, authorize('admin'), deleteBlog);

export default router;
