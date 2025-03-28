"use strict";

// // function modifyText(text, callback) {
// //     return callback(text)
// // }

// // // mətnin bütün hərflərini kiçik edin.
// // function toLowerCase(text) {
// //     return text.toLowerCase();
// // }

// // // console.log(modifyText("New York", toLowerCase));

// // // mətnin bütün hərflərini kiçik edin.
// // function removeSpaces(text) {
// //     let result = "";
// //     for (let i = 0; i < text.length; i++) {
// //         if (text[i] !== " ") {
// //             result += text[i];
// //         }
// //     }
// //     return result;
// // }

// // // console.log(modifyText("New York", removeSpaces));


// // // mətni nida işarəsi (!) ilə bitirin
 
// // function addExclamationMark (text){

// // return text + "!";

// // }

// // let sabi = prompt("enter the word:");


// // alert(modifyText(sabi,addExclamationMark));

// //Task 2

// // function modifyNumber(number,callback){
// //     return callback(number);
// // }

// // // ədədi 2 dəfə artırın.

// // function multiplyByTwo(number){
// //     return number * 2;
// // }

// // // console.log(modifyNumber(5,multiplyByTwo));


// // //ededi 2 e bolun
// // function divideByTwo(number){
// //     return number / 2;
// // }

// // function powerOfHalf(number){
// //     if(number < 0){
// //         return "Please enter a positive number";
// //     }
// //     else{
// //         return number ** 0.5; 
// //     }
// // }

// // // console.log(modifyNumber(25,powerOfHalf));

// // function absoluteValue(number){
// //     if(number<0){
// //         return number * -1;
// //     }
// //     else{
// //         return number;
// //     }
// // }

// // console.log(modifyNumber(-5,absoluteValue));


// // Task 3

// function transformArray(array, callback){
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         result.push(callback(array[i]));
//     }
//     return result;
// }
// function sumByOne(num){
//     return num + 1;
// }



// // console.log(transformArray(sabi, sumByOne));

// function multiplyByMinus(num){
//     if (num>0){
//         return num * -1;

//     }
//     else{
//         return num;
//     }
// }

// // console.log(transformArray(sabi, multiplyByMinus));

// function modeByThree (num){
//     return num % 3;
// }

// // console.log(transformArray(sabi,modeByThree));

// function findInArray(array, callback){
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         result.push(callback(array[i]));
//     }
//     return result;
// }

// let sabi = [1,2,3,4,5,7,-5,0,-2,-4];

// function findFirstEven(num){
//     if(num % 2 ===0){
//         return num;
//     }
    
// }

// // console.log(findInArray(sabi,findFirstEven));


function processUserData(user,callback){
    return callback(user);
}

let sabi = {
    firstName: "Sabina",
    lastName: "Ahmadova",
    age: 17,
    email: "sabi@mail.com"

}

function fullName(user){
    return user.firstName + " " + user.lastName;
}

// console.log(processUserData(user, fullName));

function checkAge(user){
    if(user.age >= 18){
        return true;
    }
    else{
        return false;
    }
}

// console.log(processUserData(user,checkAge));

function hideEmail(user){
    let emailParts = user.email.split("@");
    let stars = "*".repeat(emailParts[0].length);
    let resultEmail = stars + "@" + emailParts[1];
    return resultEmail;
}


console.log(processUserData(sabi, hideEmail));


