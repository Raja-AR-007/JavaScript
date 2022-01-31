const increment =(function() { 
    return function increment(num, val=1){
	  return num + val;
	  };
}) ();
console.log(increment(5, 5));
console.log(increment(7));  // value didn't passed  for 'val' and setted as default