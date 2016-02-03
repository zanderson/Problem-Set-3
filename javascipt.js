// PRACTICE

// function backwards(str) {
// 	 return str.split('').reverse().join('');
// };
// console.log(backwards("Zoe anderson"));                            

  // first we split the string which creates an array of characters, e.g. ['c','a','t']
  // then we call the reverse function on this array 
  // and finally we turn the reversed array back into a string using the join function

 //FIND LONGEST WORD

function longestString(str) {
	var arr = str.split(" ");
	arr.sort(function(str1,str2){
	if (str1.length < str2.length) {
		return true;}
	else if(str1.length > str2.length){
		return false;}
	else {
		return false;}
});
return arr[0];
}

console.log(longestString("Dexter is a good dog."));


// 1. Write a function palindrome that takes a single string parameter and returns true if the parameter is a palindrome (the string is the same forward as it is backward), otherwise returns false. For example: palindrome("racecar") should return true because "racecar" is also "racecar" backwards.

// function palindrome(str){
// 	if (str.split('').reverse().join('') === str){
// 		return true;}
// 		else{
// 			return false;
// 		}
// 	};
// console.log(palindrome("zoe"));
// console.log(palindrome("racecar"));

         
// 2. Write a function dashInsert that takes a single num parameter and returns the num with inserted dashes ('-') between adjacent odd digits. For example: if num is 454793 the output should be "4547-9-3".

// function dashInsert(number){
// 	var numberArray = number.toString().split('');
// 	console.log(numberArray);
// 	for(var i=1; i<numberArray.length; i++){
// 		if(numberArray[i-1]%2 !== 0 && numberArray[i]%2 !== 0){
// 			numberArray[i] = ('-' + numberArray[i]);
// 		}
// 	}
// 	console.log(numberArray.join(""));

// };
// console.log(dashInsert(454793));




