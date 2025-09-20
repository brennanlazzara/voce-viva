import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  googleId: string;
  email: string;
  name: string;
  profilePicture?: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema: Schema = new Schema({
  googleId: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
    default: null
  }
}, {
  timestamps: true
});

export default mongoose.model<IUser>('User', userSchema);