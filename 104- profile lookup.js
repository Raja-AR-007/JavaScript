var contact = [
	{
		"firstName": "Raja",
		"lastName": "A",
		"number": "112233",
		"likes": ["pizza", "dog", "red"]
			
	},
	{
		"firstName": "Venkatesh",
		"lastName": "w",
		"number": "445566",
		"likes": ["Burger", "hourse", "Green"]
	},
	{
		"firstName": "Gopal",
		"lastName": "Krishnan",
		"number": "778899",
		"likes": ["Fries", "Fish", "blue"]
	},
	{
		"firstName": "Gokulraj",
		"lastName": "Raj",
		"number": "101011",
		"likes": ["popcorn", "cat", "Yellow"]
	}
		
];
function fun(name, prop){
	for(i=0; i<contact.length; i++){
		if(contact[i].firstName === name){
			return contact[i][prop];
		 } // else if(contact[i].lastName === name){
		// 	return contact[i][prop];
		// }
	}
	return "Not such values";
}
var data = fun("Raja", "number");
console.log(data);