const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ProductStore',{useNewUrlParser: true})
                        .then(()=>{
                            console.log('Database connected successfully');
                        })
                        .catch((err)=>{
                            console.log("Unsuccessful connection of database. Caused by "+err);
                        });

module.exports = {
    mongoose
}