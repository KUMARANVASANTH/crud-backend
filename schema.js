const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookid : Number,
    booktitle : String,
    publishername : String ,
    category : String,  
    price : Number
});

module.exports.Details = mongoose.model("Details",bookSchema);