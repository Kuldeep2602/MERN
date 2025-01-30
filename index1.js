const express = require('express');
const app = express(); 
app.use(express.json());

import {z} from 'zod' ;
const zod = require('zod');

const kidney = z.literal("1").or(z.literal("2"));

//rate limitting 

let numOfRequest =0 ;
function ratelimit(req , res , next){
    numOfRequest++;
    console.log(numOfRequest);
    next();
}

//middleware

function userMiddleware(req, res , next){
        if(username != "Kuldeep" && passowrd != "pass"){
        res.status(403).json({
            msg:"user not exist" ,
        });
            }else{
                next();
            }
};

function kidneyMiddleware(req , res , next){
        if(kidneyid != 1 && kidneyid != 2){
                res.status(411).json({
                    msg:"wrong inputs"
                });
                return ;
            }else{
                next();
            }
}

// error function GLOBAL 
app.use((error , req , res ,next )=> {
    //error 
    res.status(500).send('An internal error occured');
})

//wrapper fucntion
// function usernamevalidaor(username , passowrd){
//     if(username != "Kuldeep" && passowrd != "pass"){
//         res.status(403).json({
//             msg:"user not exist" ;
//         });
//         return ;
//     }

// }

//wrapper function 
// function validkidney(kidneyid){
//     if(kidneyid != 1 && kidneyid != 2){
//         res.status(411).json({
//             msg:"wrong inputs"
//         });
//         return ;
//     }
// }

app.get("/healthy-checkup" ,userMiddleware , kidneyMiddleware , function(req, res){
    // do the health checks
    // const username = req.headers.username;
    // const password = req.headers.password;

    // const kidneyid = req.query.kidneyid;

    // if(!usernamevalidaor(req.query.username , req.query.passowrd)){
    //     res.status(403).json({
    //         msg:'user doesn`t exist',
    //     });
    //     return ;
    // }
    // if(!validkidney(kidneyid)){
    //     res.status(411).json({
    //         msg:"wrong inputs",
    //     })
    // }

    //username check without middleware
    // if(username != "Kuldeep" && passowrd != "pass"){
    //     res.status(403).json({
    //         msg:"user not exist" ;
    //     });
    //     return ;
    // }

    //input validation without middleware
    // if(kidneyid != 1 && kidneyid != 2){
    //     res.status(411).json({
    //         msg:"wrong inputs"
    //     });
    //     return ;
    // }

    res.send("you have a healthy body ");
})

app.put("/repalce-kidney" ,function(req, res){
    // do the health checks
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyid = req.query.kidneyid;

    //username check 
    if(username != "Kuldeep" && passowrd != "pass"){
        res.status(403).json({
            msg:"user not exist" 
        });
        return ;
    }

    //input validation 
    if(kidneyid != 1 && kidneyid != 2){
        res.status(411).json({
            msg:"wrong inputs"
        });
        return ;
    }
    res.send("you have successfully replaced");
})


app.listen(3001) ;