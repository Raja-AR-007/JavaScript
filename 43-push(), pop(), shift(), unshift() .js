//                        43-Manupulate Array with push()
// It will add one more value at "End" of the last value from array

var str1 = [["Raja",3,"Go"], [44,55,66]]
str1.push([23,"ball",44]);

var str2 = [45,55,66]
str2.push(44)

console.log(str1);
console.log(str2);

/*output:
[ [ 'Raja', 3, 'Go' ], [ 44, 55, 66 ], [ 23, 'ball', 44 ] ]
[ 45, 55, 66, 44 ]
*/


//                        46-Manupulate Array with unshift()
// It will add one more value to "begning" of the first value from array

var a1 = [["Raja",3,"Go"], [44,55,66]]
a1.unshift([23,"ball",44]);

var a2 = [45,55,66]
a2.unshift(44)

console.log(a1);
console.log(a2);

/*output:
[ [ 23, 'ball', 44 ], [ 'Raja', 3, 'Go' ], [ 44, 55, 66 ] ]
[ 44, 45, 55, 66 ]
*/


//                       44-Manupulate Array with pop()
// It will delete the "last" value of array

var a = [[1,"csk",3], [3,4,"abc"]];
a.pop();

var b = [23,65,87]
b.pop();

console.log(a);
console.log(b);

/*output:
[ [ 1, 'csk', 3 ] ]
[ 23, 65 ]
*/


//                        45-Manupulate Array with shift()
// It will delete the "first" value of array

var a = [[1,"csk",3], [3,4,"abc"]];
a.shift();

var b = [23,65,87]
b.shift();

console.log(a);
console.log(b);

/*output:
[ [ 3, 4, 'abc' ] ]
[ 65, 87 ]
*/


//                       47-Shopping List (Nested Array)

var list = [["cerial", 3], ["Milk", 2], ["Banana", 5], ["Juice", 3]];