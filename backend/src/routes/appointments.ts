import express from 'express';
import { body } from 'express-validator';
import { 
  getAllAppointments, 
  getAppointmentById, 
  createAppointment, 
  updateAppointment, 
  deleteAppointment 
} from '../controllers/appointmentController';
import { authenticate, authorize } from '../middleware/auth';

const router = express.Router();

// Validation rules
const appointmentValidation = [
  body('clientName').trim().isLength({ min: 2 }).withMessage('Client name must be at least 2 characters'),
  body('clientEmail').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('clientPhone').trim().isLength({ min: 10 }).withMessage('Valid phone number is required'),
  body('serviceType').notEmpty().withMessage('Service type is required'),
  body('appointmentDate').isISO8601().withMessage('Valid date is required'),
  body('appointmentTime').notEmpty().withMessage('Appointment time is required'),
  body('message').optional().isLength({ max: 1000 }),
];

const updateAppointmentValidation = [
  body('status').optional().isIn(['pending', 'confirmed', 'completed', 'cancelled', 'rescheduled']),
  body('notes').optional().isLength({ max: 1000 }),
];

// Public routes
router.post('/', appointmentValidation, createAppointment);

// Protected routes (admin/manager only)
router.get('/', authenticate, authorize('admin', 'manager'), getAllAppointments);
router.get('/:id', authenticate, authorize('admin', 'manager'), getAppointmentById);
router.put('/:id', authenticate, authorize('admin', 'manager'), updateAppointmentValidation, updateAppointment);
router.delete('/:id', authenticate, authorize('admin'), deleteAppointment);

export default router;
