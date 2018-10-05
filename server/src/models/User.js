import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  userName: {
    type: String,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: String,
  avatar: String,
  password: String,
  email: String,
}, {timestamps: true});

export default mongoose.model('User', UserSchema);
