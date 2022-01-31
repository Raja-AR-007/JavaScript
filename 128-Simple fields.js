/*
const simple=function(name, age, gender) {
	return{
		   name:name,
		   age:age,
		   gender:gender
	};
};
console.log(simple("Raja", 22, "Male"));
*/

/*
const simple=(name, age, gender) =>({
		   name:name,
		   age:age,
		   gender:gender
});
console.log(simple("Raja", 22, "Male"));
*/

/*
const simple=(name, age, gender) =>({
		   name:name,
		   age:age,
		   gender:gender
});
console.log(simple("Raja", 22, "Male"));
*/

/*
const simple=(name, age, gender) =>{
		   return{
		   	           name:name,
		               age:age,
		               gender:gender
                  };
};
console.log(simple("Raja", 22, "Male"));
*/


// simple fields useful in Object by using arrow function

const simple=(name, age, gender) => ({name, age, gender}); //simple field
console.log(simple("Raja", 22, "Male"));
