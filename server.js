const {connectdb} = require('./connect');
const express = require('express');
const cors = require('cors');
const controller = require('./controller');

const app = express();

app.use(cors());
app.use(express.json());


const port = 1234;
app.listen(port,()=>{console.log("Listening at the port "+port)})
console.log("listening at port number "+port)

connectdb()
    .then(()=>{console.log('db connected')})
    .catch((err)=>{console.log(err)});  

app.post('/api/books',controller.insertdata);
app.get('/api/books',controller.getall);
app.get('/api/books/:btit',controller.getone);
app.put('/api/books/:bid',controller.updatebook);
app.delete('/api/books/:bid',controller.deletebook);