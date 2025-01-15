const { json } = require('body-parser');
const express = require('express');

const app = express();

app.use(express.json())


var user = [{
    name: 'john',
    kidneys : [{
        healthy: true
    }] 
    
}];

app.get("/" , function(req, res){
    //n = req.params.n;
    const johnkidney = user[0].kidneys;
    let numberofkidneys = johnkidney.length;
    let numberofhealthykidneys = 0 ;
    for(let i = 0 ; i < numberofkidneys ; i++){
        if(johnkidney[i].healthy){
            numberofhealthykidneys = numberofhealthykidneys + 1;
        }
    }
    const unhealthykidneys = numberofkidneys - numberofhealthykidneys;
    res.json({
        numberofkidneys,
        numberofhealthykidneys,
        unhealthykidneys 
    })
})

app.post('/' , function(req, res){

    const ishealthy = req.body.ishealthy;

    
    user[0].kidneys.push({
        healthy: ishealthy
    })
    res.json({
        msg : "Done"
    })
})

app.put('/' , function(req, res){
    for(let i = 0 ; i <user[0].kidneys.length ; i++){
        user[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "Done"
    }) ;
})

app.delete('/' , function (req,res){
    const newkidney = []

    for(let i =0 ; i < user[0].kidneys.length; i++){
        if(user[0].kidneys[i].healthy){
            newkidney.push({
                healthy: true
            })
        }
    }
    user[0].kidneys = newkidney;
    res.json({msg: 'done'})
})


app.listen(3000);

