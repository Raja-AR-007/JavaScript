/*
const arr1 =["deva" ,"fathi", "paru","yash"];
let arr2;
(function(){
	   arr2=arr1;
	   arr1[0]="pavi";
})();
console.log(arr2)
*/

// spread operator '[...variableName]' will have all element of an array 

const arr1 =["deva" ,"fathi", "paru","yash"];
let arr2;
(function(){
	   arr2=[...arr1]; // Spread Operator
	   arr1[0]="pavi";. // all element will come instead of "pavi"
})();
console.log(arr2);
