// const stats ={
// 	max:56.78,
// 	standard_deviation: 4.34,
// 	median: 34.45,
// 	min:-0.75,
// 	average: 35.85
// };
// const half =(function(){
// 	return function half(stats){
// 		return(stats.max + stats.min) / 2.0;
// 	};
// })();
// console.log(stats);
// console.log(half(stats));

                          // 126- Pass an Object in -Destructuring Assignment
// it is commonly use in API call getting info from Ajax Request & API Request.

// const stats ={
// 	max:56.78,
// 	standard_deviation: 4.34,
// 	median: 34.45,
// 	min:-0.75,
// 	average: 35.85
// };
// const half =(function(){
// 	return function half({max, min}){
// 		return(max + min) / 2.0;
// 	};
// })();
// console.log(stats);
// console.log(half(stats));

const stats ={
	max:56.78,
	standard_deviation: 4.34,
	median: 34.45,
	min:-0.75,
	average: 35.85
};
const half =(function half({max, min}){
		return(max + min) / 2.0;
});
console.log(stats);
console.log(half(stats));