import mongoose, { Document, Schema } from 'mongoose';

export interface IService extends Document {
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  price?: {
    type: 'fixed' | 'starting' | 'custom';
    amount?: number;
    currency: string;
  };
  category: 'software-development' | 'web-development' | 'digital-marketing' | 'ready-made-systems';
  isActive: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const serviceSchema = new Schema<IService>({
  title: {
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
  icon: {
    type: String,
    required: true,
  },
  features: [{
    type: String,
    required: true,
  }],
  price: {
    type: {
      type: String,
      enum: ['fixed', 'starting', 'custom'],
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
  },
  category: {
    type: String,
    enum: ['software-development', 'web-development', 'digital-marketing', 'ready-made-systems'],
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  order: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

export default mongoose.model<IService>('Service', serviceSchema);
