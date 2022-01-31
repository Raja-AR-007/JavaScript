//                              58-Boolean values
function boolValues1(){
	return false;
}
console.log(boolValues1());

function boolValues2(){
	return true;
}
console.log(boolValues2());


//                             59-if else Statement
function fun1(isItTrue){
	if(isItTrue){
		return "Yes it is true";
	}else{
		return"It is not true";
	}
}
console.log(fun1(false));
/*output:
It is not true
*/


//                             60-Comparision with the Equality Operator "=="
function fun2(val){
	if(val == 10){
		return "It is equal"
	}else{
		return "It is not equal"
	}
}
console.log(fun2(10));
/*output:
It is equal
*/


//                             61-Strict Equality Operator "==="
// "===" it will not accept the Number as a string ("30" === 30)
// but in Equality operator "==" accept the Number as a string "30"
function fun3(val){
	if(val === 10){
		return "It is equal"
	}else{
		return "It is not equal"
	}
}
console.log(fun3("10"));
/*output:
It is not equal
*/


//  					       62-Comparing two Different Values
function fun4(a, b){
	if(a === b){
		return "Equal"
	}else{
		return "Not Equal"
	}
}
console.log(fun4(20, "20"));  
/*output:
Not Equal
*/


//                            63-Inequality Operator "!="
function fun5(a){
	if(a != 30){
		return "Not Equal"
	}else{
		return "Equal"
	}
}
console.log(fun5(20));  
/*output:
Not Equal
*/


//                            64-Strick Inequality Operator "!=="
// "!==" it will not accept the Number as a string ("30" !== 30)
// but in Inequality operator "!=" accept the Number as a string "30"
function fun6(a){
	if(a !== "17"){
		return "Not Equal"
	}else{
		return "Equal"
	}
}
console.log(fun6(17));  
/*output:
Not Equal
*/


//                           65-Comparing with Logical and Operator (Greater than ">")
function fun7(val){
	if(val > 100){
		return "over 100";
	}
	if(val > 10){
		return "over 10";
	}
	return "10 or under";
}
console.log(fun7(6));


//                           66-Greater tahn or Equal to ">="
function fun8(val){
	if(val >= 100){
		return "100 or over";
	}
	if(val >= 10){
		return "10 or over";
	}
	return "less than 10";
}
console.log(fun8(10));


//                           67-Less than "<"
function fun9(val){
	if(val < 50){
		return "less than 50";
	}
	if(val < 100){
		return "less than 100";
	}
	return "Greater than 100";
}
console.log(fun9(300));


//                           68-Less than or Equal to "<="
function fun10(val){
	if(val <= 50){
		return "less than or 50";
	}
	if(val <= 100){
		return "less than or 100";
	}
	return "Greater than 100";
}
console.log(fun10(50));


//                           69- And Operator "&&"
// Staisfy both conditions
function fun11(val){
	// if(val <= 50){
	// 	if(val >= 25){
	// 		return "yes";
	// 	}
	// }

	if(val <= 50 && val >= 25){
		return "yes";
	}
	return "greater than 50 or Less than 25";
}
console.log(fun11(60));


//                           70- OR Operator "||"
// Staisfy any one condition
function fun12(val){
	if(val < 10 || val > 20){
		return "outside";
	}
	return "inside";
}
console.log(fun12(12));


//                           71- Else Statement 
function fun13(val){
	if(val > 5){
		return "Biggger than 5";
	} else {
		return "Less than 5";
	}
}
console.log(fun13(4));


//                            72- Else If Statement
function fun14(val){
	if(val > 100){
		return "Biggger than 100";
	} else if(val < 50){
		return "Less than 50";
	}
	return "Between 50 to 100";
}
console.log(fun14(7));


//                           73- Logical Order in if else Statement
function fun15(val){
	if(val < 5){
		return "less than 5";
	} else if(val < 10){
		return "less than 10";
	}
	return "Nothing";
}
console.log(fun15(6));


//                            74- Chaining if else Statement
function fun16(num){
	if(num < 5){
		return "Tiny";
	} else if(num < 10){
		return "Small";
	} else if(num < 15){
		return "Medium";
	} else if(num < 20){
		return "Large";
	} else {
		return "Huge";
	}
} 
console.log(fun16(116));  


//                             75-Golf Code
var names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double-Bogey", "Go-Home"];
function fun17(par, strokes){
	if(strokes == 1){
		return names[0];
	} else if(strokes <= par -2){
		return names[1];
	} else if(strokes == par -1){
		return names[2];
	} else if(strokes == par){
		return names[3]
	} else if(strokes == par + 1){
		return names[4];
	} else if(strokes == par + 2){
		return names[5];
	} else if(strokes >= par + 3){
		return names[6];
	} 
}
console.log(fun17(10, 7));

