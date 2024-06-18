require('dotenv').config();

const twitter = require('twitter-api-v2');
const { TwitterApi } = twitter;

const twitterClient = new TwitterApi({
    appKey: process.env.TWITTER_CONSUMER_KEY,
    appSecret: process.env.TWITTER_CONSUMER_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN_KEY,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const twitterBearer = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);

const client = twitterClient.readWrite;
const bearer = twitterBearer.readOnly;

module.exports = {
    client,
    bearer
};
