//repeat practice
let isloggedIn = false;
let test = "Welcome";
let result = text.repeat(isloggedIn ? 1 : 0);
console.log(result);

// User input
let count = userInput;
let output = "*".repeat(count || 0);

//
let level = 0;
let starts = "emoji".repeat(level);
console.log(starts);

//basic examples
let word = "Hello!";
let repeatedWorld = word.repeat(3);
console.log(repeatedWorld);


//the count exceptions and limitations

//count must be non-negative  number
"Test".repeat(-1);   //RangeError

//count must be finit number
"Test".repeat(Infinity);   //RangeError

//count round it down to the nearest integer
"test".repeat(2.7);

//count is 0 return empty string
"Test".repeat(0);






