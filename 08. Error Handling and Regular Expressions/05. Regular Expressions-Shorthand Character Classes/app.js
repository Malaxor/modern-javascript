let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;           // Must start with
re = / world$/i;     // Must ends with
re = /^hello$/i;     // Must begin and end with
re = /h.llo/i;      // Matches any ONE character
re = /h*llo/i;      // Matches any character 0 or more times
re = /gre?a?y/i;    // Optional character
re = /gre?a?y\?/i;    // Escape character 


// Brackets [] - Character Sets
re = /gr[ae]y/i;      // Must be an a or e
re = /[GF]ray/i;      // Must be a G or F
re = /[^GF]ray/i;      // Match anything except a G or F
re = /[A-Z]ray/;      // Match any uppercase letter
re = /[a-z]ray/;      // Match any lowercase letter
re = /[A-Za-z]ray/;   // Match any  letter
re = /[0-9][0-9]ray/;      // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;      // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i;      // Must occur exactly {m} amount of times
re = /Hel{2,}o/i;      // Must occur at least {m} times

// Paretheses () - Grouping
re = /^([0-9]x){3}$/

// Shorthand Character Classes
re = /\w/; // word character - alphanumeric or _
re = /\w+/; // plus = one or more 
re = /\W/; // non-word character
re = /\d/; // match any digit
re = /\d+/; // match any digit 0 or more times
re = /\D/; // match any non-digit
re = /\s/; // match whitespace character
re = /\S/; // match non-whitespace character
re = /Hell\b/i; // word boundary finds the exact match within in string, not just a piece of it

// Assertions
re = /x(?=y)/; // match x only if it's followed by y
re = /x(?!y)/; // match x only if it's NOT followed by y



// String to match
const str = '3';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {

  if(re.test(str)) {

    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);