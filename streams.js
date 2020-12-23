var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe2.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe2.txt');

myReadStream.on('data', function(chunk){
    console.log("Chunk received:");
    myWriteStream.write(chunk);
});