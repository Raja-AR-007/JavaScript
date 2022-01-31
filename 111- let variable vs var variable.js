//                              108- let variable vs var variable

// "let" will Not declare variable twice

// var catName="Blacky";
// var catName="Whity";
// var quote=0;
// function carTalks() {
// 	quote = catName + " says Meow"
// 	return quote;
// }
// console.log(carTalks());


let catName="Blacky";
let catName="Whity";
var quote=0;
function carTalks() {
	"use strict";  // is to catch the Errors
	return quote = catName + " says Meow"
}
console.log(carTalks());

/*
output:
SyntaxError: Identifier 'catName' has already been declared
*/

