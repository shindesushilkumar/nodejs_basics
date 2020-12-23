var fs = require('fs');

// var readMe = fs.readFileSync('readMe.txt', 'utf8');
// fs.writeFileSync('writeMe.txt', readMe);

// -----------------------------------------------

fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('writeMe.txt', data, function(err){
        if(err) throw err;
    });
    // console.log(data);
});

console.log('test');