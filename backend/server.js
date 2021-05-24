const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose');
const app = express()
app.use(express.json())
app.use(require("cors")())
require("./routes")(app)
const port = process.env.PORT || 3000
const connection = connect();
connection
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', () => {
        console.info('db connected');
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
        })
    });

function connect() {
    var options = {
        keepAlive: 1,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    };
    mongoose.connect(process.env.MONGODB_URL, options);
    return mongoose.connection;
}