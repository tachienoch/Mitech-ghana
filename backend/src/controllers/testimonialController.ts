import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

// Mock data for testimonials
let testimonials = [
  {
    _id: '1',
    clientName: 'Sarah Johnson',
    company: 'TechCorp Solutions',
    position: 'CEO',
    testimonial: 'Mitech Ghana delivered an exceptional software solution that transformed our business operations. Their team is professional, responsive, and truly understands client needs.',
    rating: 5,
    status: 'approved',
    featured: true,
    projectType: 'Custom Software Development',
    avatar: '/images/testimonials/sarah-johnson.jpg',
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-01-10T10:00:00Z'
  }
];

export const getAllTestimonials = async (req: Request, res: Response) => {
  try {
    res.json({
      success: true,
      data: testimonials,
      total: testimonials.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch testimonials'
    });
  }
};

export const getTestimonialById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const testimonial = testimonials.find(t => t._id === id);
    
    if (!testimonial) {
      return res.status(404).json({
        success: false,
        error: 'Testimonial not found'
      });
    }
    
    res.json({
      success: true,
      data: testimonial
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch testimonial'
    });
  }
};

export const createTestimonial = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const newTestimonial = {
      _id: (testimonials.length + 1).toString(),
      ...req.body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    testimonials.push(newTestimonial);

    res.status(201).json({
      success: true,
      data: newTestimonial,
      message: 'Testimonial created successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to create testimonial'
    });
  }
};

export const updateTestimonial = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const testimonialIndex = testimonials.findIndex(t => t._id === id);
    
    if (testimonialIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Testimonial not found'
      });
    }

    const updatedTestimonial = {
      ...testimonials[testimonialIndex],
      ...req.body,
      updatedAt: new Date().toISOString()
    };

    testimonials[testimonialIndex] = updatedTestimonial;

    res.json({
      success: true,
      data: updatedTestimonial,
      message: 'Testimonial updated successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update testimonial'
    });
  }
};

export const deleteTestimonial = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const testimonialIndex = testimonials.findIndex(t => t._id === id);
    
    if (testimonialIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Testimonial not found'
      });
    }

    testimonials.splice(testimonialIndex, 1);

    res.json({
      success: true,
      message: 'Testimonial deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to delete testimonial'
    });
  }
};
