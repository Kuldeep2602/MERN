const jwt = require("jsonwebtken");
const JWT_SECRET = "secret";
const zod = require("zod");
import {z} from "zod";

const emailSchema = z.string().email();
const passwordSchema = z.string().min(6);

// const mySchema = z.object({
//     username: z.coerce.string.email(),
//     password: z.string().min(5),
// })

function signJWT(username , password){
    const usernameResponse = emailSchema.safeParse(usernsme);
    const passwordResponse = passwordSchema.safeParse(password);

    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }

    const token = jwt.sign({
        username: username,
        password: password
    }, JWT_SECRET);

    return token;
}

function verifyJwt(token){
    // const verified = jwt.verify(token, JWT_SECRET);
    // if(verified){
    //     return true ;
    // }else{
    //     return false;
    // }

    try{
        jwt.verify(token, JWT_SECRET);
        return true;
    }catch(e){

    }
    return false;
}

function decodeJwt(token){
    const decoded = jwt.decode(token);
    if(decoded){
        return true ;
    }else{
        return false;
    }
}