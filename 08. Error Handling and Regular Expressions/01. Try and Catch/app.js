
const user = { email: 'jdoe@gmail.com' };

try {
  // produce a ReferenceError
  // myFunction();

  // produce a TypeError
  // null.myFunction();

  // produce SyntaxError
  // console.log(eval('2+2'));
  // console.log(eval('Hello World'));

  // produce a URIError
  // decodeURIComponent('%');

  if(!user.name) {
    
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }
}
catch(e) {

  console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
}
// runs irrespective of results
finally {

  console.log('finally runs regardless of results');
}

console.log('Program continues');