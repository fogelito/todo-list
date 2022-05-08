const express = require("express");

const app = express();

app.use(express.static('public'));

const server = app.listen(1975, function () {
    const port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});
