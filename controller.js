const {Details} = require('./schema');

module.exports.insertdata = async(req,res) => {
    console.log(req.body);
    const Book = new Details({
    bookid : Number(req.body.bookid), 
    booktitle : req.body.booktitle,
    publishername : req.body.publishername,
    category : req.body.category,  
    price : Number(req.body.price)
    });
    const fBook = await Details.findOne({bookid:req.body.bookid});
    if(fBook)
    {
        res.send({msg:"DATA ALREADY EXISTS"});
    }
    else
    {
        const bookdata = await Book.save();
        console.log(bookdata);
        res.send(bookdata);
    }
};

module.exports.getall = async(req,res) =>{
    const books = await Details.find({});
    if(books)
    {
        res.send(books);
    }
    else
    {
        res.send({msg:"No book found"});
    }
    console.log(books);
}
module.exports.getone = async(req,res) =>{
    const books = await Details.findOne({booktitle: req.params.btit})
    console.log(req.params.btit)
    console.log(books)
    if(books)
    {
        res.send(books)
    }
    else
    {
        res.send({msg:"Book not found"})
    }
}
module.exports.updatebook = async(req,res) =>{
    console.log(req.body)
    const fBook = await Details.findOneAndUpdate({bookid: Number(req.params.bid)},{$set:{
        booktitle : req.body.booktitle,
        publishername : req.body.publishername,
        category : req.body.category,  
        price : Number(req.body.price)
        }})
    if(fBook)
    {
        const book1 = await Details.findOne({bookid: Number(req.params.bid)});
        res.send(book1)
    }
    else
    {
        res.send({msg:"Book not found"})
    }
}
module.exports.deletebook = async(req,res) =>{
    const book = await Details.findOne({bookid : Number(req.params.bid)});
    if(book)
    {
        const book1 = await Details.findOneAndDelete({bookid : Number(req.params.bid)});
        res.send("SUCCESSFULLY DELECTED");
    }
    else
    {
        res.send("BOOK NOT FOUND");
    }
}