const mongoose = require('mongoose')
mongoose.Promise = global.Promise; // This will allow me to use promises in my backend application for doing any kind of asynchronous operations. -> Let's say i'm conneting to any database and generating some quyery, then it can take long time. So we are avoiding blocking othe operations at that time, running other operations in background parallely. 

mongoose.connect('mongodb://127.0.0.1:27017/taskmanager', /*{useNewUrlParser:true, useUnifiedTopology: true}*/).then(() => {
    console.log("Database connected successfully!!");
}).catch((e) => {
    console.log(e);
});

module.exports = mongoose;