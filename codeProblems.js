
// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.
let array = [12, 63, -12, 30, 4, 0, 13];

const sumZero = (arr) => {
    let result = "False";
for(let i = 0; i < array.length; i++) {
  for(let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
      result = "True";
    } 
  }
}
}
return result;
}


console.log(sumZero(array));
// Run time is O(n^2) because of the nested for loops, both of which have a dynamic stopping point.
// -------------------------------------------------------------------------------------------------

// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

  const hasUniqueChars = (word) => {
     return new Set(word.toLowerCase().match(/[a-z]/g)).size === word.length ? true : false;
  }

//   console.log(hasUniqueChars("Monday"));
// Run time is constant because the constructor Set appends new values.
// -------------------------------------------------------------------------------------------------


// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
// Write a function to check a sentence to see if it is a pangram or not.
const isPangram = (sentence) => new Set(sentence.toLowerCase().match(/[a-z]/g)).size === 26;

// console.log(isPangram("The quick brown fox jumps over the lazy dog."));
// Run time is constant because the constructor Set appends new values.
// -------------------------------------------------------------------------------------------------

// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

const find_longest_word = (arr) => {
    let word = "";
    arr.forEach((elem)=> {
      elem.length > word.length ? word = elem : word;
    })
    return word;
}

// console.log(find_longest_word(["hi", "hello", "hola"]));
// Run time is linear because the forEach method has a dynamic array size that is is iterating through.



