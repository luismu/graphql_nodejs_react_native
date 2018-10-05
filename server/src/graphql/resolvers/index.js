import GraphQLDate from 'graphql-date';
import TweetResolver from './tweet-resolvers';
import UserResolver from './user-resolvers';

export default {
  Date: GraphQLDate,
  Query: {
    getTweet: TweetResolver.getTweet,
    getTweets: TweetResolver.getTweets,
  },
  Mutation: {
    //Tweet
    createTweet: TweetResolver.createTweet,
    updateTweet: TweetResolver.updateTweet,
    deleteTweet: TweetResolver.deleteTweet,
    //User
    signup: UserResolver.signup
  },
};
