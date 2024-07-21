const { client, bearer } = require('./client');
const { successResponse, badrequestResponse, internalServerResponse } = require('./status-response/status_code');

const tweet = async (payload) => {
    try {
        const tweet = await client.v2.tweet(payload);
        if (tweet?.data) {
            return successResponse(tweet?.data, 'Posting tweet success');
        }
        if (tweet?.errors) {
            return badrequestResponse(tweet?.errors, 'Error posting tweet');
        }
    } catch (e) {
        console.log(e)
        return internalServerResponse(null, 'Error internal server');
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
