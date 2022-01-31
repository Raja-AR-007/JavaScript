/*
const sum = (function (){
	   return function sum(x, y, z, c){  // limited arguments
	   const args=[x, y, z, c];
     return args.reduce((a, b) => a+b,0)
     	};                                                                                                 
})();
console.log(sum(1,2,3,4));
*/

// Rest Operator is used pass multiple values in the argument by using '...variableName'

const sum = (function (){
	   return function sum(...nums){  //Rest Operator
	  // const args=[x,y,z];
     return nums.reduce((a, b) => a+b,0)
     	};                                                                                                 
})();
console.log(sum(9,8,7,6,5))

