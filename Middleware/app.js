const express = require('express');
const app = express();


let logger = (req, res, next)=>{
    console.log(`Log from ${req.url}`);
    req.msg = 'This is from Middleware....!!!';
    next();
}

let auth = (req, res, next)=>{
    console.log(`Log from Auth`);
    if(req.query.name === 'Peter'){
        next()
    }else{
        res.send('Access Denied');
    }
    
}

app.use(logger);

app.get('/', (req, res, next)=>{
    console.log(`From Home Page`);
    res.send(`Home Page ${req.msg}`);
    next();
});

app.get('/users', auth, (req, res)=>{
    console.log(`Name : ${req.query.name}`);
    console.log(`From User Page`);
    res.send(`Users Page ${req.msg}`);
});


app.listen(3044, ()=> console.log(`Server is running on port 3044`));