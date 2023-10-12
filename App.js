console.log("hello world");

//print after some times
setTimeout(function(){
    console.log('this is printing after 3 seconds')
},3000);

//printing loop in a given time with intervals
var time = 0;
var loop= setInterval(
    function(){
        time += 2
        console.log('this is printing after every 2 seconds')
        if(time >9){
            clearInterval(loop)
        }
    },2000
);

console.log('even though the loop is going on the next code is executing'); 
