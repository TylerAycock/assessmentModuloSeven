// Problem #1   
//Runtime Complexity: O(n^2)
//Space Complexity O(n)
const addToZero = (arr) => {                    
  for (let i = 0; i < arr.length; i++) {           //O(n)
    for (let x = 0; x < arr.length; x++) {         //O(n)
      if (arr[i] + arr[x] === 0) {
        return true;                               //O(1)
      }
    }
  }
  return false;                                    //O(1)
};

// console.log(addToZero([]))
// console.log(addToZero([1]))
// console.log(addToZero([1, 2, 3]))
// console.log(addToZero([1, 2, 3, -2]))

//Problem #2 
//Runtime Complexity: O(n^2)
//Space Complexity: O(n)
const hasUniqueChars = (s) => {
  split = s.split("");
  for (let i = 0; i < split.length; i++) {
    for (let x = i + 1; x < split.length; x++) {
      if (split[i] === split[x]) {
        return false;
      }
    }
  }
  return true;
};

// console.log(hasUniqueChars("Monday"));
// console.log(hasUniqueChars("Moonday"));

//Problem #3 
//Runtime Complexity: O(n)
//Space Complexity: O(n)
const isPangram = (s) => {
  let unique = new Set();
  for (let i = 0; i < s.length; i++) {
    if (/[a-z]/.test(s[i])) {
      unique.add(s[i]);
    }
  }
  if (unique.size === 26) {
    return true;
  } else {
    return false;
  }
};

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// console.log(isPangram("I like cats, but not mice"));

//Problem #4 
//Runtime Complexity: O(n)
//Space Complexity: O(n^2)
const findLongestWord = (arr) => {
  let length = 0;
  let longest = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > length) {
      length = arr[i].length;
      longest = arr[i];
    }
  }
  return longest;
};

// console.log(findLongestWord(["hi", "hello"]))
