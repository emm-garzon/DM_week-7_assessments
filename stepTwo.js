// SUM ZERO

const addToZero = (numArray) => {
  let equalsZero = false;
  for (let i = 0; i < numArray.length; i++) {
    for (let j = 0; j < numArray.length; j++) {
      if (i !== j) {
        if (numArray[i] + numArray[j] === 0) {
          equalsZero = "true";
        }
      }
    }
  }
  return equalsZero;
};

// TIME COMPLEXITY: O(n^2)
// Extra Credit -- SPACE COMPLEXITY: O(n)

// TESTS:

console.log(addToZero([])); // -> False
console.log(addToZero([1])); // -> False
console.log(addToZero([1, 2, 3])); // -> False
console.log(addToZero([1, 2, 3, -2])); // -> True

// UNIQUE CHARACTERS

const hasUniqueChars = (word) => {
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (i !== j) {
        if (word.charAt(i) === word.charAt(j)) {
          return false;
        }
      }
    }
  }
  return true;
};

// TIME COMPLEXITY: O(n^2)
// Extra Credit -- SPACE COMPLEXITY: O(n)

// TESTS:

console.log(hasUniqueChars("Monday")); // -> True
console.log(hasUniqueChars("Moonday")); // -> False

// PANGRAM SENTENCE

const isPangram = (string) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let regex = /\s/g;
  let lowercase = string.toLowerCase().replace(regex, "");

  for (let i = 0; i < alphabet.length; i++) {
    if (lowercase.indexOf(alphabet[i]) === -1) {
      return "not pangram";
    }
  }

  return "pangram";
};

// TIME COMPLEXITY: O(n^2) --> thought process: though a for loop is employed alongside the 'toLowerCase', and 'replace' methods; the for loop only iterates over the alphabet string, which is a predetermined 26 characters long, and will never change, whereas the two other methods used to iterate over the string passed into the function are dependent on the length of the string itself.
// Extra Credit -- SPACE COMPLEXITY: O(n)

// TESTS

console.log(isPangram("The quick brown fox jumps over the lazy dog!")); // -> True
console.log(isPangram("I like cats, but not mice")); // -> False

// LONGEST WORD

const findLongestWord = (arrStr) => {
  let longestWord = 0;
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i].length > longestWord) {
      longestWord = arrStr[i].length;
    }
  }
  return longestWord;
};

// TIME COMPLEXITY: O(n)
// Extra Credit -- SPACE COMPLEXITY: O(n)

// TESTS

console.log(findLongestWord(["hi", "hello"])); // -> 5
