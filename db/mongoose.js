const mongoose = require('mongoose');
require('dotenv').config()

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true,useUnifiedTopology: true})
                        .then(()=>{
                            console.log('Database connected successfully');
                        })
                        .catch((err)=>{
                            console.log("Unsuccessful connection of database. Caused by "+ err);
                        });

module.exports = {
    mongoose
}