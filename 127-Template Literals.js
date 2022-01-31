//                        127- Crteating String using Template Literals
// Template literals with multi-line.
const person ={
	name:"Raja",
	age:22
};
const greeting = `Hello, my name is ${person.name}!
I'm ${person.age} years old.`;
console.log(greeting);

const result ={
	success:["max-length","no-amd","prefere-arrow-function"],
	failure:["no-var", "var-on-top", "linebreak"],
	skipped:["id-blacklist", "no-dup-keys"]
};
function makeList(arr){
	const resultDisplayArray = [];
	for(let i=0; i<arr.length; i++){
		resultDisplayArray.push('<li class="text-warning">${arr[i]}</li>');
	}
	return resultDisplayArray;
}
console.log(makeList(result.success));
