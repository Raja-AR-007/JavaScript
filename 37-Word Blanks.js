//                            37-Word Blanks

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
	var result = "";
	result += "The " + myAdjective + " " + myNoun + " " + myVerb + " too " + myAdverb;
	return result;
}

console.log(wordBlanks("dog", "big", "ran", "fastly"));
console.log(wordBlanks("car", "slow", "flew", "slowly"));