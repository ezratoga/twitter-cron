# twitter-cron
1. Make sure you have an developer account for Twitter. Then get API_CONSUMER_KEY, API_CONSUMER_SECRET, API_ACCESS_TOKEN_SECRET, API_ACCESS_TOKEN_KEY, API_BEARER_TOKEN. This is the tutorial: https://www.youtube.com/watch?v=rIyRrUAsaok
2. Connect to you own Redis Server. If you are new to Redis and haven't install Redis yet, you can check this tutorial: https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/install-redis-on-linux/
3. Create file named .env contains text below:
    TWITTER_CONSUMER_KEY=#YOUR_API_CONSUMER_KEY<br>
    TWITTER_CONSUMER_SECRET=#YOUR_API_CONSUMER_SECRET<br>
    TWITTER_ACCESS_TOKEN_KEY=#YOUR_ACCESS_TOKEN_KEY<br>
    TWITTER_ACCESS_TOKEN_SECRET=#YOUR_API_CONSUMER_SECRET<br>
    TWITTER_BEARER_TOKEN=#YOUR_API_BEARER_TOKEN<br>
    REDIS_URL=#YOUR_OWN_URL_REDIS_DATABASE<br>
    PORT=#YOUR_OWN_PORT<br>
4. Install NodeJS and NPM if you haven't installed in your own PC. Link tutorial: https://kinsta.com/blog/how-to-install-node-js/
5. Run `node index.js` in command-line. Then, your application is run in port 4000 or your defined port in `.env` file
