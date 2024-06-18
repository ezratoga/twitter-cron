const databaseRedis = require('./database/redis');
const apiServer = require('./server');

const main = async () => {
    await databaseRedis.connect();

    apiServer.server();
};

main();