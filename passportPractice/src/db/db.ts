import mongoose, { Schema, Document, Model } from 'mongoose';
export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || '');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
//user model
export interface IUser extends Document {
  email: string;
  password: string;
  name?: string;
}
const userSchema: Schema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String }
});
export const User = mongoose.model<IUser>('User', userSchema);
