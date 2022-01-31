//                          102- Nested for Loop

function multiplyAll(arr){
	var product=1;
	for(var i=0; i<arr.length; i++){
		for(var j=0; j<arr[i].length; j++){
			product *= arr[i][j];
		}
	}
	// return product;
	// or
	console.log('multiplyAll: ',product);
}
multiplyAll([[2,3,2], [3,6,4], [9,5,8,5]]);  
// or
// var product= multiplyAll([[2,3,2], [3,6,4], [9,5,8,5]]);
// console.log(product);


//                          103- do while Loop

var arr=[];
var i=10;
{
	arr.push(i);
	i++;
} while(i<5);
console.log(i,arr);