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
re = /gr[ae]y/i; // must be an a or e
re = /[GF]ray/i; // must be either G or F
re = /[^GF]ray/i; // matches anything except a G or F
re = /[A-Z]ray/; // matches any uppercase letter from A to Z
re = /[a-z]ray/; // matches any lowercase letter from A to Z
re = /[A-Za-z]ray/; // matches any uppercase and lowercase letter from A to Z
re = /[0-9]ray/; // matches any digit 


// Braces {} - Quantifiers
re = /Hel{2}o/i; // must occur exactly {x} amount of times
re = /Hel{2,4}o/i;  // must occur BETWEEEN {x, y} amount of times
re = /Hel{2,}o/i;  // must occur AT LEAST {x} amount of times

// Paretheses () - Grouping
re = /^([0-9]x){3}/;


// String to match
const str = '3x3x3x3x';

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