//                              91- Converting Switch case into Object

function fun(value){
	var result = "";
	// switch(value){
	// 	case "alpha":
	// 		result = "Adams";
	// 		break;
	// 	case "bravo":
	// 		result = "Boston";
	// 		break;
	// 	case "charlie":
	// 		result = "Chicago";
	// 		break;
	// 	case "delta":
	// 		result = "Denver";
	// 		break;
	// 	case "echo":
	// 		result = "Easy";
	// 		break;
	// 	case "foxtrot":
	// 		result = "Frank";
	// 		break;
	// }
	// return result;

	var convertTo = {
		alpha: "Adams",
		bravo: "Boston",
		charlie: "Chicago",
		delta: "Denver",
		echo: "Easy",
		foxtrot: "Frank"
	};
	result = convertTo[value];
	return result;
}
console.log(fun("foxtrot"));
