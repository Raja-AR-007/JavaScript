//                              96-Record Collection (Add & Change values)

var collection= {
	1001: {
		mobile: "poco f1",
		ram: "3GB",
		color:["Red", "Greem", "Blue"]
	},
	1002: {
		mobile: "Realme x2",
		ram: "4GB",
		color:["Yellow", "White", "Gray"]
	},
	1003: {
		mobile: "Redmi Note 10",
		ram: "2GB",
		color:[ ]
	},
	1004: {
		mobile: "Lava",
		color:[ ]
	}
};
var collectionCopy= JSON.parse(JSON.stringify(collection))
function fun(id, prop, value) {
	if (value == "") {
		delete collection[id][prop];
	} else if(prop == "color") {
		collection[id][prop] = collection[id][prop] || [];
		collection[id][prop].push(value);
	} else {
		collection[id][prop] = value;
	}
	return collection;
}
fun(1004, "color", "violet");
fun(1004, "color", "pink");
fun(1004, "color", "gold");
fun(1003, "color", "silver");
fun(1003, "color", "merun");
fun(1003, "color", "purple");
fun(1002, "mobile", "black berry");
fun(1001, "ram", "6GB");
console.log(fun(1004, "ram", "5GB"));


/* output:
{
  '1001': { mobile: 'poco f1', ram: '6GB', color: [ 'Red', 'Greem', 'Blue' ] },
  '1002': {
    mobile: 'black berry',
    ram: '4GB',
    color: [ 'Yellow', 'White', 'Gray' ]
  },
  '1003': {
    mobile: 'Redmi Note 10',
    ram: '2GB',
    color: [ 'silver', 'merun', 'purple' ]
  },
  '1004': { mobile: 'Lava', color: [ 'violet', 'pink', 'gold' ], ram: '5GB' }
}
*/