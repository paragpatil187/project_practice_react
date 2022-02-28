const mongoose = require ("mongoose");


module.exports = ()=>{
    return mongoose.connect("mongodb+srv://dipankar10:dipankar100@cluster0.hmrsq.mongodb.net/instagram?retryWrites=true&w=majority");
}