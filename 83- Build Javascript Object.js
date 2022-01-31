//                                 83- Build Javascript "Object"

// object structure -> var buildObject = {property_name: values};
// we can specify Property name within "", '' or without that. 
var buildObject = {
	name: "Raja",
	age: 22,
	DOB: "06-02-1999",
	hobby: "Coding"
};
buildObject
console.log(buildObject);


//                                84- Dot Notation in Object
// In Dot notation '.', we don't want to specify double or single cotation "" or ''.
var buildObject2 = {
	name: "Raja",
	age: 22,
	DOB: "06-02-1999",
	hobby: "Coding"
};
var obj = buildObject2.DOB;
console.log(obj);


//                               85- Bracket Notation in Object
// In Bracket notation '[]', we should sepcify the property name between double or single cotation "" or ''. 
var buildObject3 = {
	name: "Raja",
	age: 22,
	DOB: "06-02-1999",
	hobby: "Coding"
};
var obj = buildObject3["DOB"];
console.log(obj);


//                              86- Variables would store Object

var buildObject4 = {
	name: "Raja",
	age: 22,
	DOB: "06-02-1999",
	hobby: "Coding"
};
var obj = buildObject4["DOB"];
var obj2 = buildObject4["hobby"];
console.log(obj +" "+ obj2);


//                              87- Accessing Object Properties with Variable

var buildObject5 = {
	name: "Raja",
	age: 22,
	DOB: "06-02-1999",
	hobby: "Coding"
};
var holdProperty = "name"  // Accessing Object Properties with Variable
var obj = buildObject5[holdProperty];
console.log(obj);


//                              88- Updating Object Properties

var buildObject6 = {
	name: "Raja",
	age: 22,
	DOB: "06-02-1999",
	hobby: "Coding"
};
buildObject6.name = "Raj Kumar";  // Updating Object Properties
var obj = buildObject6.name;
console.log(obj);


//                             89- Adding New Properties to the Object

var buildObject7 = {
	name: "Raja",
	age: 22,
	DOB: "06-02-1999",
	hobby: "Coding"
};
buildObject7.status = "Single";  // Adding New Properties to the Object
buildObject7["job"] = "Studying";  // Adding New Properties to the Object
var obj = buildObject7["status"];
var obj2 = buildObject7.job;
console.log(obj + "\t" + obj2);


//                             90- Delete Properties from Object

var buildObject8 = {
	name: "Raja",
	age: 22,
	DOB: "06-02-1999",
	hobby: "Coding",
	game: "Kabadi"
};
delete buildObject8.game;  // Delete Properties from Object
console.log(buildObject8);
// or
// var obj = buildObject8.game;
// console.log(obj);