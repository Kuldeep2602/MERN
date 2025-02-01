const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kuldeeprathore1637:Kuldeep%40123@cluster0.jnmfv.mongodb.net/")

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