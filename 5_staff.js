//anonymous function
var sum = function(num1, num2){ 
    return `sum is ${num1+num2}`
}

var sub = function(num1, num2){
    return `sum is ${num1-num2}`
}

module.export.sum = sum //module.export.any name = function()
module.export.sub = sub;

//-----------------------------
//can code this way also
module.export.mul = function(num1, num2){
    return `sum is ${num1*num2}`
}

//---------------------------------
//can code this way also
var div = function(num1, num2){
    return `sum is ${num1/num2}`
}

var birthDay = function(day, month, year){
    return `my b'day is ${day} of ${month} in ${year}`
}
module.export = {
    div : div,
    bday : birthDay
}




