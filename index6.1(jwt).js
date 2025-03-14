const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "secret";

app.use(express.json());

const users = [];

app.post("/signup", function(req, res){

    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password  
    })

    res.json({
        message: "User created"
    })
    console.log(users);
})

app.post("/signin", function(req, res){

    const username = req.body.username;
    const password = req.body.password;

    // const founduser = users.find(function(u){
    //     if(u.username == username && u.password == password){
    //         return true;
    //     }else{
    //         return false;
    //     }
    //     }
    // )

    let founduser = null;
    for(let i = 0; i < users.length; i++){
        if(users[i].username == username && users[i].password == password){
            founduser = users[i];
        }
    }

    if(founduser){
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);

        founduser.token = token ;
        res.send({
            token
        })
        console.log(users);
    }else{
        res.status(401).json({
            message: "User not found"
        })
    }
    console.log(users);

})

app.get("/me" , function(req, res){
    const token = req.headers.token; //jwt
    const decodedInformation = jwt.verify(token, JWT_SECRET);
    const username = decodedInformation.username;


    let founduser = null ;
    
    for(let i = 0 ; i < users.length; i++){
        if(users[i].username == username){
            founduser = users[i];
        }
    }

    if(founduser){
        res.json({
            username: founduser.username,
            password: founduser.password
        })
    }else{
        res.json({
            message: "User not found"
        })
    }
})


app.listen(3000);