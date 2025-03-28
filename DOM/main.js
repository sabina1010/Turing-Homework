"use strict";

// Bir neçə <div>, <p> və <button> elementi olan HTML səhifəsi yaradın.
// JavaScript istifadə edərək bu elementləri aşağıdakı metodlarla seçin:
// getElementById
// getElementsByClassName
// getElementsByTagName
// querySelector
// querySelectorAll
// Bir HTML səhifəsində <p> etiketi daxilində mətn yerləşdirin.
// JavaScript vasitəsilə həmin məzmunu dəyişin.
// Bir düymə və <div> elementi yaradın.
// Düyməyə kliklədikdə <div>-in arxa fon rəngi dəyişsin.
// ul (siyahı) elementi yaradın.
// JavaScript vasitəsilə düyməyə klik etdikdə .
// Başqa bir düymə vasitəsilə .

let myDiv = document.getElementById("myDiv");
//console.log(myDiv);
let myClass = document.getElementsByClassName("myClass");
// console.log(myClass);
let allParagraphs = document.getElementsByTagName("p");
// console.log(allParagraphs);
let firstParagraph = document.querySelector("p");
// console.log(firstParagraph.textContent);

let allParagraphss = document.querySelectorAll("p");
console.log(allParagraphss);

firstParagraph.onclick = function(){
    firstParagraph.textContent = "I clicked";

}

let button1 = document.getElementById("changeColorButton");

button1.onclick = function(){
    myDiv.style.backgroundColor = "red";
}

let button2 = document.getElementById("addItem");

button2.onclick = function(){
    let list1 = document.createElement("ul");
    let listItem1 = document.createElement("li");
    listItem1.textContent = "item1";
    list1.appendChild(listItem1);
    document.body.appendChild(list1);


}

