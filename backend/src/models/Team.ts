import mongoose, { Document, Schema } from 'mongoose';

export interface ITeamMember extends Document {
  name: string;
  position: string;
  bio: string;
  image?: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  skills: string[];
  isActive: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const teamSchema = new Schema<ITeamMember>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  position: {
    type: String,
    required: true,
    trim: true,
  },
  bio: {
    type: String,
    required: true,
    maxlength: 500,
  },
  image: {
    type: String,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
  },
  linkedin: {
    type: String,
  },
  twitter: {
    type: String,
  },
  skills: [{
    type: String,
    trim: true,
  }],
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

export default mongoose.model<ITeamMember>('TeamMember', teamSchema);
