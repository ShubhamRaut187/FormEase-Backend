const {Usermodel} = require('../DataModels/User.model')
const EmailCheck = async(req,res,next) => {
    const {Email} = req.body;
    const User = await Usermodel.findOne({Email:Email});
    if(User){
        res.status(409).send({'Message':'User already registered.'})
    }
    else{
        next();
    }
}

module.exports = {
    EmailCheck
}