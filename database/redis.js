const { createClient } = require('redis');
require('dotenv').config();
let client;

const connect = async () => {
    try {
        client = await createClient({
            url: process.env.REDIS_URL,
        }).on('error', err => console.log('Redis Client Error', err))
        .connect();
    } catch (error) {
        console.log(error);
    }
};

const getClient = async () => {
    try {
        if (client !== undefined) {
            return client;
        }
    } catch (error) {
        return error;
    }
};

module.exports = {
    connect,
    getClient
}