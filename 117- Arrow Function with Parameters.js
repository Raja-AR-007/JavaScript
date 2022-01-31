// Anonymous Function
/*
var ourObj = function(arr1, arr2) {
	   return  arr1.concat(arr2);
};
console.log(ourObj([1,2,3], [4,5,6])); 
*/

// Arrow Function

// "concat()'' means "concatination" is used to combine two or more string. 
// It will return new srting

var ourObj = (arr1, arr2)  => arr1.concat(arr2);
console.log(ourObj([1,2,3], [4,5,6]));

// same

/*
var ourObj = (arr1, arr2)  => console.log(arr1.concat(arr2));
ourObj([1,2,3], [4,5,6]);
*/