const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');
const productRoutes = require('./routes/product.routes')
const { mongoose } = require('./db/mongoose');
require('dotenv').config()


const app = express();
const port = process.env.PORT || 3000;

// enabling CORS for all routes
app.use(cors()); 

// express can be used in place of bodyoarser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Setting up static directory
app.use(express.static(__dirname+'/client'));
app.use('/uploads',express.static('uploads'));

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/api/v1/',productRoutes);

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

