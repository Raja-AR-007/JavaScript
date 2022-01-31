//                             105- Random Functions

function randomNum() {
	return Math.random();
}
console.log('randomNum:',randomNum());


//                             106- Random whole Numbers

function wholeNum() {
	console.log("wholeNum:", Math.floor(Math.random() * 10));
}
wholeNum();


//                             107- Random Whole Number within a Range
function randomRange(myMin, myMax) {
	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
var myRandom = randomRange(5,15);
console.log("randomRange", myRandom);