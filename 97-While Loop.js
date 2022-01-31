//                            97-While Loop

var myArray=[];
var i=0;
while(i<5){
	myArray.push(i);
	i++;
}
console.log(myArray);

/*output:
[ 0, 1, 2, 3, 4 ]
*/

//                            98-For Loop

var myArray2=[];
for(var i=0; i<5; i++){
	myArray2.push(i);
}
console.log(myArray2)

/*output:
[ 0, 1, 2, 3, 4 ]
*/


//                           99-Even Numbers using for 'Loop'
var myArray3=[];
for(i=0; i<10; i+=2){
	myArray3.push(i);
}
console.log(myArray3);

/*output:
[ 0, 2, 4, 6, 8 ]
*/

//                          Odd Numbers using for 'Loop'
var myArray4=[];
for(i=1; i<10; i+=2){
	myArray4.push(i);
}
console.log(myArray4);

/*output:
[ 1, 3, 5, 7, 9 ]
*/

//                          100-Counting Backwards using for 'Loop'

var myArray5=[];
for(i=10; i>0; i-=2){
	myArray5.push(i);
}
console.log(myArray5);



//                          101-Iteration Through an Array with For Loop 
// (adding arrray Items)

var myArray6=[3,4,2,3];
var myTotal=0;
for(var i=0; i<myArray6.length; i++){
	myTotal += myArray6[i];
}
console.log('Total :', myTotal);

