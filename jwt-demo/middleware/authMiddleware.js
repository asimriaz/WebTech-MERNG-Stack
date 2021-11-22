const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) =>{
    const token = req.cookies.jwt;

    //check json web token exists & is verified
    if(token){
        jwt.verify(token, 'batana nahi', (err, decodedToken)=>{
            if(err){
                console.log(err);
                res.redirect('/login');
            }else{
                console.log(decodedToken);
                next();
            }
        })
    }else{
        res.redirect('/login')
    }
}


const checkUser = (req, res, next) =>{
    const token = req.cookies.jwt;

    //check json web token exists & is verified
    if(token){
        jwt.verify(token, 'batana nahi', (err, decodedToken)=>{
            if(err){
                console.log(err);
                res.locals.user = null
            }else{
                console.log(decodedToken);
                res.locals.user = decodedToken.fullname
                next();
            }
        })
    }else{
        res.locals.user = null
        next();
    }
}



module.exports = { requireAuth, checkUser }