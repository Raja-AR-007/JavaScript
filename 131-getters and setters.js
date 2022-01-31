function make(){
	   class Thermostat{
	   	   constructor(temp){
	   	   	   this._temp=5/9*(temp -32);
	   	   }
	   	   get temperature(){
	   	   	   return this._temp;
	   	   }
	   	   set temperature(updateTemp){
	   	   	   this._temp= updateTemp;
	   	   }
	   	   }
	   	   return Thermostat;
}
const Thermostat= make();
const thermo = new Thermostat (72);
console.log('Current Temperature: ', thermo._temp)
let temp = thermo.temperature;
thermo.temperature=20;
temp=thermo.temperature;
console.log('Updated Temp: ', temp);