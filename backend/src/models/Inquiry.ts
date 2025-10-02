import mongoose, { Document, Schema } from 'mongoose';

export interface IInquiry extends Document {
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  company?: string;
  subject: string;
  message: string;
  serviceType?: string;
  budget?: {
    min?: number;
    max?: number;
    currency: string;
  };
  timeline?: string;
  status: 'new' | 'in-progress' | 'quoted' | 'closed' | 'converted';
  priority: 'low' | 'medium' | 'high';
  assignedTo?: mongoose.Types.ObjectId;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const inquirySchema = new Schema<IInquiry>({
  clientName: {
    type: String,
    required: true,
    trim: true,
  },
  clientEmail: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  clientPhone: {
    type: String,
    trim: true,
  },
  company: {
    type: String,
    trim: true,
  },
  subject: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String,
  },
  budget: {
    min: {
      type: Number,
      min: 0,
    },
    max: {
      type: Number,
      min: 0,
    },
    currency: {
      type: String,
      default: 'USD',
    },
  },
  timeline: {
    type: String,
  },
  status: {
    type: String,
    enum: ['new', 'in-progress', 'quoted', 'closed', 'converted'],
    default: 'new',
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
  assignedTo: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  notes: {
    type: String,
  },
}, {
  timestamps: true,
});

export default mongoose.model<IInquiry>('Inquiry', inquirySchema);
