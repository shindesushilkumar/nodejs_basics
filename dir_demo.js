var fs = require('fs');

// delete file 

fs.unlink('writeMe.txt', function(err){
    if(err) throw err;
});

// create directory syncronously

fs.mkdirSync('stuff', function(err){
    if(err) throw err;
});

// remove directory syncronously

fs.rmdirSync('stuff');

// create directory asyncronously

fs.mkdir('stuff', function(err){
    if(err) throw err;

    fs.readFile('readMe.txt', 'utf8', function(err, data){
        fs.writeFile('./stuff/writeMe.txt', data, function(err){
            if(err) throw err;
        })
    })
});

// remove directory

fs.unlink('./stuff/writeMe.txt', function(err){
    if(err) throw err;

    fs.rmdir('stuff', function(err){
        if(err) throw err;
    });

});



