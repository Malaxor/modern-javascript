
let re;
re = /hello/i;
// console.log(re);
// console.log(re.source);

// exec() - tries matching the variable re to the string
// returs the results in an array or null if there is no match
const result = re.exec('hello world');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - returns true of ralse if there's an exact match
const result1 = re.test('Hello');
// console.log(result1);

// match() - returns result array or null (similar to exec)
let str = 'Hello there';
const result2 = str.match(re);
console.log(result2);

// search() - returns starting index of the first match
str = 'Brad, Hello There'
const result3 = str.search(re);
console.log(result3);

// replace() - returns a new string, with some or all matches of a pattern
str = 'Hello There';
const newStr = str.replace(re, 'Hi');
console.log(newStr);