//                               76-Switch case Statement

function fun1(val){
	var answer="Nothing";
	switch(val){
		case 1:
			answer = "Alpha";
			break;
		case 2:
			answer = "Beta";
			break;
		case 3:
			answer = "Gamma";
			break;
		case 4:
			answer = "Delta";
			break;
	}
	return answer;
}
console.log(fun1(5));


//                              77-Default Option in Switch Case

function fun2(val){
	var answer="";
	switch(val){
		case 'a':
			answer = "Apple";
			break;
		case 'b':
			answer = "Ball";
			break;
		case 'c':
			answer = "Cat";
			break;
		case 'd':
			answer = "Dog";
			break;
		default:
			answer =  "stuff"
			break;
	}
	return answer;
}
console.log(fun2('c'));


//                           78-Multiple Identical Option in swich case

function fun3(val){
	var answer="";
	switch(val){
		case 1:
		case 2:
		case 3:
			answer = "Low";
			break;
		case 4:
		case 5:
		case 6:
			answer =  "Medium"
			break;
		case 7:
		case 8:
		case 9:
			answer = "High"
			break;
	}
	return answer;
}
console.log(fun3(9));
console.log(fun3(3));
console.log(fun3(1));


//                           79- Replacing If else Chain with Switch

function fun4(val){
	var answer = "";
	// if(val === "bob"){
	// 	answer = "Marley";
	// } else if(val === 42){
	// 	anwer = "The Answer";
	// } else if(val === 1){
	// 	answer = "There is no #1";
	// } else if(val === 99){
	// 	answer = "Missed me by this much!";
	// } else if(val === 7){
	// 	answer = "Ate Nine";
	// }

	switch(val){
		case "bob":
			answer = "Marley";
			break;
		case 42:
			answer = "The Answer";
			break;
		case 1:
			answer = "There is no #1";
			break;
		case 99:
			answer = "Missed me by this much!";
			break;
		case 7:
			answer = "Ate Nine";
			break;
	}
	return answer;
}
console.log(fun4(99));


//                          80-Returning Boolean Value Function

function isLess(a, b){
	// if(a < b){
	// 	return true;
	// } else {
	// 	return false;
	// }

	return a < b;
}
console.log(isLess(10,5))