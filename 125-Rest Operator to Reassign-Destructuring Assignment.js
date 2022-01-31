/*
const source =[1,2,3,4,5,6]

function restReAssign(list){
	   const [ , , ...arrElement] = list;
	   return arrElement;
};
console.log("Before Destruction \n");
console.log(source);
console.log("After Destruction \n")
console.log(restReAssign(source));
*/


const source =[1,2,3,4,5,6]

function restReAssign(list){
	   const [ a, b, ...arrElement] = list; //Destruction
	   return arrElement;
};
console.log("Before Destruction \n");
console.log(source);
console.log("After Destruction \n")
console.log(restReAssign(source));