
let re;
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // g = global search(doesn't stop at first instance)
// console.log(re);
// console.log(re.source);

// exec() - will return result in an array or null
// let result = re.exec('hello world');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - returns true or false
// result = re.test('Hello');
// console.log(result);

// match() - return result array or null
// let str = 'Hello There';
// result = str.match(re);
// console.log(result);

// search() - returns index of the first match. If not found, it returns -1
// str = 'Hello There';
// result = str.search(re);
// console.log(result);

// replace() - returns a new string with some or all matches of a pattern
str = 'Hello There';
let newStr = str.replace(re, 'Hi');
console.log(newStr);