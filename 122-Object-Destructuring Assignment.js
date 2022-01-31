//                          122-Destructing Assignment- Object

var volex = {x:"2.3", y:"6.5", z:"3.5"};

var x = volex.x;
var y = volex.y;
var z = volex.z;

const {x:a, y:b, z:c} = volex;  // Destructing

console.log(volex.x);

// and

const AVG_TEMPERATURES = {
	today:77.5,
	tomorrow:79
};
function getTempOfTmrow(avgTemp){
	"use strict";
	const { tomorrow:tempOfTomorrow } = avgTemp;  // Destructing
	return tempOfTomorrow;
}
console.log(getTempOfTmrow(AVG_TEMPERATURES));