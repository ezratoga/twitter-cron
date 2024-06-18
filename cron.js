const cron = require('node-cron');
const twitterAPI = require('./twitterFunction');

const scheduler = cron.schedule('*/3 * * * *', async(username, cacheStoring) => {
    try {
        const getClient = await cacheStoring.getClient()
        const getKey = `following:${username}`;
        const getListFollowing = await twitterAPI.listFollowing(username);
        const getListFollowingFromCache = await getClient.get(getKey);
        
        if (getListFollowingFromCache && typeof getListFollowingFromCache === 'string') {
            const arrayListFollowing = getListFollowingFromCache.split(',');
            if (arrayListFollowing.length !== getListFollowing.length) {
                await getClient.set(getKey, getListFollowing.join(','));
                console.log('there\'s change in following');
            }
        } else {
            await getClient.set(getKey, getListFollowing.join(','));
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = {
    scheduler
};
