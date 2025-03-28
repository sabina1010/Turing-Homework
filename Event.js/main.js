// "use strict";

// let button = document.getElementById("btn");
// //onlick/event listener

// // button.onclick = function () {

// //     console.log("1");
// // }
// // button.onclick = function () {

// //     console.log("2");
// // }
// // button.onclick = function () {

// //     console.log("3");
// // }

// button.addEventListener('click',function(){
//     console.log("1");

    
// });
// button.addEventListener('click',function(){
//     console.log("2");
    
// });
// button.addEventListener('click',function(){
//     console.log("3");
    
// });


let count = 0;
let interval;
document.getElementById("start").addEventListener('click', function(){
    if(!interval){
        interval=setInterval(function(){
            count++;
            document.getElementById("timer").textContent=count;
        },1000);
    }
});
document.getElementById("stop").addEventListener('click', function(){

    clearInterval(interval);
    interval=null;

});
document.getElementById("reset").addEventListener('click', function(){
    count = 0;
    document.getElementById("timer").textContent=count;
    clearInterval(interval);
    interval=null;

});