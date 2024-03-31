/*

Write a function which takes a string as a input and returns the longest word in a string. if there are multiple longest string, then return the first one encountered.

NOTE : 
1. if the input string is empty or it contains only whitespaces then return false
2. the function should ignore leading and trailing spaces when determining the longest word

*/


/*-----------------------------------------------------------------------------------------*/
// APPROACH - 1 (using for loop)

// function to find the longest word from string
const findLongestWord = (str) => {
  
  // remove trailing and leading whitespaces of string
  /*
  
  The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.
  To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().
  
  */
  str = str.trim();

  // if after trimming, the length of string becomes 0,then return false
  if(str.length === 0)
  return false;

  // split the string into words array
  /*
  
  syntax : split(separator)
  This function returns an Array of strings, split at each point where the separator occurs in the given string.

  */
  str = str.split(" ");

  // traverse the array and find the longest word
  let ansIndex = 0;
  for(let i=1; i<str.length; i++){
    if(str[i].length > str[ansIndex].length)
    ansIndex = i;
  }
  return str[ansIndex];
}


console.log(findLongestWord("This is the first day of javascript"));






/*-----------------------------------------------------------------------------------------*/
// APPROACH - 2 (using sorting technique)

// function to find the longest word from string
const findLongestWord = (str) => {
  
   // remove trailing and leading whitespaces of string
   str = str.trim();
  
   // if after trimming, the length of string becomes 0,then return false
   if(str.length === 0)
   return false;

   // split the string into words array
   str = str.split(" ");

   // sort the array with respect to their length in descending order
   str.sort((a,b) => b.length-a.length);
   return str[0];

   // if want to sort the array in ascending order then return the last element
   // str.sort((a,b) => a.length-b.length);
   // return str.at(-1);
}


console.log(findLongestWord("This is the first day of javascript"));







/*-----------------------------------------------------------------------------------------*/
// APPROACH - 3 (using reduce higher order function)

//function to find the longest word from string
const findLongestWord = (str) => {
  
   // remove trailing and leading whitespaces of string
   str = str.trim();
  
   // if after trimming, the length of string becomes 0,then return false
   if(str.length === 0)
   return false;

   // split the string into words array
   str = str.split(" ");

   // use the reduce method of array
   /*

   The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in   the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).


   The reduce() method is an iterative method. It runs a "reducer" callback function over all elements in the array, in ascending-index order, and accumulates them into a single value. Every time, the return value of callbackFn is passed into callbackFn again on next invocation as accumulator. The final value of accumulator (which is the value returned from callbackFn on the final iteration of the array) becomes the return value of reduce(). 
   
   */

   str = str.reduce((accumulator,current) => current.length > accumulator.length ? current : accumulator);
   return str;

}

console.log(findLongestWord("This is the first day of javascript"));
  

