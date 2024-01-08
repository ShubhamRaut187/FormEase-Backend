const jwt = require('jsonwebtoken')
const Authentication = (req,res,next) => {
    const Token = req.headers.authorization.split(' ')[1];
    if(!Token){
        res.status(401).send({'Message':'Please login to continue'});
    }
    jwt.verify(Token,'AuthToken',async(error,decoded)=>{
        if(decoded){
            // console.log(decoded)
            const {UserID} = decoded;
            req.userID = UserID;
            // console.log(req.userID);
            next(); 
        }
        else{
            req.status(401).send({'Message':'Invalid token, Please longin again...!'});
        }
    })
}

module.exports = {
    Authentication
}