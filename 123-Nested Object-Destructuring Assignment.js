const obj ={
	   a:{game:"Golf"},
	   b:{mobile:"poco"}
};
function fun(ar){
	   const { b:{mobile:msg}} = ar;  // Destruction
	   return msg;
}
console.log(fun(obj));
