const ApplicationAuth = (req,res,next) => {
    const UserID = req.userID;
    const {uid} = req.params;
    if(UserID === uid){
        next();
    }
    else{
        res.status(401).send({'Message':'Unauthorized'});
    }
}

module.exports = {
    ApplicationAuth
}