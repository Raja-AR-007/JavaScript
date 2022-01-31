// ' , , , ,' is used to choose values in our wish

// const [x, y, z] =[4,5,6,7,8];
const [x, y, , , z] =[4,5,6,7,8];
console.log(x,y,z)


let a=7,b=8;
(()=>{
	   [a,b] = [b,a];
})();
console.log(a);
console.log(b);
