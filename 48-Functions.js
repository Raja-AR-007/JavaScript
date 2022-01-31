//                          48-Resuable with Function

function reusableFunction(){
	console.log("Hello World");
}

reusableFunction();

/*output:
Hello World
*/

//                          49-Passing Values to Function Arguments (Arguments)

function passingArguments(a, b){  // don't specify the "var" before the Argumented variable
	console.log("Subraction: ")
	console.log(a - b);
}

passingArguments(5, 10);

/*output:
Subraction: 
-5
*/


//                          50-Global Scope and Function

var myGlobal = 10;

function fun1(){
	oopsGlobal = 20;  // don't specify the "var" before the local variable
}

function fun2(){
	var output = "";
	if(myGlobal != "undefined"){
		output += "myGlobal: " + myGlobal + " ";
	}
	if(oopsGlobal != "undefined"){
		output += "oopsGlobal: " + oopsGlobal;
	}
	console.log(output); // (or) return output;
}

fun1(); // (or) console.log(fun1());
fun2(); // (or) console.log(fun2());

/*output:
myGlobal: 10 oopsGlobal: 20
*/

//                          51-Local Scope and Function

var myValue = 30;  // Global variable

function function1(){
	var myValue = 20;  // Local variable
	console.log(myValue);
}
function1();

console.log(myValue);

/*output:
20  // Global value
30  // Local value
*/


//                         52-Global and Local Scope

var shirt = "Half hand"  // Global variable

function myGL(){
	var shirt = "Full hand"  // Local variable
	return shirt;
}
console.log(myGL());
console.log(shirt)

/*output:
Full hand
Half hand
*/


//                        53-Return a Value from a Function with "return"

function minusFive(num){
	return num - 5;
}
console.log(minusFive(9));

/*output:
4
*/

function plusFive(num1){
	return num1 + 5; 
}
console.log(plusFive(4));

/*output:
9
*/


//                        54-Undefined Values returned

var number = 10;
function addThree(){
	number = number + 3;
	//console.log(number);
	//return number;
}
console.log(addThree());

/*output:
undefined
*/

//                        55-Assigning with Returned Value

var processed = 0;

function funOperators(a){
	return (a + 3)/8;
}
procesed = funOperators(2);  // assigning 
console.log("funOperators: " + procesed);
\
/*output: 
funOperators: 0.625
*/													     