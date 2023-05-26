const mongoose = require('mongoose');
module.exports.connectdb = () => {
    return mongoose.connect('mongodb+srv://vasanth:vasanth@testing.tngqamu.mongodb.net/books');
};
