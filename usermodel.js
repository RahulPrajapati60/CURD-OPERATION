const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/CORDoPERATION`);

const userSchema = new mongoose.Schema({
    Name: String,
    Username: String,
    Email: String,
})

module.exports = mongoose.model("user", userSchema);