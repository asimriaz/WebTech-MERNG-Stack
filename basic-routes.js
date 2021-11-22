const http = require('http');
const qs = require('querystring');

const routes = {
    'GET':{
        '/':(req, res)=>{
            res.writeHead(200, {'Content-Type':'text/html'});
            //res.end('<h2>Hello World!!<h2>');
            res.end(`
            <form method="POST">
                <input type="text" name="username" id="" placeholder="User Name"><br>
                <input type="password" name="password" id="" placeholder="Password"><br>
                <input type="submit" value="submit" id="" ><br>
            </form>             
            `)
        },
        '/about':(req, res)=>{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end('<h2>About Us<h2>');
        }
    },
    'POST':{
        '/':(req, res)=>{
            let body = '';
            req.on('data', data =>{
                body += data;
            });
            req.on('end', ()=>{
                let params = qs.parse(body);
                res.writeHead(200, {'Content-Type':'text/html'});
                res.end(JSON.stringify(params));
            });
        }
    },
    'NA':(req, res)=>{
        res.writeHead(404);
        res.end('Content Not Found');
    }
}

const router = (req, res) => {
    // console.log('Request Method :>> ', req.method);
    // console.log('Request URL :>> ', req.url);
    //res.end();
    let resolveRoute = routes[req.method][req.url];
    if(resolveRoute != undefined){
        resolveRoute(req, res);
    }else{
        routes['NA'](req, res);
    }
}

http.createServer(router)
    .listen(3000, ()=>{
        console.log(`Server is running on port 3000`);
    });