//a model

var events = require('events')
var util = require('util')

var myEmiter = new events.EventEmitter();

myEmiter.on( 'someEvent', function(msg){
    console.log(msg)
})

myEmiter.on('showName', function(msg){
    console.log(msg)
})

myEmiter.emit('showName', 'tharindu sandaruwan')
myEmiter.emit('someEvent','he is at home')

//easy method for many instances
var person = function(name){
    this.name=name;
}

util.inherits(person,events.EventEmitter)

var john = new person('john')
var alex = new person('alex')
var jack = new person('jack')

var people = [john,alex,jack]

people.forEach(function(person){
    person.on('run',function(msg){
        console.log(person.name + ' run ! '+ msg)
    })
})

john.emit('run','run bro')
alex.emit('run',' some one is comming')
jack.emit('run','a thief')



