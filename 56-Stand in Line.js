//                          56-Stand in Line

function standInLine(arr, item){
	arr.push(item)
	return arr.shift(item);
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(standInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/*output:
Before: [1,2,3,4,5]
1
After: [2,3,4,5,6]
*/