var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log("Page requested: " + req.url);
    
    if(req.url === '/' || req.url === '/home'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
        myReadStream.pipe(res);
    } else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        var myReadStream = fs.createReadStream(__dirname + '/contact.html', 'utf8');
        myReadStream.pipe(res);
    } else if(req.url === '/api/ninjas'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var myObj = [{name: 'Sushil', age: 34}, {name: 'Vijay', age: 30}];
        res.end(JSON.stringify(myObj));
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        var myReadStream = fs.createReadStream(__dirname + "/404.html", 'utf8');
        myReadStream.pipe(res);
    }
});


var port = 3000;
server.listen(port, '127.0.0.1');
console.log('server is listining on port ' + port);