/*
const obj ={
	gear:2,
	setGear: function(newGear){
		   this.gear=newGear;
	}
};
obj.setGear(4);
console.log(obj.gear);
*/

const obj ={
	gear:2,
	setGear(newGear){ // Declarative Function
		   this.gear=newGear;
	}
};
obj.setGear(4);
console.log(obj.gear);
