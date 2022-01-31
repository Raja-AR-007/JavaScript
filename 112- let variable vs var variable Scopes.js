//                           109- let variable vs var variable Scopes
// Execute one by one

// "let" only works within the Declared scope bolck

// function checkScope() {
// "use strict";
// 	var i="function scope";
// 	if(true) {
// 		var i="block scope";
// 		console.log("Block scope i is: " + i);
// 	}
// 	console.log("Function scope i is: " + i);
// 	return i;
// }
// checkScope();

/*output:
Block scope i is: block scope
Function scope i is: block scope
*/

// function checkScope() {
// "use strict";
// 	let i="function scope";
// 	if(true) {
// 		let i="block scope";
// 		console.log("Block scope i is: " + i);
// 	}
// 	console.log("Function scope i is: " + i);
// 	return i;
// }
// checkScope();

/*output:
Block scope i is: block scope
Function scope i is: function scope
*/


// function checkScope() {
// "use strict";
// 	//var i="function scope";
// 	if(true) {
// 		var i="block scope";
// 		console.log("Block scope i is: " + i);
// 	}
// 	console.log("Function scope i is: " + i);
// 	return i;
// }
// checkScope();

/*output:
Block scope i is: block scope
Function scope i is: block scope
*/


function checkScope() {
"use strict";
	//let i="function scope";
	if(true) {
		let i="block scope";
		console.log("Block scope i is: " + i);
	}
	console.log("Function scope i is: " + i);
	return i;
}
checkScope();

/* output:
Block scope i is: block scope
ReferenceError: i is not defined
*/

