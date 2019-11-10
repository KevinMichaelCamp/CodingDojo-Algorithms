/* Create a function that returns a boolean whether the string is a strict palindrome.  For "a x a" or "racecar", return true.  Do not ignore space, punctuation, and capitalization: if given "Dud" or "oho!", return false. */
function isPalindrome(str){
  for(var i = 0; i < str.length / 2; i++){
    if(str[i] != str[str.length -  1 - i]){
      return false
    }
  return true
  }
}
console.log(isPalindrome('racecar'));
