var events = require('events');
var util = require('util');

// var myEmmiter = new events.EventEmitter();

// myEmmiter.on('someEvent', function(mssg){
//     console.log(mssg);
// });

// myEmmiter.emit('someEvent', 'The event was emitted');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var sushil = new Person('sushil');
var vijay = new Person('vijay');
var anand = new Person('anand');

var people = [sushil, vijay, anand];

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said: ' + mssg);
    });
});

sushil.emit('speak', 'hey dudes');
vijay.emit('speak', 'I want a curry');