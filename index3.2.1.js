const mongoose = require("mongoose");

mongoose.connect()

const User = mongoose.model('Users', {
    name: String, 
    email: String,
    password: String
});

const user = new User({
    name: "Kuldeep Singh",
    email: "tzindh@gmail.com",
    password: "1234"
})

user.save();
