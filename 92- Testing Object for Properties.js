//                             92- Testing Object for Properties

var myObj = {
	gift: "pony",
	pet: "kitten",
	bed: "sleigh"
};
function checkObj(checkProp){
	if(myObj.hasOwnProperty(checkProp)){  // hasOwnProperty()
		return myObj[checkProp];
	} else {
		return "Not found"
	}
}
console.log(checkObj("gift"));


//                            93- Manupulating Complex Object
// Multiple Objects in Array
var comObj = [
{
	rollNo: 1001,
	class: "MCA",
	year: 2021,
	subject: ["RMT", "COOOS", "PSP"],
	character: true
},
{
	hobby: "clashOfClans",
	mobile: ["poco f1", "Yureka black"],
	laptop: "lenovo",
	battery: 100
}
];

console.log(comObj[0]);

//                           94- Accessing 'Nested Objects'

var myBag ={
	smallBag:{
		inside:{
			note: "unRuled note",
			pen: "cello led",
			pencil: "Tip Pencil"
		},
		outside:{
			waterHolder: "hot water",
			color: "Green color bag"
		}
	}
};
var bagThings = myBag.smallBag.inside.note;
console.log(bagThings);
console.log(myBag.smallBag.inside);
console.log(myBag.smallBag.outside);
console.log(myBag.smallBag.outside['color']);


//					        95- Accessing 'Nested Array'

var myPlants =[
	{
		type: "c type",
		list: ["small", "medium", "big"]
	},
	{
		type:"d type",
		list:["easy", "moderate", "hard"]
	}
];
console.log('95- Accessing Nested Array');
var tree = myPlants[0].list[2];
console.log(tree);
console.log(myPlants[1].list[0]);