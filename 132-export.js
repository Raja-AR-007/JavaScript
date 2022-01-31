//                    Use export to Reuse a code Block

// const capitalizeString = (string) => {
// 	return string.charAt(0).toUpperCase()+string.slice(1);	
// }

const capitalizeString = function(string) {
	return string.charAt(0).toUpperCase()+string.slice(1);	
}
// var b=capitalizeString('abc');
// console.log(b);

export { capitalizeString };

export const a="raja";
export const b="yogesh";
