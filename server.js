const express = require('express');
const app = express();
const cron = require('./cron');
const twitterFunction = require('./twitterFunction');
const redis = require('./database/redis');

app.set("port", process.env.PORT || 4000);

app.post('/:username', async (req, res) => {
   res.writeHead(200, {'Content-Type': 'application/json'});
   cron.scheduler(req.params.username, redis);
   const response = { "response" : "Finding new followers in every 3 minutes for username: " + req.params.username + "." }
   console.log(response);
   res.end(JSON.stringify(response));
});

app.get('/following/:username', async (req, res) => {
    try {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const getListFollowing = await twitterFunction.listFollowing(req.params.username)
        const response = { "data" : getListFollowing, code: 200 };
        res.end(JSON.stringify(response));   
    } catch (error) {
        res.end(JSON.stringify({code: 500, message: 'Internal Server Error'}));
    }
 });

const server = app.listen(app.get("port"), function () {

  const host = server.address().address
  const port = server.address().port

  console.log("Node.js API app listening at http://%s:%s", host, port)

});

module.exports = {
    server
};
