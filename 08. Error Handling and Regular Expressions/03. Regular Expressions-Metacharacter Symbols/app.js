// literal charactres
let re = /hello/i;
// metacharacters
re = /^h/i; // must start with
re = /world$/i; // must end with
re = /^hello$/; // begins and ends with
re = /h.llo/i; // matches any ONE character
re = /h*llo/i; // matches and character 0 or more times
re = /gre?a?y/; // optional character (question mark after the character)
re = /gre?a?y\?/i; // escape character (back slash)

const str = 'Gray?';
const result = re.exec(str);

console.log(result);

function reTest(re, str) {

    if(re.test(str)) {
        console.log(`${str} matches ${re.source}.`);
    }
    else {
        console.log(`${str} does not match ${re.source}.`);
    }
}

reTest(re, str);