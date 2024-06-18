const { client, bearer } = require('./client');

const tweet = async () => {
    try {
        const tweet = await client.v2.tweet('test tweet');
    } catch (e) {
        console.log(e)
    }
}

const listFollowing = async (username) => {
    try {
        const getUserInfo = await bearer.v2.userByUsername(username);
        const userId = getUserInfo?.data?.id;
        const listFollowing = await bearer.v2.following(userId);
        const listFollowingUsername = listFollowing?.data?.map((record) => {
            return record?.username;
        });
        listFollowingUsername.sort();
        return listFollowingUsername;
    } catch (e) {
        console.log(e)
        return Promise.reject('Failed to get following of user');
    }
}

module.exports = {
    tweet,
    listFollowing
};
