import mongoose, { Document, Schema } from 'mongoose';

export interface ITestimonial extends Document {
  clientName: string;
  clientPosition?: string;
  clientCompany?: string;
  clientImage?: string;
  content: string;
  rating: number;
  projectType?: string;
  isActive: boolean;
  isFeatured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const testimonialSchema = new Schema<ITestimonial>({
  clientName: {
    type: String,
    required: true,
    trim: true,
  },
  clientPosition: {
    type: String,
    trim: true,
  },
  clientCompany: {
    type: String,
    trim: true,
  },
  clientImage: {
    type: String,
  },
  content: {
    type: String,
    required: true,
    maxlength: 500,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  projectType: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  order: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

export default mongoose.model<ITestimonial>('Testimonial', testimonialSchema);
