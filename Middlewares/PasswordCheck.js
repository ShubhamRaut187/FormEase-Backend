const PasswordCheck = (req,res,next)=>{
    const {Password} = req.body;

    let Uppercase = false;
    let Lowercase = false;
    let Num = false;
    let Special = false;


    if(Password.length > 8){
        for(let i = 0; i<Password.length; i++){
            let ch = Password.charAt(i);
           
            if(ch.toUpperCase() === ch){
                Uppercase = true;
            }
            if(ch.toLowerCase() === ch){
                Lowercase = true;
            }
            if(ch === '!' || ch === '@' || ch === '#' || ch === '$' || ch === '%' || ch === '^' || ch === '&' || ch === '*' || ch === '(' || ch === ')' || ch === '>' || ch === '<' || ch === '?' ){
                console.log(ch);
                Special = true;
            }
            
            let num = Number(ch);
                if(!isNaN(num)){
                    Num = true;
                }
            
        }
        // console.log(Uppercase,Lowercase,Num,Special);
        if(Uppercase && Lowercase && Num && Special){
           next();
        }
        else{
            res.status(400).send({'Message':'Weak Password. Password should be atleast 8 of characters and contain one uppercase character, one lowercase character, number and a special character.'});
        }

    }
    else{
        res.status(400).send({'Message':'Weak Password. Password should be atleast 8 of characters and contain one uppercase character, one lowercase character, number and a special character.'});
     }



}

module.exports = {
    PasswordCheck
}