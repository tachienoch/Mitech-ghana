import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  shortDescription: string;
  category: 'POS' | 'HMS' | 'SMS' | 'School Management' | 'Other';
  features: string[];
  technologies: string[];
  images: string[];
  demoUrl?: string;
  price?: {
    type: 'fixed' | 'subscription' | 'custom';
    amount?: number;
    currency: string;
    period?: 'monthly' | 'yearly' | 'one-time';
  };
  isActive: boolean;
  isFeatured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
    maxlength: 200,
  },
  category: {
    type: String,
    enum: ['POS', 'HMS', 'SMS', 'School Management', 'Other'],
    required: true,
  },
  features: [{
    type: String,
    required: true,
  }],
  technologies: [{
    type: String,
    required: true,
  }],
  images: [{
    type: String,
  }],
  demoUrl: {
    type: String,
  },
  price: {
    type: {
      type: String,
      enum: ['fixed', 'subscription', 'custom'],
      default: 'custom',
    },
    amount: {
      type: Number,
      min: 0,
    },
    currency: {
      type: String,
      default: 'USD',
    },
    period: {
      type: String,
      enum: ['monthly', 'yearly', 'one-time'],
    },
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

export default mongoose.model<IProduct>('Product', productSchema);
