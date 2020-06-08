const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost';
const MONGO_PORT = process.env.MONGO_PORT || '27018';
const MONGO_DB = process.env.MONGO_DB || 'pomar-db';

mongoose.connect(`${MONGO_URL}:${MONGO_PORT}/${MONGO_DB}`, {useNewUrlParser: true});