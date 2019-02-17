import mongoose, { Schema } from 'mongoose';

const TweetSchema = new Schema({
  text: { 
    type:  String,
    maxlength: [144, 'Text too long'],
    minlength: [3, 'Text need to be longer']
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  favoriteCount: {
    type: Number,
    default: 0
    }
},
{ timestamps: true });

export default mongoose.model('Tweet', TweetSchema);
