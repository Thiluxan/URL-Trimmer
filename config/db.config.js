const mongoose = require('mongoose');

const DB_URL = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-4adhavm-shard-00-00.llybyt1.mongodb.net:27017,ac-4adhavm-shard-00-01.llybyt1.mongodb.net:27017,ac-4adhavm-shard-00-02.llybyt1.mongodb.net:27017/?ssl=true&replicaSet=atlas-k9jlqx-shard-0&authSource=admin&retryWrites=true&w=majority`;

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

module.exports = connection