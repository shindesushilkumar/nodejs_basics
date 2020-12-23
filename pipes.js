var http = require('http');
var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/readMe2.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe2.txt');

// myReadStream.pipe(myWriteStream);

// ------------------------------------------------

// var server = http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
    
//     // var myReadStream = fs.createReadStream(__dirname + '/readMe2.txt', 'utf8');
//     var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//     myReadStream.pipe(res);
// });

// ------------------------------------------------

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});

    var myObj = {
        name: 'Sushil',
        job: 'PHP Developer',
        age: 35
    }
    
    res.end(JSON.stringify(myObj));
});


var port = 3000;
server.listen(port, '127.0.0.1');
console.log('server is listining on port ' + port);