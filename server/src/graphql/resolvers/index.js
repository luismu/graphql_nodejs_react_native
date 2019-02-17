import GraphQLDate from 'graphql-date';
import TweetResolver from './tweet-resolvers';
import UserResolver from './user-resolvers';
import User from '../../models/User';

export default {
  Date: GraphQLDate,
  Tweet: {
    user: ({user}) => User.findById(user),
  },
  Query: {
    getTweet: TweetResolver.getTweet,
    getTweets: TweetResolver.getTweets,
    getUserTweets: TweetResolver.getUserTweets,
    me: UserResolver.me,
  },
  Mutation: {
    //Tweet
    createTweet: TweetResolver.createTweet,
    updateTweet: TweetResolver.updateTweet,
    deleteTweet: TweetResolver.deleteTweet,
    //User
    signup: UserResolver.signup,
    login: UserResolver.login,
    updateMe: UserResolver.updateMe,

  },
};
