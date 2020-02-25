const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');

const { mongoose } = require('./db/mongoose');
const { Product } = require('./entities/product-detail');
const ProductRouter = require('./routes/product-routes')(Product);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // enables CORS for all routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+'/client'));
app.use('/uploads',express.static('uploads'));
app.use('/api',ProductRouter);
app.use((error,req,res,next)=>{ // Handles internal server errors
    res.status(500).json({error: error.message});
    next();
});

// app.get('*',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'client','build','index.html'));
// });

app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
});

