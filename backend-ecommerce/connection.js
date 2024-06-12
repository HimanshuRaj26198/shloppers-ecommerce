const mongoose = require("mongoose");



module.exports = mongoose.connect('mongodb+srv://himanshu26198:XsjSZv1flmJSyGBf@cluster0.xzruv4o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/shopplers').then(con => {
    console.log("Connected to database")
}).catch(err => {
    console.log("Error in database connection")
});