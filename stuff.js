// var counter = function(arr){
//     return 'This array has ' + arr.length + ' elements';
// }

// var adder = function(a,b){
//     return `The sum of 2 values is ${a+b}`;
// }

// var pi = 3.14;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

// ---------------------------------------------------------

// module.exports.counter = function(arr){
//     return 'This array has ' + arr.length + ' elements';
// };

// module.exports.adder = function(a,b){
//     return `The sum of 2 values is ${a+b}`;
// };

// module.exports.pi = 3.14;

// ---------------------------------------------------------

var counter = function(arr){
    return 'This array has ' + arr.length + ' elements';
}

var adder = function(a,b){
    return `The sum of 2 values is ${a+b}`;
}

var pi = 3.14;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
}
