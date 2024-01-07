const AuthDataCheck = (req,res,next) => {
    const {Name,Email,Password} = req.body;
    if(!Name || !Email || !Password){
        res.status(400).send({'Message':'All field are required.'});
    }
    else{
        next();
    }
}

module.exports = {
    AuthDataCheck
}