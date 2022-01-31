/*
var SpaceShuttle =function(targetPlanet){
	   this.targetPlanet=targetPlanet;
}
var zeus = new SpaceShuttle("jupiter");
console.log(zeus.targetPlanet);
*/

/*
class SpaceShuttle{
	   constructor(targetPlanet){
	   	    this.targetPlanet = targetPlanet;
	   };
};
var zeus = new spaceShuttle("jupiter");
console.log(zeus.targetPlanet);
*/

/*
// class within function
function makeClass(){
	   class Vegetables {
	   	    constructor(name){
	   	    	   this.name=name;
	   	    }	   	
	   }
	   return Vegetables;
}
const veg = makeClass();
const carrot= new veg("carrot 🥕"); //extantiating object
const healthy=carrot.name
console.log(healthy);
*/

function makeClass(){
	   class Vegetables {
	   	    constructor(name){
	   	    	   this.name=name;
	   	    }	   	
	   }
	   return Vegetables;
}
const Vegetables = makeClass(); // different
const carrot= new Vegetables("carrot 🥕"); //extantiating object
const healthy=carrot.name
console.log(healthy);


