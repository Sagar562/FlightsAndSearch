const express = require('express');
const { PORT } = require('./config/serverConfig');

const startServer = async() => {
    const app = express();
    app.listen(PORT, () => {
        console.log(`server started at ${PORT}`);
    })
}

startServer();