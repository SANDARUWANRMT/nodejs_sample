function sayHi(){
    console.log('hello there...!');
}
sayHi()

//assign a name to a function
func = function(){
    console.log('calling the fuction');
}
func()

//calling a funtion as a parameter
function callFuction(funk){
    funk();
}

callFuction(func);