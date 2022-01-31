// In this prg .filter() is used to get only Intergers from Array
// .map() is getting each Integers and squaring

var realNumsArr =[1, -3, 4.4, 10, -5, 7, 3.0];
function squareList(arr) {
	   var squareIntegers = arr.filter( num => Number.isInteger(num) && num > 0).map(x=>x*x);
	   return squareIntegers;
}
console.log("Squared Integers from Array: \n");
console.log(squareList(realNumsArr));