const mongoose = require('mongoose');
const config = require('./config');


const db_url = config.mongo_url;

const db_connect = mongoose.connect(db_url);

db_connect.then((db) => {
    console.log("Connection with database Successfull......")
}, ((err) => console.log(err))).catch((err) => console.log(err))