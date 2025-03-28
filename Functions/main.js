// 3. Cüt və ya tək ədəd
// Bir ədədin cüt və ya tək olduğunu yoxlayan isEven funksiyası yazın. Əgər ədəd cütdürsə 
// true, təkdirsə false qaytarsın.
// isEven(4);    Çıxış: true      isEven(7);   //      Çıxış: false

// function isEven(number) {
//     if(number % 2 == 0) {
//         console.log(true);
//         // return true;
//     } else {
//         console.log(false);
//         // return false;
//     }
// }

// isEven(4);
// isEven(7);

// 4. Ən böyük ədədi tapın
// Üç ədəd qəbul edən və ən böyüyünü qaytaran findLargest funksiyası yazın.
// findLargest(10, 20, 15); // Çıxış: 20

// function findLargest(num1, num2, num3) {
//     if(num1>num2 && num1>num3) {    
//         console.log(num1);
//     }
//     else if(num2>num1 && num2>num3){
//         console.log(num2);
//     }
//     else{
//         console.log(num3);
        
//     }
    
// }
// findLargest(10,20,15)

//extra :)

// function findSmallest( num1, num2, num3) {
//     if(num1 < num2 && num1 < num3 ){
//         console.log(num1);
//     }
//     else if(num2 < num3 && num2 < num1){
//         console.log(num2);
//     }
//     else{
//         console.log(num3);
        
//     }
// }

// findSmallest(10,20,15)


// 5. Saitləri sayın
// Verilmiş sətirdəki saitlərin sayını qaytaran countVowels funksiyası yazın.
// countVowels("salam"); // Çıxış: 2

// function countVowels(text){
//     let count = 0;

//     for(let i=0; i<text.length; i++){
//         switch (text[i]) {
//             case "a":
//                 ++count;
//                 break;
//             case "ı":
//                 ++count;
//                 break;
//             case "o":
//                 ++count;
//                 break;
//             case "u":
//                 ++count;
//                 break;
//             case "e":
//                 ++count;
//                 break;
//             case "ə":
//                 ++count;
//                 break;
//             case "i":
//                 ++count;
//                 break;
//             case "ö":
//                 ++count;
//                 break;
//             case "ü":
//                 ++count;
//                 break;
                
//             default:
//                 break;
//         }
//     }
//     console.log(count);
    
// }

// countVowels("Səbinə");
// countVowels("Range Rover");

// 6. Sətiri tərsinə çevirin
// Sətiri tərsinə çevirən reverseString funksiyası yazın.
// reverseString("JavaScript"); // Çıxış: tpircSavaJ

// function reverseString(text) {
//     let reverse = "";
//     for(let i=1; i<=text.length; i++){
//         reverse += text[text.length-i];
//     }
//     console.log(reverse);
    
// }
// reverseString("JavaScript")
// 7. Çoxaltma cədvəli yaradın
// Verilmiş ədədin 1-dən 10-a qədər çoxaltma cədvəlini yazdıran multiplicationTable funksiyası yaradın.
// multiplicationTable(5);
// // Çıxış:
// // 5 x 1 = 5
// // 5 x 2 = 10
// // ...
// // 5 x 10 = 50
// function multiplicationTable(number){


//     for(let i=1; i<=10; i++){
//         console.log(`${number} x ${i} = ${number*i}`);
        
//     }
// }

// multiplicationTable(5);


// 8. Faktorial hesablayın
// Rekursiya istifadə edərək ədədin faktorialını hesablayan factorial funksiyası yaradın.
// factorial(5);

function factorial(num) {
    if(num == 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5));
