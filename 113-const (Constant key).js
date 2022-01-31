//                            110- Declare a Read only Variables with the "Const" Keyword

// function constVriable(value) {
// 	const sentance = value + " is Cool";
// 	sentance = value + " is Amazing";
// 	for(let i=0; i<value.length; i++) {
// 		return sentance;
// 	}
// }
// console.log(constVriable("Raja"));

/*output:
sentance = value + " is Amazing";
	         ^

TypeError: Assignment to constant variable.
*/


function constVriable(value) {
	var sentance = value + " is Cool";
	//sentance = value + " is Amazing";
	for(let i=0; i<value.length; i++) {
		return sentance;
	}
}
console.log(constVriable("Raja"));

/*output:
Raja is Cool
*/